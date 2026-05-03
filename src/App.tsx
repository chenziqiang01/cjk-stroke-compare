import {
  BookOpen,
  Gauge,
  Languages,
  Layers,
  Pause,
  Play,
  RotateCcw,
  Search,
  SkipBack,
  SkipForward,
} from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";
import groupsRaw from "./data/characterGroups.json";
import strokesRaw from "./data/strokes.json";
import {
  getGroupCopy,
  getGroupSearchText,
  getInitialLocale,
  localeOptions,
  saveLocale,
  translations,
  type Locale,
  type Translation,
} from "./i18n";
import type {
  CharacterGroup,
  PlaybackState,
  Region,
  StrokeCharacter,
  StrokeDataset,
} from "./types";

const groups = groupsRaw as CharacterGroup[];
const strokes = strokesRaw as StrokeDataset;
const regions: Region[] = ["zhHans", "ja", "zhHant"];
const glyphTransform = "translate(0 900) scale(1 -1)";

const regionVisualMeta: Record<Region, { color: string; pale: string }> = {
  zhHans: {
    color: "#0f766e",
    pale: "#ccfbf1",
  },
  zhHant: {
    color: "#b45309",
    pale: "#ffedd5",
  },
  ja: {
    color: "#4f46e5",
    pale: "#e0e7ff",
  },
};

const dataSourceLinks = [
  { label: "AnimCJK", url: "https://github.com/parsimonhi/animCJK" },
];

const relatedLinks = [
  { label: "Make Me a Hanzi", url: "https://www.skishore.me/makemeahanzi/" },
  { label: "Hanzi Writer", url: "https://hanziwriter.org/docs.html" },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getStrokeRecord(group: CharacterGroup, region: Region) {
  const character = group.variants[region];
  return strokes[region]?.[character];
}

function medianPath(points: number[][]) {
  return points
    .map(([x, y], index) => `${index === 0 ? "M" : "L"} ${x} ${y}`)
    .join(" ");
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () =>
      setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}

function CharacterCard({
  copy,
  record,
  region,
  currentStroke,
}: {
  copy: Translation;
  record: StrokeCharacter | undefined;
  region: Region;
  currentStroke: number;
}) {
  const visualMeta = regionVisualMeta[region];
  const regionText = copy.regionMeta[region];

  if (!record) {
    return (
      <article className="character-card character-card--missing">
        <header className="character-card__header">
          <span className="region-label">
            <span
              className="region-dot"
              style={{ background: visualMeta.color }}
            />
            {regionText.shortLabel}
          </span>
        </header>
        <div className="missing-state">{copy.missingState}</div>
      </article>
    );
  }

  const visibleStrokeCount = clamp(currentStroke, 0, record.strokes.length);
  const activeStrokeIndex =
    visibleStrokeCount > 0 && currentStroke <= record.strokes.length
      ? visibleStrokeCount - 1
      : -1;
  const svgTitleId = `${region}-${record.character}-title`;

  return (
    <article className="character-card">
      <header className="character-card__header">
        <span className="region-label">
          <span
            className="region-dot"
            style={{ background: visualMeta.color }}
          />
          {regionText.shortLabel}
        </span>
        <strong>{record.character}</strong>
      </header>

      <div
        className="stroke-stage"
        style={
          {
            "--accent": visualMeta.color,
            "--accent-soft": visualMeta.pale,
          } as CSSProperties
        }
      >
        <svg
          aria-labelledby={svgTitleId}
          className="stroke-svg"
          role="img"
          viewBox="0 0 1024 1024"
        >
          <title id={svgTitleId}>
            {copy.formatSvgTitle(
              regionText.label,
              record.character,
              visibleStrokeCount,
              record.strokes.length,
            )}
          </title>
          <g transform={glyphTransform}>
            {record.strokes.map((stroke, index) => {
              const isVisible = index < visibleStrokeCount;
              const isActive = index === activeStrokeIndex;
              return (
                <path
                  className={[
                    "glyph-stroke",
                    isVisible ? "glyph-stroke--visible" : "",
                    isActive ? "glyph-stroke--active" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  d={stroke}
                  key={`${record.character}-${index}`}
                />
              );
            })}
            {record.medians.map((points, index) => {
              const isVisible = index < visibleStrokeCount;
              const isActive = index === activeStrokeIndex;
              return (
                <path
                  className={[
                    "median-stroke",
                    isVisible ? "median-stroke--visible" : "",
                    isActive ? "median-stroke--active" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  d={medianPath(points)}
                  key={`${record.character}-median-${index}`}
                  pathLength={1}
                />
              );
            })}
          </g>
        </svg>
      </div>

      <footer className="character-card__footer">
        <span>
          {copy.formatStrokeCount(visibleStrokeCount, record.strokes.length)}
        </span>
      </footer>
    </article>
  );
}

function OverlayView({
  copy,
  records,
  currentStroke,
}: {
  copy: Translation;
  records: Array<{ region: Region; record: StrokeCharacter | undefined }>;
  currentStroke: number;
}) {
  return (
    <section className="overlay-view" aria-label={copy.overlayViewAria}>
      <div className="overlay-stage">
        <svg className="overlay-svg" role="img" viewBox="0 0 1024 1024">
          <title>{copy.overlayTitle}</title>
          <g transform={glyphTransform}>
            {records.map(({ region, record }) => {
              if (!record) {
                return null;
              }
              const visibleStrokeCount = clamp(
                currentStroke,
                0,
                record.strokes.length,
              );
              return (
                <g
                  className="overlay-layer"
                  key={`${region}-${record.character}`}
                  style={
                    {
                      "--layer-color": regionVisualMeta[region].color,
                    } as CSSProperties
                  }
                >
                  {record.strokes
                    .slice(0, visibleStrokeCount)
                    .map((stroke, index) => (
                      <path d={stroke} key={`${region}-${index}`} />
                    ))}
                </g>
              );
            })}
          </g>
        </svg>
      </div>
    </section>
  );
}

function App() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [locale, setLocale] = useState<Locale>(() => getInitialLocale());
  const [selectedGroupId, setSelectedGroupId] = useState(groups[0].id);
  const [query, setQuery] = useState("");
  const [playback, setPlayback] = useState<PlaybackState>({
    currentStroke: 1,
    isPlaying: true,
    speedMs: prefersReducedMotion ? 1400 : 850,
    overlayEnabled: true,
  });
  const copy = translations[locale];

  const selectedGroup =
    groups.find((group) => group.id === selectedGroupId) ?? groups[0];

  const selectedGroupCopy = useMemo(
    () => getGroupCopy(selectedGroup, locale),
    [locale, selectedGroup],
  );

  const selectedRecords = useMemo(
    () =>
      regions.map((region) => ({
        region,
        record: getStrokeRecord(selectedGroup, region),
      })),
    [selectedGroup],
  );

  useEffect(() => {
    saveLocale(locale);
    document.documentElement.lang = copy.htmlLang;
    document.title = copy.documentTitle;
  }, [copy.documentTitle, copy.htmlLang, locale]);

  const maxStrokeCount = useMemo(
    () =>
      Math.max(
        ...selectedRecords.map(({ record }) => record?.strokes.length ?? 0),
      ),
    [selectedRecords],
  );

  const filteredGroups = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return groups;
    }

    return groups.filter((group) => {
      const searchable = getGroupSearchText(group, locale);
      return searchable.includes(normalizedQuery);
    });
  }, [locale, query]);

  useEffect(() => {
    setPlayback((current) => ({
      ...current,
      currentStroke: clamp(current.currentStroke, 0, maxStrokeCount),
      isPlaying: maxStrokeCount > 0 ? current.isPlaying : false,
    }));
  }, [maxStrokeCount]);

  useEffect(() => {
    setPlayback((current) => ({
      ...current,
      speedMs: prefersReducedMotion
        ? Math.max(current.speedMs, 1200)
        : current.speedMs,
    }));
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!playback.isPlaying) {
      return;
    }

    if (playback.currentStroke >= maxStrokeCount) {
      setPlayback((current) => ({ ...current, isPlaying: false }));
      return;
    }

    const timer = window.setTimeout(() => {
      setPlayback((current) => ({
        ...current,
        currentStroke: clamp(current.currentStroke + 1, 0, maxStrokeCount),
      }));
    }, playback.speedMs);

    return () => window.clearTimeout(timer);
  }, [
    maxStrokeCount,
    playback.currentStroke,
    playback.isPlaying,
    playback.speedMs,
  ]);

  const setCurrentStroke = (nextStroke: number) => {
    setPlayback((current) => ({
      ...current,
      currentStroke: clamp(nextStroke, 0, maxStrokeCount),
      isPlaying: false,
    }));
  };

  const togglePlayback = () => {
    setPlayback((current) => ({
      ...current,
      currentStroke:
        current.currentStroke >= maxStrokeCount ? 0 : current.currentStroke,
      isPlaying: !current.isPlaying,
    }));
  };

  const selectGroup = (groupId: string) => {
    if (groupId === selectedGroupId) {
      return;
    }

    setSelectedGroupId(groupId);
    setPlayback((current) => ({
      ...current,
      currentStroke: 1,
      isPlaying: true,
    }));
  };

  const setPlaybackSpeed = (speedMs: number) => {
    setPlayback((current) => ({
      ...current,
      speedMs,
    }));
  };

  const statusMessage = copy.formatStatus(
    selectedGroupCopy.meaning,
    playback.currentStroke,
    maxStrokeCount,
  );

  const renderDetailPanel = (className: string) => (
    <section className={className} aria-label={copy.detailAria}>
      <p className="section-label">{copy.currentGroup}</p>
      <h2>
        {regions.map((region) => selectedGroup.variants[region]).join(" / ")}
      </h2>
      <p className="meaning-line">{selectedGroupCopy.meaning}</p>
      <p className="note-line">{selectedGroupCopy.note}</p>
      <div className="focus-list" aria-label={copy.focusListAria}>
        {selectedGroupCopy.focus.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );

  return (
    <div className="app-shell">
      <aside className="sidebar" aria-label={copy.sidebarAria}>
        <div className="brand-block">
          <h1>{copy.appTitle}</h1>
          <p>{copy.appSubtitle}</p>
        </div>

        <label className="language-select" htmlFor="locale-select">
          <span>
            <Languages aria-hidden="true" size={16} />
            {copy.languageLabel}
          </span>
          <select
            id="locale-select"
            onChange={(event) => setLocale(event.target.value as Locale)}
            value={locale}
          >
            {localeOptions.map((option) => (
              <option key={option.code} value={option.code}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="search-field" htmlFor="group-search">
          <Search aria-hidden="true" size={18} />
          <span className="sr-only">{copy.searchSrOnly}</span>
          <input
            id="group-search"
            onChange={(event) => setQuery(event.target.value)}
            placeholder={copy.searchPlaceholder}
            type="search"
            value={query}
          />
        </label>

        <nav className="group-list" aria-label={copy.groupListAria}>
          {filteredGroups.map((group) => {
            const groupCopy = getGroupCopy(group, locale);

            return (
              <button
                aria-current={
                  group.id === selectedGroup.id ? "true" : undefined
                }
                className="group-item"
                key={group.id}
                onClick={() => selectGroup(group.id)}
                type="button"
              >
                <span className="group-item__chars">
                  {regions.map((region) => group.variants[region]).join(" / ")}
                </span>
                <span className="group-item__meaning">{groupCopy.meaning}</span>
              </button>
            );
          })}
        </nav>

        {renderDetailPanel("detail-panel sidebar-detail-panel")}
      </aside>

      <main className="workspace">
        <header className="workspace-header">
          <div className="workspace-title">
            <p className="section-label">{copy.workspaceLabel}</p>
            <h2>
              {regions
                .map((region) => selectedGroup.variants[region])
                .join(" / ")}
            </h2>
          </div>

          <div className="region-legend" aria-label={copy.regionLegendAria}>
            {regions.map((region) => (
              <div className="legend-item" key={region}>
                <span
                  className="legend-swatch"
                  style={{ background: regionVisualMeta[region].color }}
                />
                <span>{copy.regionMeta[region].shortLabel}</span>
              </div>
            ))}
          </div>

          <div className="stroke-counter" aria-live="polite">
            {copy.formatStrokeCount(playback.currentStroke, maxStrokeCount)}
          </div>
        </header>

        <section className="comparison-grid" aria-label={copy.comparisonAria}>
          {selectedRecords.map(({ region, record }) => (
            <CharacterCard
              copy={copy}
              currentStroke={playback.currentStroke}
              key={region}
              record={record}
              region={region}
            />
          ))}
        </section>

        <section className="playback-panel" aria-label={copy.playbackAria}>
          <div className="button-row">
            <button
              aria-label={copy.previousStroke}
              className="icon-button"
              disabled={playback.currentStroke <= 0}
              onClick={() => setCurrentStroke(playback.currentStroke - 1)}
              type="button"
            >
              <SkipBack aria-hidden="true" size={18} />
            </button>
            <button
              aria-label={
                playback.isPlaying ? copy.pausePlayback : copy.playStrokes
              }
              className="icon-button icon-button--primary"
              onClick={togglePlayback}
              type="button"
            >
              {playback.isPlaying ? (
                <Pause aria-hidden="true" size={20} />
              ) : (
                <Play aria-hidden="true" size={20} />
              )}
            </button>
            <button
              aria-label={copy.nextStroke}
              className="icon-button"
              disabled={playback.currentStroke >= maxStrokeCount}
              onClick={() => setCurrentStroke(playback.currentStroke + 1)}
              type="button"
            >
              <SkipForward aria-hidden="true" size={18} />
            </button>
            <button
              aria-label={copy.replay}
              className="icon-button"
              onClick={() =>
                setPlayback((current) => ({
                  ...current,
                  currentStroke: 0,
                  isPlaying: true,
                }))
              }
              type="button"
            >
              <RotateCcw aria-hidden="true" size={18} />
            </button>
          </div>

          <label className="range-control" htmlFor="speed-control">
            <span>
              <Gauge aria-hidden="true" size={16} />
              {copy.speed}
            </span>
            <strong>{copy.formatSpeed(playback.speedMs)}</strong>
            <input
              id="speed-control"
              max={1800}
              min={300}
              onChange={(event) => setPlaybackSpeed(Number(event.target.value))}
              onInput={(event) =>
                setPlaybackSpeed(Number(event.currentTarget.value))
              }
              step={50}
              type="range"
              value={playback.speedMs}
            />
          </label>

          <button
            aria-pressed={playback.overlayEnabled}
            className="toggle-button"
            onClick={() =>
              setPlayback((current) => ({
                ...current,
                overlayEnabled: !current.overlayEnabled,
              }))
            }
            type="button"
          >
            <Layers aria-hidden="true" size={18} />
            <span>{copy.overlayToggle}</span>
          </button>
        </section>

        {playback.overlayEnabled ? (
          <OverlayView
            copy={copy}
            currentStroke={playback.currentStroke}
            records={selectedRecords}
          />
        ) : null}

        {renderDetailPanel("detail-panel workspace-detail-panel")}

        <section className="source-section">
          <h2>
            <BookOpen aria-hidden="true" size={16} />
            {copy.sourceTitle}
          </h2>
          <p>{copy.sourceDescription}</p>
          <div className="source-link-groups">
            <div className="source-link-group">
              <span>{copy.dataSourceLabel}</span>
              <div className="source-links">
                {dataSourceLinks.map((link) => (
                  <a
                    href={link.url}
                    key={link.url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="source-link-group">
              <span>{copy.relatedSourceLabel}</span>
              <div className="source-links">
                {relatedLinks.map((link) => (
                  <a
                    href={link.url}
                    key={link.url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <p className="sr-only" aria-live="polite">
          {statusMessage}
        </p>
      </main>
    </div>
  );
}

export default App;
