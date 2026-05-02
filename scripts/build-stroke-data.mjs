import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import groups from "../src/data/characterGroups.json" with { type: "json" };

const SOURCES = {
  zhHans:
    "https://raw.githubusercontent.com/parsimonhi/animCJK/master/graphicsZhHans.txt",
  zhHant:
    "https://raw.githubusercontent.com/parsimonhi/animCJK/master/graphicsZhHant.txt",
  ja: "https://raw.githubusercontent.com/parsimonhi/animCJK/master/graphicsJa.txt",
};

const OUTPUT_FILE = path.resolve("src/data/strokes.json");

async function loadSource(region, url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${region}: ${response.status}`);
  }

  const entries = new Map();
  const text = await response.text();
  for (const line of text.split("\n")) {
    if (!line.trim()) {
      continue;
    }

    const record = JSON.parse(line);
    entries.set(record.character, {
      character: record.character,
      region,
      source: "AnimCJK",
      strokes: record.strokes,
      medians: record.medians,
    });
  }

  return entries;
}

async function main() {
  const sources = Object.fromEntries(
    await Promise.all(
      Object.entries(SOURCES).map(async ([region, url]) => [
        region,
        await loadSource(region, url),
      ]),
    ),
  );

  const dataset = {
    zhHans: {},
    zhHant: {},
    ja: {},
  };

  const missing = [];
  for (const group of groups) {
    for (const [region, character] of Object.entries(group.variants)) {
      const record = sources[region].get(character);
      if (!record) {
        missing.push(`${group.id}:${region}:${character}`);
        continue;
      }
      dataset[region][character] = record;
    }
  }

  if (missing.length > 0) {
    throw new Error(`Missing stroke data:\n${missing.join("\n")}`);
  }

  await mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
  await writeFile(OUTPUT_FILE, `${JSON.stringify(dataset, null, 2)}\n`);

  const characterCount = Object.values(dataset).reduce(
    (count, records) => count + Object.keys(records).length,
    0,
  );
  console.log(
    `Wrote ${OUTPUT_FILE} with ${groups.length} groups and ${characterCount} regional records.`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
