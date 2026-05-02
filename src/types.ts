export type Region = "zhHans" | "zhHant" | "ja";

export type CharacterGroup = {
  id: string;
  meaning: string;
  variants: Record<Region, string>;
  note: string;
  focus: string[];
};

export type StrokeCharacter = {
  character: string;
  region: Region;
  source: string;
  strokes: string[];
  medians: number[][][];
};

export type StrokeDataset = Record<Region, Record<string, StrokeCharacter>>;

export type PlaybackState = {
  currentStroke: number;
  isPlaying: boolean;
  speedMs: number;
  overlayEnabled: boolean;
};
