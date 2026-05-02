import type { CharacterGroup, Region } from "./types";

export type Locale = "zhHans" | "zhHant" | "ja" | "ko" | "en";

type GroupCopy = {
  meaning: string;
  note: string;
  focus: string[];
};

type RegionCopy = Record<Region, { label: string; shortLabel: string }>;

export type Translation = {
  htmlLang: string;
  documentTitle: string;
  appTitle: string;
  appSubtitle: string;
  languageLabel: string;
  sidebarAria: string;
  searchSrOnly: string;
  searchPlaceholder: string;
  groupListAria: string;
  detailAria: string;
  currentGroup: string;
  focusListAria: string;
  workspaceLabel: string;
  regionLegendAria: string;
  comparisonAria: string;
  playbackAria: string;
  previousStroke: string;
  pausePlayback: string;
  playStrokes: string;
  nextStroke: string;
  replay: string;
  speed: string;
  overlayToggle: string;
  overlayViewAria: string;
  overlayTitle: string;
  missingState: string;
  sourceTitle: string;
  sourceDescription: string;
  dataSourceLabel: string;
  relatedSourceLabel: string;
  regionMeta: RegionCopy;
  formatSpeed: (speedMs: number) => string;
  formatStrokeCount: (current: number, total: number) => string;
  formatStatus: (meaning: string, current: number, total: number) => string;
  formatSvgTitle: (
    regionLabel: string,
    character: string,
    current: number,
    total: number,
  ) => string;
};

export const localeOptions: Array<{ code: Locale; label: string }> = [
  { code: "en", label: "English" },
  { code: "ja", label: "日本語" },
  { code: "zhHans", label: "简体中文" },
  { code: "zhHant", label: "繁體中文" },
  { code: "ko", label: "한국어" },
];

const chineseRegionMeta: RegionCopy = {
  zhHans: {
    label: "简体中文",
    shortLabel: "简中",
  },
  zhHant: {
    label: "繁体中文",
    shortLabel: "繁中",
  },
  ja: {
    label: "日本新字体",
    shortLabel: "日文",
  },
};

const traditionalRegionMeta: RegionCopy = {
  zhHans: {
    label: "簡體中文",
    shortLabel: "簡中",
  },
  zhHant: {
    label: "繁體中文",
    shortLabel: "繁中",
  },
  ja: {
    label: "日本新字體",
    shortLabel: "日文",
  },
};

const japaneseRegionMeta: RegionCopy = {
  zhHans: {
    label: "簡体字中国語",
    shortLabel: "簡体",
  },
  zhHant: {
    label: "繁体字中国語",
    shortLabel: "繁体",
  },
  ja: {
    label: "日本新字体",
    shortLabel: "日本",
  },
};

const englishRegionMeta: RegionCopy = {
  zhHans: {
    label: "Simplified Chinese",
    shortLabel: "SC",
  },
  zhHant: {
    label: "Traditional Chinese",
    shortLabel: "TC",
  },
  ja: {
    label: "Japanese shinjitai",
    shortLabel: "JP",
  },
};

const koreanRegionMeta: RegionCopy = {
  zhHans: {
    label: "중국어 간체",
    shortLabel: "간체",
  },
  zhHant: {
    label: "중국어 번체",
    shortLabel: "번체",
  },
  ja: {
    label: "일본 신자체",
    shortLabel: "일본",
  },
};

const zh: Translation = {
  htmlLang: "zh",
  documentTitle: "汉字笔画对比",
  appTitle: "汉字笔画对比",
  appSubtitle: "简中、日文、繁中字形与笔顺对照",
  languageLabel: "界面语言",
  sidebarAria: "字组选择",
  searchSrOnly: "搜索字组",
  searchPlaceholder: "搜索字、含义或要点",
  groupListAria: "精选字组",
  detailAria: "当前字组说明",
  currentGroup: "当前字组",
  focusListAria: "对比要点",
  workspaceLabel: "字形工作区",
  regionLegendAria: "区域颜色说明",
  comparisonAria: "三种字形笔画对比",
  playbackAria: "播放控制",
  previousStroke: "上一笔",
  pausePlayback: "暂停播放",
  playStrokes: "播放笔画",
  nextStroke: "下一笔",
  replay: "重播",
  speed: "速度",
  overlayToggle: "叠加对比",
  overlayViewAria: "三种字形叠加对比",
  overlayTitle: "简中、繁中、日文字形叠加",
  missingState: "暂无笔画数据",
  sourceTitle: "来源",
  sourceDescription:
    "笔画数据从 AnimCJK 三套区域图形文件抽取，并只打包当前精选字组。",
  dataSourceLabel: "数据来源",
  relatedSourceLabel: "上游 / 相关资料",
  regionMeta: chineseRegionMeta,
  formatSpeed: (speedMs) => `${speedMs}ms / 笔`,
  formatStrokeCount: (current, total) => `${current} / ${total} 笔`,
  formatStatus: (meaning, current, total) =>
    `${meaning}，当前第 ${current} / ${total} 笔`,
  formatSvgTitle: (regionLabel, character, current, total) =>
    `${regionLabel}「${character}」第 ${current} / ${total} 笔`,
};

const zhHant: Translation = {
  ...zh,
  htmlLang: "zh-Hant",
  documentTitle: "漢字筆畫對比",
  appTitle: "漢字筆畫對比",
  appSubtitle: "簡中、日文、繁中字形與筆順對照",
  languageLabel: "介面語言",
  sidebarAria: "字組選擇",
  searchSrOnly: "搜尋字組",
  searchPlaceholder: "搜尋字、含義或要點",
  groupListAria: "精選字組",
  detailAria: "目前字組說明",
  currentGroup: "目前字組",
  focusListAria: "對比要點",
  workspaceLabel: "字形工作區",
  regionLegendAria: "區域顏色說明",
  comparisonAria: "三種字形筆畫對比",
  playbackAria: "播放控制",
  previousStroke: "上一筆",
  pausePlayback: "暫停播放",
  playStrokes: "播放筆畫",
  nextStroke: "下一筆",
  replay: "重播",
  speed: "速度",
  overlayToggle: "疊加對比",
  overlayViewAria: "三種字形疊加對比",
  overlayTitle: "簡中、繁中、日文字形疊加",
  missingState: "暫無筆畫資料",
  sourceTitle: "來源",
  sourceDescription:
    "筆畫資料從 AnimCJK 三套區域圖形檔案抽取，並只打包目前精選字組。",
  dataSourceLabel: "資料來源",
  relatedSourceLabel: "上游 / 相關資料",
  regionMeta: traditionalRegionMeta,
  formatSpeed: (speedMs) => `${speedMs}ms / 筆`,
  formatStrokeCount: (current, total) => `${current} / ${total} 筆`,
  formatStatus: (meaning, current, total) =>
    `${meaning}，目前第 ${current} / ${total} 筆`,
  formatSvgTitle: (regionLabel, character, current, total) =>
    `${regionLabel}「${character}」第 ${current} / ${total} 筆`,
};

const ja: Translation = {
  htmlLang: "ja",
  documentTitle: "漢字筆画比較",
  appTitle: "漢字筆画比較",
  appSubtitle: "簡体字・日本新字体・繁体字の字形と筆順を比較",
  languageLabel: "表示言語",
  sidebarAria: "字形グループの選択",
  searchSrOnly: "字形グループを検索",
  searchPlaceholder: "字・意味・注目点を検索",
  groupListAria: "選択済み字形グループ",
  detailAria: "現在の字形グループ説明",
  currentGroup: "現在の字形グループ",
  focusListAria: "比較の注目点",
  workspaceLabel: "字形ワークスペース",
  regionLegendAria: "地域別カラー凡例",
  comparisonAria: "三種類の字形の筆画比較",
  playbackAria: "再生コントロール",
  previousStroke: "前の画",
  pausePlayback: "再生を一時停止",
  playStrokes: "筆順を再生",
  nextStroke: "次の画",
  replay: "もう一度再生",
  speed: "速度",
  overlayToggle: "重ね合わせ比較",
  overlayViewAria: "三種類の字形の重ね合わせ比較",
  overlayTitle: "簡体字・繁体字・日本字形の重ね合わせ",
  missingState: "筆画データがありません",
  sourceTitle: "出典",
  sourceDescription:
    "筆画データは AnimCJK の三地域向けグリフファイルから抽出し、現在の選定字形グループだけを同梱しています。",
  dataSourceLabel: "データ出典",
  relatedSourceLabel: "上流 / 関連資料",
  regionMeta: japaneseRegionMeta,
  formatSpeed: (speedMs) => `${speedMs}ms / 画`,
  formatStrokeCount: (current, total) => `${current} / ${total} 画`,
  formatStatus: (meaning, current, total) =>
    `${meaning}、現在 ${current} / ${total} 画目`,
  formatSvgTitle: (regionLabel, character, current, total) =>
    `${regionLabel}「${character}」${current} / ${total} 画目`,
};

const en: Translation = {
  htmlLang: "en",
  documentTitle: "Kanji Stroke Comparison",
  appTitle: "Kanji Stroke Comparison",
  appSubtitle:
    "Compare Simplified Chinese, Japanese, and Traditional Chinese glyphs and stroke order",
  languageLabel: "Language",
  sidebarAria: "Character group selection",
  searchSrOnly: "Search character groups",
  searchPlaceholder: "Search by character, meaning, or focus",
  groupListAria: "Selected character groups",
  detailAria: "Current character group details",
  currentGroup: "Current group",
  focusListAria: "Comparison focus",
  workspaceLabel: "Glyph workspace",
  regionLegendAria: "Region color legend",
  comparisonAria: "Stroke comparison for three glyph forms",
  playbackAria: "Playback controls",
  previousStroke: "Previous stroke",
  pausePlayback: "Pause playback",
  playStrokes: "Play strokes",
  nextStroke: "Next stroke",
  replay: "Replay",
  speed: "Speed",
  overlayToggle: "Overlay comparison",
  overlayViewAria: "Overlay comparison for three glyph forms",
  overlayTitle: "Simplified, Traditional, and Japanese glyph overlay",
  missingState: "No stroke data available",
  sourceTitle: "Sources",
  sourceDescription:
    "Stroke data is extracted from AnimCJK's three regional glyph sets, with only the selected character groups bundled locally.",
  dataSourceLabel: "Data source",
  relatedSourceLabel: "Upstream / related",
  regionMeta: englishRegionMeta,
  formatSpeed: (speedMs) => `${speedMs}ms / stroke`,
  formatStrokeCount: (current, total) => `${current} / ${total} strokes`,
  formatStatus: (meaning, current, total) =>
    `${meaning}, currently stroke ${current} of ${total}`,
  formatSvgTitle: (regionLabel, character, current, total) =>
    `${regionLabel} ${character}, stroke ${current} of ${total}`,
};

const ko: Translation = {
  htmlLang: "ko",
  documentTitle: "한자 필획 비교",
  appTitle: "한자 필획 비교",
  appSubtitle: "중국어 간체, 일본 신자체, 중국어 번체의 글자 형태와 필순 비교",
  languageLabel: "표시 언어",
  sidebarAria: "글자 그룹 선택",
  searchSrOnly: "글자 그룹 검색",
  searchPlaceholder: "글자, 뜻, 비교 포인트 검색",
  groupListAria: "선택된 글자 그룹",
  detailAria: "현재 글자 그룹 설명",
  currentGroup: "현재 글자 그룹",
  focusListAria: "비교 포인트",
  workspaceLabel: "글자 형태 작업 영역",
  regionLegendAria: "지역별 색상 설명",
  comparisonAria: "세 가지 글자 형태의 필획 비교",
  playbackAria: "재생 컨트롤",
  previousStroke: "이전 획",
  pausePlayback: "재생 일시정지",
  playStrokes: "필순 재생",
  nextStroke: "다음 획",
  replay: "다시 재생",
  speed: "속도",
  overlayToggle: "겹쳐 비교",
  overlayViewAria: "세 가지 글자 형태 겹쳐 비교",
  overlayTitle: "간체, 번체, 일본 글자 형태 겹쳐 보기",
  missingState: "필획 데이터가 없습니다",
  sourceTitle: "출처",
  sourceDescription:
    "필획 데이터는 AnimCJK의 세 지역용 글리프 파일에서 추출했으며, 현재 선별한 글자 그룹만 로컬에 포함했습니다.",
  dataSourceLabel: "데이터 출처",
  relatedSourceLabel: "상위 / 관련 자료",
  regionMeta: koreanRegionMeta,
  formatSpeed: (speedMs) => `${speedMs}ms / 획`,
  formatStrokeCount: (current, total) => `${current} / ${total} 획`,
  formatStatus: (meaning, current, total) =>
    `${meaning}, 현재 ${current} / ${total} 획`,
  formatSvgTitle: (regionLabel, character, current, total) =>
    `${regionLabel} 「${character}」 ${current} / ${total} 획`,
};

export const translations: Record<Locale, Translation> = {
  zhHans: {
    ...zh,
    htmlLang: "zh-Hans",
  },
  zhHant,
  ja,
  ko,
  en,
};

const groupTranslations: Record<string, Partial<Record<Locale, GroupCopy>>> = {
  country: {
    zhHant: {
      meaning: "國家、區域",
      note: "繁體保留內部的「或」，簡體和日文新字體都寫作「国」。",
      focus: ["外框收筆", "內部部件", "簡繁差異"],
    },
    ja: {
      meaning: "国・地域",
      note: "繁体字は内部の「或」を保ち、簡体字と日本新字体はどちらも「国」と書きます。",
      focus: ["外枠の終筆", "内部部品", "簡繁差"],
    },
    en: {
      meaning: "Country, region",
      note: "Traditional Chinese keeps 「或」 inside the enclosure, while Simplified Chinese and Japanese shinjitai both use 「国」.",
      focus: ["Outer enclosure", "Inner component", "Simplified/traditional split"],
    },
    ko: {
      meaning: "국가, 지역",
      note: "번체는 내부의 「或」을 보존하고, 간체와 일본 신자체는 모두 「国」로 씁니다.",
      focus: ["바깥 둘레 마무리", "내부 구성 요소", "간번체 차이"],
    },
  },
  diagram: {
    zhHant: {
      meaning: "圖、圖畫",
      note: "三者外框相近，內部結構差異很明顯，適合看部件替換。",
      focus: ["外框", "內部結構", "日文字形"],
    },
    ja: {
      meaning: "図・絵",
      note: "三者の外枠は近く、内部構造の違いがはっきりしているため、部品置換を見るのに向いています。",
      focus: ["外枠", "内部構造", "日本字形"],
    },
    en: {
      meaning: "Diagram, picture",
      note: "The outer enclosure is similar across all three forms, while the inner structure makes the component substitution easy to see.",
      focus: ["Outer enclosure", "Inner structure", "Japanese form"],
    },
    ko: {
      meaning: "도표, 그림",
      note: "세 형태의 바깥 둘레는 비슷하지만 내부 구조 차이가 뚜렷해 구성 요소 교체를 보기 좋습니다.",
      focus: ["바깥 둘레", "내부 구조", "일본 글자 형태"],
    },
  },
  study: {
    zhHant: {
      meaning: "學習、學問",
      note: "繁體上部保留複雜構件，簡體和日文新字體更接近。",
      focus: ["上部構件", "子部", "筆畫數量"],
    },
    ja: {
      meaning: "学習・学問",
      note: "繁体字は上部に複雑な部品を残し、簡体字と日本新字体はより近い形です。",
      focus: ["上部部品", "子の部分", "画数"],
    },
    en: {
      meaning: "Study, learning",
      note: "Traditional Chinese keeps a more complex top component, while Simplified Chinese and Japanese shinjitai are closer to each other.",
      focus: ["Top component", "Child component", "Stroke count"],
    },
    ko: {
      meaning: "학습, 학문",
      note: "번체는 위쪽의 복잡한 구성 요소를 보존하고, 간체와 일본 신자체는 서로 더 가깝습니다.",
      focus: ["위쪽 구성 요소", "子 부분", "획수"],
    },
  },
  meeting: {
    zhHant: {
      meaning: "會合、會議",
      note: "繁體中部層次更多，簡體和日文新字體都大幅簡化。",
      focus: ["人字頭", "中部層次", "收尾"],
    },
    ja: {
      meaning: "会合・会議",
      note: "繁体字は中央の層が多く、簡体字と日本新字体はいずれも大きく簡略化されています。",
      focus: ["人のかしら", "中央の層", "終筆"],
    },
    en: {
      meaning: "Meeting, gathering",
      note: "Traditional Chinese has more middle layers, while Simplified Chinese and Japanese shinjitai are both heavily simplified.",
      focus: ["Top person shape", "Middle layers", "Ending strokes"],
    },
    ko: {
      meaning: "모임, 회의",
      note: "번체는 가운데 층위가 더 많고, 간체와 일본 신자체는 모두 크게 단순화되었습니다.",
      focus: ["人 머리", "가운데 층위", "마무리"],
    },
  },
  body: {
    zhHant: {
      meaning: "身體、形式",
      note: "繁體右側由「豊」構成，簡體和日文新字體改為「本」。",
      focus: ["人旁", "右側部件", "重心"],
    },
    ja: {
      meaning: "身体・形式",
      note: "繁体字の右側は「豊」から成り、簡体字と日本新字体では「本」に変わります。",
      focus: ["にんべん", "右側部品", "重心"],
    },
    en: {
      meaning: "Body, form",
      note: "Traditional Chinese builds the right side from 「豊」, while Simplified Chinese and Japanese shinjitai use 「本」.",
      focus: ["Person radical", "Right component", "Center of gravity"],
    },
    ko: {
      meaning: "몸, 형태",
      note: "번체의 오른쪽은 「豊」로 이루어지고, 간체와 일본 신자체는 「本」으로 바뀝니다.",
      focus: ["人 변", "오른쪽 구성 요소", "무게중심"],
    },
  },
  music: {
    zhHant: {
      meaning: "音樂、快樂",
      note: "三種寫法都不同，適合觀察上部與下部木形的演變。",
      focus: ["上部點畫", "木部", "整體重心"],
    },
    ja: {
      meaning: "音楽・楽しさ",
      note: "三つの書き方がすべて異なり、上部と下部の木形の変化を観察しやすい例です。",
      focus: ["上部の点画", "木の部分", "全体の重心"],
    },
    en: {
      meaning: "Music, joy",
      note: "All three forms differ, making this a useful example for observing the evolution of the upper marks and lower wood shape.",
      focus: ["Upper marks", "Wood component", "Overall balance"],
    },
    ko: {
      meaning: "음악, 즐거움",
      note: "세 가지 쓰임이 모두 달라 위쪽 점획과 아래쪽 木 형태의 변화를 관찰하기 좋습니다.",
      focus: ["위쪽 점획", "木 부분", "전체 균형"],
    },
  },
  air: {
    zhHant: {
      meaning: "氣體、氣息",
      note: "繁體內部保留「米」，日文新字體保留內部橫斜構件。",
      focus: ["外側氣旁", "內部構件", "末筆"],
    },
    ja: {
      meaning: "気体・気息",
      note: "繁体字は内部に「米」を保ち、日本新字体は内部の横斜めの部品を残します。",
      focus: ["外側の気構え", "内部部品", "終筆"],
    },
    en: {
      meaning: "Air, breath",
      note: "Traditional Chinese keeps 「米」 inside, while Japanese shinjitai keeps an inner horizontal-diagonal component.",
      focus: ["Outer air shape", "Inner component", "Final stroke"],
    },
    ko: {
      meaning: "공기, 기운",
      note: "번체는 내부의 「米」를 보존하고, 일본 신자체는 내부의 가로·사선 구성 요소를 남깁니다.",
      focus: ["바깥 气 형태", "내부 구성 요소", "마지막 획"],
    },
  },
  wide: {
    zhHant: {
      meaning: "廣大、寬廣",
      note: "繁體內部較複雜，日文新字體用「ム」形簡化。",
      focus: ["广字頭", "內部部件", "左右空間"],
    },
    ja: {
      meaning: "広大・広い",
      note: "繁体字は内部がより複雑で、日本新字体は「ム」の形で簡略化されています。",
      focus: ["まだれ", "内部部品", "左右の空間"],
    },
    en: {
      meaning: "Wide, broad",
      note: "Traditional Chinese has a more complex interior, while Japanese shinjitai simplifies it with a 「ム」 shape.",
      focus: ["Dotted-cliff radical", "Inner component", "Left-right space"],
    },
    ko: {
      meaning: "넓음, 광대함",
      note: "번체는 내부가 더 복잡하고, 일본 신자체는 「ム」 형태로 단순화합니다.",
      focus: ["广 머리", "내부 구성 요소", "좌우 공간"],
    },
  },
  dragon: {
    zhHant: {
      meaning: "龍",
      note: "三者外形差異大，適合作為高複雜度對照樣例。",
      focus: ["頭部", "軀幹", "筆畫密度"],
    },
    ja: {
      meaning: "竜",
      note: "三者の外形差が大きく、複雑度の高い比較例として適しています。",
      focus: ["頭部", "胴体", "画の密度"],
    },
    en: {
      meaning: "Dragon",
      note: "The three outlines differ substantially, making this a strong high-complexity comparison sample.",
      focus: ["Head", "Body", "Stroke density"],
    },
    ko: {
      meaning: "용",
      note: "세 형태의 외형 차이가 커서 복잡도가 높은 비교 예시로 적합합니다.",
      focus: ["머리", "몸통", "획 밀도"],
    },
  },
  equal: {
    zhHant: {
      meaning: "整齊、一致",
      note: "三種寫法輪廓相近但底部處理不同。",
      focus: ["頂部文形", "底部豎畫", "對稱性"],
    },
    ja: {
      meaning: "整っている・一致",
      note: "三つの書き方は輪郭が近い一方で、下部の処理が異なります。",
      focus: ["上部の文形", "下部の縦画", "対称性"],
    },
    en: {
      meaning: "Orderly, consistent",
      note: "The outlines are similar across the three forms, but the lower section is handled differently.",
      focus: ["Top text-like shape", "Lower verticals", "Symmetry"],
    },
    ko: {
      meaning: "가지런함, 일치",
      note: "세 형태의 윤곽은 비슷하지만 아래쪽 처리가 다릅니다.",
      focus: ["위쪽 文 형태", "아래쪽 세로획", "대칭성"],
    },
  },
  sell: {
    zhHant: {
      meaning: "買賣、出售",
      note: "日文新字體和簡體都簡化，但下部結構不同。",
      focus: ["上部士形", "中部", "下部收束"],
    },
    ja: {
      meaning: "売買・販売",
      note: "日本新字体と簡体字はいずれも簡略化されていますが、下部構造が異なります。",
      focus: ["上部の士形", "中央部", "下部の収束"],
    },
    en: {
      meaning: "Trade, sell",
      note: "Japanese shinjitai and Simplified Chinese are both simplified, but their lower structures differ.",
      focus: ["Top scholar shape", "Middle section", "Lower closure"],
    },
    ko: {
      meaning: "매매, 판매",
      note: "일본 신자체와 간체는 모두 단순화되었지만 아래쪽 구조가 다릅니다.",
      focus: ["위쪽 士 형태", "가운데", "아래쪽 마무리"],
    },
  },
  pressure: {
    zhHant: {
      meaning: "壓力、壓住",
      note: "簡體與日文新字體都保留厂形外框，內部寫法不同。",
      focus: ["厂部", "內部點畫", "重心"],
    },
    ja: {
      meaning: "圧力・押さえる",
      note: "簡体字と日本新字体はいずれも厂形の外枠を保ちますが、内部の書き方が異なります。",
      focus: ["厂の部分", "内部の点画", "重心"],
    },
    en: {
      meaning: "Pressure, press down",
      note: "Simplified Chinese and Japanese shinjitai both keep the cliff-like outer frame, but their interiors differ.",
      focus: ["Cliff component", "Inner marks", "Center of gravity"],
    },
    ko: {
      meaning: "압력, 누르다",
      note: "간체와 일본 신자체는 모두 厂 형태의 바깥 틀을 보존하지만 내부 쓰임이 다릅니다.",
      focus: ["厂 부분", "내부 점획", "무게중심"],
    },
  },
  picture: {
    zhHant: {
      meaning: "畫、繪畫",
      note: "繁體中部層次更多，簡體和日文新字體接近。",
      focus: ["頂部橫畫", "田部", "底部框線"],
    },
    ja: {
      meaning: "絵・描くこと",
      note: "繁体字は中央の層が多く、簡体字と日本新字体は近い形です。",
      focus: ["上部の横画", "田の部分", "下部の枠線"],
    },
    en: {
      meaning: "Picture, drawing",
      note: "Traditional Chinese has more middle layering, while Simplified Chinese and Japanese shinjitai are close.",
      focus: ["Top horizontal", "Field component", "Bottom frame"],
    },
    ko: {
      meaning: "그림, 그리기",
      note: "번체는 가운데 층위가 더 많고, 간체와 일본 신자체는 서로 가깝습니다.",
      focus: ["위쪽 가로획", "田 부분", "아래쪽 틀선"],
    },
  },
  gate: {
    zhHant: {
      meaning: "門、入口",
      note: "簡體變成單側門形，繁體與日文保留雙扇門結構。",
      focus: ["左右門柱", "頂部", "內側空間"],
    },
    ja: {
      meaning: "門・入口",
      note: "簡体字は片側だけの門形になり、繁体字と日本字形は両開きの門構造を保ちます。",
      focus: ["左右の門柱", "上部", "内側の空間"],
    },
    en: {
      meaning: "Gate, entrance",
      note: "Simplified Chinese becomes a one-sided gate shape, while Traditional Chinese and Japanese keep the double-door structure.",
      focus: ["Left and right posts", "Top section", "Inner space"],
    },
    ko: {
      meaning: "문, 입구",
      note: "간체는 한쪽 문 형태가 되고, 번체와 일본 글자 형태는 양쪽 문 구조를 보존합니다.",
      focus: ["좌우 문기둥", "위쪽", "내부 공간"],
    },
  },
  vehicle: {
    zhHant: {
      meaning: "車、車輛",
      note: "簡體大幅減少交叉結構，繁體和日文基本一致。",
      focus: ["中軸", "橫畫", "簡化方向"],
    },
    ja: {
      meaning: "車・車両",
      note: "簡体字は交差構造を大きく減らし、繁体字と日本字形はほぼ同じです。",
      focus: ["中心軸", "横画", "簡略化の方向"],
    },
    en: {
      meaning: "Car, vehicle",
      note: "Simplified Chinese greatly reduces the crossing structure, while Traditional Chinese and Japanese are mostly identical.",
      focus: ["Center axis", "Horizontal strokes", "Simplification direction"],
    },
    ko: {
      meaning: "차, 차량",
      note: "간체는 교차 구조를 크게 줄이고, 번체와 일본 글자 형태는 거의 같습니다.",
      focus: ["중심축", "가로획", "단순화 방향"],
    },
  },
  east: {
    zhHant: {
      meaning: "東方",
      note: "簡體改變中部結構，繁體與日文保留日木組合感。",
      focus: ["中部日形", "撇捺", "末筆"],
    },
    ja: {
      meaning: "東方",
      note: "簡体字は中央構造を変え、繁体字と日本字形は日と木を組み合わせた印象を保ちます。",
      focus: ["中央の日形", "左払いと右払い", "終筆"],
    },
    en: {
      meaning: "East",
      note: "Simplified Chinese changes the middle structure, while Traditional Chinese and Japanese keep the feeling of sun plus wood.",
      focus: ["Middle sun shape", "Left and right sweeps", "Final stroke"],
    },
    ko: {
      meaning: "동쪽",
      note: "간체는 가운데 구조를 바꾸고, 번체와 일본 글자 형태는 日과 木이 결합된 느낌을 보존합니다.",
      focus: ["가운데 日 형태", "삐침과 파임", "마지막 획"],
    },
  },
  edge: {
    zhHant: {
      meaning: "邊、旁邊",
      note: "同有走之底，但內部部件複雜度差異很大。",
      focus: ["走之底", "內部部件", "收筆位置"],
    },
    ja: {
      meaning: "辺・そば",
      note: "いずれも走之底を持ちますが、内部部品の複雑さは大きく異なります。",
      focus: ["しんにょう", "内部部品", "終筆位置"],
    },
    en: {
      meaning: "Edge, beside",
      note: "All three include the walking radical, but the inner component complexity differs sharply.",
      focus: ["Walking radical", "Inner component", "Final stroke position"],
    },
    ko: {
      meaning: "가장자리, 곁",
      note: "세 형태 모두 辶 받침을 가지지만 내부 구성 요소의 복잡도 차이가 큽니다.",
      focus: ["辶 받침", "내부 구성 요소", "마지막 획 위치"],
    },
  },
  change: {
    zhHant: {
      meaning: "變化、改變",
      note: "繁體上部保留雙言構件，日文和簡體都更緊湊。",
      focus: ["上部", "又部", "筆畫密度"],
    },
    ja: {
      meaning: "変化・変える",
      note: "繁体字は上部に二つの言部品を残し、日本新字体と簡体字はどちらもよりコンパクトです。",
      focus: ["上部", "又の部分", "画の密度"],
    },
    en: {
      meaning: "Change, transform",
      note: "Traditional Chinese keeps the double speech components on top, while Japanese and Simplified Chinese are more compact.",
      focus: ["Top section", "Again component", "Stroke density"],
    },
    ko: {
      meaning: "변화, 바꾸다",
      note: "번체는 위쪽의 두 言 구성 요소를 보존하고, 일본 신자체와 간체는 더 압축된 형태입니다.",
      focus: ["위쪽", "又 부분", "획 밀도"],
    },
  },
  read: {
    zhHant: {
      meaning: "閱讀、讀書",
      note: "三者都從言，但右側聲符的簡化路徑不同。",
      focus: ["言旁", "右側部件", "左右比例"],
    },
    ja: {
      meaning: "読書・読むこと",
      note: "三者はいずれも言に従いますが、右側の声符の簡略化経路が異なります。",
      focus: ["言偏", "右側部品", "左右比率"],
    },
    en: {
      meaning: "Read, reading",
      note: "All three use the speech radical, but the right-side phonetic component follows different simplification paths.",
      focus: ["Speech radical", "Right component", "Left-right proportion"],
    },
    ko: {
      meaning: "읽기, 독서",
      note: "세 형태 모두 言 계열을 쓰지만 오른쪽 성부의 단순화 경로가 다릅니다.",
      focus: ["言 변", "오른쪽 구성 요소", "좌우 비율"],
    },
  },
  write: {
    zhHant: {
      meaning: "寫、書寫",
      note: "繁體保留寶蓋下的複雜結構，簡體和日文新字體一致。",
      focus: ["寶蓋", "下部結構", "橫折"],
    },
    ja: {
      meaning: "書く・書写",
      note: "繁体字はうかんむり下の複雑な構造を保ち、簡体字と日本新字体は一致します。",
      focus: ["うかんむり", "下部構造", "横折"],
    },
    en: {
      meaning: "Write, writing",
      note: "Traditional Chinese keeps a complex structure under the roof radical, while Simplified Chinese and Japanese shinjitai match.",
      focus: ["Roof radical", "Lower structure", "Horizontal turn"],
    },
    ko: {
      meaning: "쓰다, 필기",
      note: "번체는 갓머리 아래의 복잡한 구조를 보존하고, 간체와 일본 신자체는 같습니다.",
      focus: ["갓머리", "아래쪽 구조", "가로꺾임"],
    },
  },
  record: {
    zhHant: {
      meaning: "記錄、錄入",
      note: "繁體和日文保留金旁，簡體省去左側部件。",
      focus: ["金旁", "右側", "簡化幅度"],
    },
    ja: {
      meaning: "記録・入力",
      note: "繁体字と日本字形は金偏を保ち、簡体字は左側部品を省きます。",
      focus: ["金偏", "右側", "簡略化の幅"],
    },
    en: {
      meaning: "Record, input",
      note: "Traditional Chinese and Japanese keep the metal radical, while Simplified Chinese removes the left component.",
      focus: ["Metal radical", "Right side", "Degree of simplification"],
    },
    ko: {
      meaning: "기록, 입력",
      note: "번체와 일본 글자 형태는 金 변을 보존하고, 간체는 왼쪽 구성 요소를 생략합니다.",
      focus: ["金 변", "오른쪽", "단순화 정도"],
    },
  },
  book: {
    zhHant: {
      meaning: "書、書籍",
      note: "簡體線條高度概括，繁體與日文保留聿曰結構。",
      focus: ["聿部", "曰部", "連筆感"],
    },
    ja: {
      meaning: "本・書籍",
      note: "簡体字は線を大きく要約し、繁体字と日本字形は聿と曰の構造を保ちます。",
      focus: ["聿の部分", "曰の部分", "連筆感"],
    },
    en: {
      meaning: "Book",
      note: "Simplified Chinese abstracts the lines heavily, while Traditional Chinese and Japanese keep the brush-and-sun structure.",
      focus: ["Brush component", "Sun component", "Connected-stroke feel"],
    },
    ko: {
      meaning: "책, 서적",
      note: "간체는 선을 크게 압축하고, 번체와 일본 글자 형태는 聿와 曰 구조를 보존합니다.",
      focus: ["聿 부분", "曰 부분", "이어 쓰는 느낌"],
    },
  },
  rotate: {
    zhHant: {
      meaning: "轉動、轉變",
      note: "三者左側車部處理不同，右側也有區域差異。",
      focus: ["車部", "右側", "左右比例"],
    },
    ja: {
      meaning: "回転・転換",
      note: "三者は左側の車部の処理が異なり、右側にも地域差があります。",
      focus: ["車部", "右側", "左右比率"],
    },
    en: {
      meaning: "Rotate, transform",
      note: "The vehicle component on the left is handled differently across all three, and the right side also varies by region.",
      focus: ["Vehicle component", "Right side", "Left-right proportion"],
    },
    ko: {
      meaning: "회전, 전환",
      note: "세 형태는 왼쪽 車 부분의 처리가 다르고, 오른쪽에도 지역별 차이가 있습니다.",
      focus: ["車 부분", "오른쪽", "좌우 비율"],
    },
  },
  transmit: {
    zhHant: {
      meaning: "傳遞、傳說",
      note: "都從人旁，右側從繁到簡逐步減筆。",
      focus: ["人旁", "右側專/云形", "重心"],
    },
    ja: {
      meaning: "伝達・伝説",
      note: "いずれもにんべんを持ち、右側は繁から簡へ段階的に画が減ります。",
      focus: ["にんべん", "右側の専/云形", "重心"],
    },
    en: {
      meaning: "Transmit, legend",
      note: "All three use the person radical, while the right side progressively loses strokes from traditional to simplified forms.",
      focus: ["Person radical", "Right-side dedicated/cloud shape", "Center of gravity"],
    },
    ko: {
      meaning: "전달, 전설",
      note: "세 형태 모두 人 변을 쓰며, 오른쪽은 번체에서 간체로 갈수록 획이 줄어듭니다.",
      focus: ["人 변", "오른쪽 專/云 형태", "무게중심"],
    },
  },
  district: {
    zhHant: {
      meaning: "區域、區分",
      note: "繁體內部重複口形，簡體和日文新字體保留外框與叉形。",
      focus: ["外框", "內部口形", "叉形"],
    },
    ja: {
      meaning: "区域・区分",
      note: "繁体字は内部で口形を反復し、簡体字と日本新字体は外枠と交差形を保ちます。",
      focus: ["外枠", "内部の口形", "交差形"],
    },
    en: {
      meaning: "District, distinguish",
      note: "Traditional Chinese repeats mouth shapes inside, while Simplified Chinese and Japanese shinjitai keep the frame and crossing shape.",
      focus: ["Outer frame", "Inner mouth shapes", "Crossing shape"],
    },
    ko: {
      meaning: "구역, 구분",
      note: "번체는 내부에 口 형태를 반복하고, 간체와 일본 신자체는 바깥 틀과 교차 형태를 보존합니다.",
      focus: ["바깥 틀", "내부 口 형태", "교차 형태"],
    },
  },
  group: {
    zhHant: {
      meaning: "團體、圓形",
      note: "三者都是外框加內部部件，內部簡化方向不同。",
      focus: ["外框", "內部部件", "封口"],
    },
    ja: {
      meaning: "団体・円形",
      note: "三者はいずれも外枠に内部部品を加えた形ですが、内部の簡略化方向が異なります。",
      focus: ["外枠", "内部部品", "閉じ方"],
    },
    en: {
      meaning: "Group, circle",
      note: "All three combine an outer enclosure with an inner component, but the simplification direction differs inside.",
      focus: ["Outer enclosure", "Inner component", "Closure"],
    },
    ko: {
      meaning: "단체, 원형",
      note: "세 형태 모두 바깥 둘레와 내부 구성 요소를 결합하지만 내부 단순화 방향이 다릅니다.",
      focus: ["바깥 둘레", "내부 구성 요소", "닫힘"],
    },
  },
};

type GeneratedLocale = Exclude<Locale, "zhHans">;

const generatedGroupMeaningRows = [
  ["love", "愛情、喜愛", "愛情・愛好", "Love, affection", "사랑, 애정"],
  ["medicine", "藥物、藥草", "薬・薬草", "Medicine, medicinal herbs", "약, 약초"],
  ["classic", "經典、經文", "経典・経文", "Classics, scripture", "경전, 고전"],
  ["electricity", "電、電力", "電気・電力", "Electricity, power", "전기, 전력"],
  ["buy", "購買、買入", "購入", "Buy, purchase", "구매"],
  ["horse", "馬", "馬", "Horse", "말"],
  ["bird", "鳥", "鳥", "Bird", "새"],
  ["fish", "魚", "魚", "Fish", "물고기"],
  ["language", "語言、語詞", "言語・語句", "Language, words", "언어, 말"],
  ["word", "詞語、詞彙", "語・語彙", "Word, vocabulary", "단어, 어휘"],
  ["say", "說話、說明", "話す・説明", "Speak, explain", "말하다, 설명"],
  ["listen", "聽、聽取", "聞く・聴取", "Listen, hear", "듣다, 청취"],
  ["sound", "聲音、聲響", "声・音", "Voice, sound", "소리, 음향"],
  ["old", "舊、過去", "旧・過去", "Old, past", "옛것, 과거"],
  ["place", "處所、處理", "場所・処理", "Place, handle", "장소, 처리"],
  ["number", "數目、計算", "数・計算", "Number, count", "수, 계산"],
  ["item", "條、條目", "条・項目", "Item, entry", "항목, 조목"],
  ["come", "來、到來", "来る・到来", "Come, arrival", "오다, 도래"],
  ["garden", "園、園地", "園・庭園", "Garden, park", "정원, 원지"],
  ["far", "遠、遠方", "遠い・遠方", "Far, distant", "멀다, 원방"],
  ["return_full", "還、歸還", "返す・帰す", "Return, give back", "돌려주다, 반환"],
  ["choose", "選擇、挑選", "選択・選ぶ", "Choose, select", "선택"],
  ["luck", "運、運行", "運・運行", "Fortune, movement", "운, 운행"],
  ["advance", "進、進入", "進む・入る", "Advance, enter", "나아가다, 들어가다"],
  ["connect", "連、連接", "連結・つなぐ", "Connect, link", "연결"],
  ["pass", "過、經過", "過ぎる・経過", "Pass, go through", "지나가다, 경과"],
  ["question", "問、問題", "問い・問題", "Ask, question", "묻다, 문제"],
  ["between", "間、空間", "間・空間", "Interval, space", "사이, 공간"],
  ["open", "開、開啟", "開く・開始", "Open, start", "열다, 시작"],
  ["barrier", "關、關口", "関所・関係", "Gate, barrier", "관문, 관계"],
  ["category", "類、種類", "類・種類", "Category, type", "종류, 부류"],
  ["thread", "線、線條", "線・線条", "Line, thread", "선, 선줄"],
  ["paper", "紙、紙張", "紙", "Paper", "종이"],
  ["red", "紅色", "赤・紅色", "Red", "빨강"],
  ["green", "綠色", "緑色", "Green", "초록"],
  ["net", "網、網路", "網・ネットワーク", "Net, network", "그물, 네트워크"],
  ["see", "見、看見", "見る", "See", "보다"],
  ["view", "觀、觀察", "観察・見る", "Observe, view", "관찰, 보다"],
  ["sense", "覺、感覺", "覚える・感覚", "Sense, perceive", "감각, 깨닫다"],
  ["parent", "親、親屬", "親・親族", "Parent, kin", "부모, 친족"],
  ["noodle", "麵條、麵食", "麺・麺類", "Noodles", "면, 면류"],
  ["sign", "號、號碼", "号・番号", "Number, sign", "번호, 표지"],
  ["wind", "風", "風", "Wind", "바람"],
  ["fly", "飛、飛行", "飛ぶ・飛行", "Fly, flight", "날다, 비행"],
  ["meal", "飯、米飯", "飯・ご飯", "Meal, rice", "밥, 식사"],
  ["drink", "飲、飲用", "飲む・飲用", "Drink", "마시다, 음용"],
  ["test", "驗、驗證", "検証・試験", "Test, verify", "검증, 시험"],
  ["develop", "發、發生", "発生・発する", "Develop, occur", "발생, 발하다"],
  ["hair", "頭髮、毛髮", "髪・毛髪", "Hair", "머리카락, 털"],
  ["prepare", "備、準備", "備える・準備", "Prepare", "준비하다"],
  ["price", "價、價值", "価値・価格", "Price, value", "가격, 가치"],
  ["injury", "傷、損傷", "傷・損傷", "Injury, wound", "상처, 손상"],
  ["child", "兒、兒童", "児童・子ども", "Child", "아이, 아동"],
  ["inside", "內、內部", "内・内部", "Inside", "안, 내부"],
  ["farm", "農、農業", "農・農業", "Agriculture, farming", "농업, 농사"],
  ["move", "動、運動", "動く・運動", "Move, movement", "움직이다, 운동"],
  ["victory", "勝、勝利", "勝つ・勝利", "Win, victory", "승리"],
  ["single", "單、單一", "単一・単独", "Single", "단일"],
  ["doctor", "醫、醫學", "医・医学", "Medicine, doctor", "의학, 의사"],
  ["history", "歷、歷史", "歴・歴史", "History", "역사"],
  ["double", "雙、成雙", "双・二つ", "Pair, double", "쌍, 둘"],
  ["after", "後、以後", "後・以後", "After, later", "뒤, 이후"],
  ["member", "員、成員", "員・メンバー", "Member", "구성원"],
  ["head", "頭、頭部", "頭・頭部", "Head", "머리"],
  ["real", "實、實際", "実・実際", "Real, actual", "실제"],
  ["general_future", "將、將來", "将・将来", "Will, future", "장차, 미래"],
  ["specialize", "專、專門", "専門", "Specialized", "전문"],
  ["guide", "導、引導", "導く・案内", "Guide, lead", "이끌다, 안내"],
  ["layer", "層、層次", "層・階層", "Layer", "층"],
  ["age", "歲、年歲", "歳・年齢", "Age, years", "나이, 세"],
  ["teacher", "師、老師", "師・教師", "Teacher, master", "스승, 교사"],
  ["sheet_open", "張、張開", "張る・広げる", "Spread, sheet", "펼치다, 장"],
  ["strong", "強、強大", "強い・強大", "Strong", "강하다"],
  ["habit", "習、習慣", "習う・習慣", "Learn, habit", "익히다, 습관"],
  ["sweep", "掃、打掃", "掃く・掃除", "Sweep, clean", "쓸다, 청소"],
  ["select_form", "擇、選擇", "選択・選ぶ", "Choose, select", "고르다, 선택"],
  ["raise", "舉、舉起", "挙げる", "Raise, lift", "들다, 올리다"],
  ["replace", "換、更換", "交換・替える", "Replace, exchange", "바꾸다, 교환"],
  ["several", "幾、幾個", "幾つか", "Several", "몇, 여러"],
  ["break_apart", "斷、判斷", "断つ・判断", "Break, judge", "끊다, 판단"],
  ["time", "時、時間", "時・時間", "Time", "시간"],
  ["display", "顯、顯示", "顕れる・表示", "Show, display", "나타내다, 표시"],
  ["machine", "機、機器", "機械", "Machine", "기계"],
  ["sample", "樣、樣子", "様子・様式", "Appearance, sample", "모양, 양식"],
  ["bridge", "橋", "橋", "Bridge", "다리"],
  ["building", "樓、樓房", "楼・建物", "Building, floor", "건물, 층"],
  ["mark", "標、標記", "標識・印", "Mark, sign", "표식, 표시"],
  ["joy", "歡、歡樂", "歓び・楽しさ", "Joy", "기쁨"],
  ["step", "步、步行", "歩く・歩行", "Step, walk", "걸음, 보행"],
  ["han", "漢、漢字", "漢・漢字", "Han, Chinese character", "한, 한자"],
  ["soup", "湯、熱湯", "湯・スープ", "Soup, hot water", "탕, 국물"],
  ["none", "沒、沒有", "ない・没する", "Not have, absent", "없다"],
  ["warm", "溫、溫暖", "温かい・温暖", "Warm", "따뜻함"],
  ["full", "滿、滿足", "満ちる・満足", "Full, satisfied", "가득하다, 만족"],
  ["relief", "濟、救濟", "済む・救済", "Relief, aid", "구제"],
  ["lamp", "燈、燈火", "灯・灯火", "Lamp, light", "등, 등불"],
  ["dot", "點、點數", "点・点数", "Point, dot", "점, 점수"],
  ["for_do", "為、作為", "為す・として", "Do, act as", "하다, 위하다"],
  ["heat", "熱、熱量", "熱・熱量", "Heat", "열, 열량"],
  ["camp", "營、經營", "営む・経営", "Operate, camp", "경영, 진영"],
  ["condition", "狀、狀態", "状態・状況", "State, condition", "상태, 상황"],
  ["pig", "豬", "豚・猪", "Pig", "돼지"],
  ["ring", "環、環繞", "環・めぐる", "Ring, surround", "고리, 둘러싸다"],
  ["present", "現、現在", "現れる・現在", "Present, appear", "현재, 나타나다"],
  ["produce", "產、生產", "産む・生産", "Produce, give birth", "생산"],
  ["ritual", "禮、禮儀", "礼・礼儀", "Rite, courtesy", "예, 예의"],
  ["leave", "離、離開", "離れる", "Leave, separate", "떠나다, 떨어지다"],
  ["seed", "種、種子", "種・種子", "Seed, kind", "씨, 종류"],
  ["brush", "筆、毛筆", "筆・毛筆", "Brush, pen", "붓"],
  ["simple", "簡、簡單", "簡単・簡略", "Simple", "간단함"],
  ["discipline", "紀、紀律", "紀律・記録", "Discipline, order", "규율"],
  ["appoint", "約、約定", "約束・約定", "Promise, appoint", "약속, 약정"],
  ["level_rank", "級、等級", "級・等級", "Level, grade", "등급"],
  ["tight", "緊、緊張", "緊張・きつい", "Tight, tense", "긴장, 빡빡함"],
  ["end", "終、終點", "終わり・終点", "End", "끝, 종점"],
  ["organize", "組、組織", "組・組織", "Group, organize", "조직, 조"],
  ["tie", "結、結果", "結ぶ・結果", "Tie, result", "맺다, 결과"],
  ["give", "給、給予", "給付・与える", "Give", "주다"],
  ["absolute", "絕、絕對", "絶対・絶える", "Absolute, cut off", "절대, 끊다"],
  ["continue_inherit", "繼、繼續", "継ぐ・継続", "Continue, inherit", "잇다, 계속"],
  ["continue_follow", "續、繼續", "続く・継続", "Continue", "계속"],
  ["justice", "義、正義", "義・正義", "Justice, meaning", "정의, 의"],
  ["brain", "腦、頭腦", "脳・頭脳", "Brain, mind", "뇌, 두뇌"],
  ["foot", "腳、腳部", "脚・足", "Leg, foot", "다리, 발"],
  ["viscera", "臟、內臟", "臓・内臓", "Organ, viscera", "장기, 내장"],
  ["flourish", "興、興起", "興る・興起", "Rise, flourish", "일어나다, 흥하다"],
] as const;

const generatedGroupMeanings = Object.fromEntries(
  generatedGroupMeaningRows.map(([id, zhHantMeaning, jaMeaning, enMeaning, koMeaning]) => [
    id,
    {
      zhHant: zhHantMeaning,
      ja: jaMeaning,
      en: enMeaning,
      ko: koMeaning,
    },
  ]),
) as Record<string, Record<GeneratedLocale, string>>;

const generatedFocus: Record<GeneratedLocale, string[]> = {
  zhHant: ["部件保留", "簡化路徑", "筆畫密度"],
  ja: ["部品の保持", "簡略化経路", "画の密度"],
  en: ["Component retention", "Simplification path", "Stroke density"],
  ko: ["구성 요소 보존", "단순화 경로", "획 밀도"],
};

function formatGeneratedNote(group: CharacterGroup, locale: GeneratedLocale) {
  const { ja: japanese, zhHans, zhHant: traditional } = group.variants;

  if (locale === "zhHant") {
    if (zhHans === japanese && zhHans !== traditional) {
      return `簡體與日文同寫「${zhHans}」，繁體寫作「${traditional}」，適合觀察繁體保留的複雜部件。`;
    }
    if (traditional === japanese && zhHans !== traditional) {
      return `繁體與日文同寫「${traditional}」，簡體寫作「${zhHans}」，適合觀察簡化後的省筆方向。`;
    }
    if (zhHans === traditional && zhHans !== japanese) {
      return `中文寫作「${zhHans}」，日文寫作「${japanese}」，適合觀察日文字形的收束。`;
    }
    return `簡體「${zhHans}」、繁體「${traditional}」、日文「${japanese}」呈現不同簡化路徑，適合觀察部件保留和筆畫密度。`;
  }

  if (locale === "ja") {
    if (zhHans === japanese && zhHans !== traditional) {
      return `簡体字と日本新字体は「${zhHans}」、繁体字は「${traditional}」です。繁体字に残る複雑な部品を比較できます。`;
    }
    if (traditional === japanese && zhHans !== traditional) {
      return `繁体字と日本新字体は「${traditional}」、簡体字は「${zhHans}」です。簡略化で省かれた画や部品を比較できます。`;
    }
    if (zhHans === traditional && zhHans !== japanese) {
      return `中国語では「${zhHans}」、日本新字体では「${japanese}」です。日本字形のまとまり方を比較できます。`;
    }
    return `簡体字「${zhHans}」、繁体字「${traditional}」、日本新字体「${japanese}」で簡略化の経路が異なります。部品の保持と画の密度を比較できます。`;
  }

  if (locale === "en") {
    if (zhHans === japanese && zhHans !== traditional) {
      return `Simplified Chinese and Japanese both use 「${zhHans}」, while Traditional Chinese uses 「${traditional}」, making the retained traditional components easy to compare.`;
    }
    if (traditional === japanese && zhHans !== traditional) {
      return `Traditional Chinese and Japanese both use 「${traditional}」, while Simplified Chinese uses 「${zhHans}」, making the direction of simplification easy to compare.`;
    }
    if (zhHans === traditional && zhHans !== japanese) {
      return `Chinese uses 「${zhHans}」, while Japanese uses 「${japanese}」, making the Japanese glyph treatment easy to compare.`;
    }
    return `Simplified 「${zhHans}」, Traditional 「${traditional}」, and Japanese 「${japanese}」 follow different simplification paths, highlighting component retention and stroke density.`;
  }

  if (zhHans === japanese && zhHans !== traditional) {
    return `간체와 일본 신자체는 「${zhHans}」로 같고, 번체는 「${traditional}」로 씁니다. 번체에 남은 복잡한 구성 요소를 비교하기 좋습니다.`;
  }
  if (traditional === japanese && zhHans !== traditional) {
    return `번체와 일본 신자체는 「${traditional}」로 같고, 간체는 「${zhHans}」로 씁니다. 단순화 방향을 비교하기 좋습니다.`;
  }
  if (zhHans === traditional && zhHans !== japanese) {
    return `중국어는 「${zhHans}」로 쓰고, 일본 신자체는 「${japanese}」로 씁니다. 일본 글자 형태의 수렴 방식을 비교하기 좋습니다.`;
  }
  return `간체 「${zhHans}」, 번체 「${traditional}」, 일본 신자체 「${japanese}」는 서로 다른 단순화 경로를 보여 주며, 구성 요소 보존과 획 밀도를 비교하기 좋습니다.`;
}

function getGeneratedGroupCopy(
  group: CharacterGroup,
  locale: Locale,
): GroupCopy | undefined {
  if (locale === "zhHans") {
    return undefined;
  }

  const meaning = generatedGroupMeanings[group.id]?.[locale];
  if (!meaning) {
    return undefined;
  }

  return {
    meaning,
    note: formatGeneratedNote(group, locale),
    focus: generatedFocus[locale],
  };
}

const localeStorageKey = "cjk-stroke-compare:locale:v1";

function isLocale(value: string | null | undefined): value is Locale {
  return localeOptions.some((option) => option.code === value);
}

function matchLocale(language: string | null | undefined): Locale | undefined {
  const normalized = language?.toLowerCase();

  if (!normalized) {
    return undefined;
  }

  if (normalized === "zh") {
    return "zhHans";
  }

  if (
    normalized.startsWith("zh-hant") ||
    normalized === "zh-tw" ||
    normalized === "zh-hk" ||
    normalized === "zh-mo"
  ) {
    return "zhHant";
  }

  if (
    normalized.startsWith("zh-hans") ||
    normalized === "zh-cn" ||
    normalized === "zh-sg"
  ) {
    return "zhHans";
  }

  if (normalized.startsWith("ja")) {
    return "ja";
  }

  if (normalized.startsWith("ko")) {
    return "ko";
  }

  if (normalized.startsWith("en")) {
    return "en";
  }

  return undefined;
}

export function getInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return "zhHans";
  }

  const storedLocale = window.localStorage.getItem(localeStorageKey);
  if (isLocale(storedLocale)) {
    return storedLocale;
  }

  for (const language of navigator.languages ?? [navigator.language]) {
    const matchedLocale = matchLocale(language);
    if (matchedLocale) {
      return matchedLocale;
    }
  }

  return "zhHans";
}

export function saveLocale(locale: Locale) {
  window.localStorage.setItem(localeStorageKey, locale);
}

export function getGroupCopy(group: CharacterGroup, locale: Locale): GroupCopy {
  if (locale === "zhHans") {
    return {
      meaning: group.meaning,
      note: group.note,
      focus: group.focus,
    };
  }

  return (
    groupTranslations[group.id]?.[locale] ??
    getGeneratedGroupCopy(group, locale) ?? {
      meaning: group.meaning,
      note: group.note,
      focus: group.focus,
    }
  );
}

export function getGroupSearchText(group: CharacterGroup, locale: Locale) {
  const currentCopy = getGroupCopy(group, locale);
  const translatedCopies = Object.values(groupTranslations[group.id] ?? {}).filter(
    (copy): copy is GroupCopy => Boolean(copy),
  );
  const generatedCopies = localeOptions
    .map((option) => getGeneratedGroupCopy(group, option.code))
    .filter((copy): copy is GroupCopy => Boolean(copy));

  return [
    currentCopy.meaning,
    ...currentCopy.focus,
    group.meaning,
    ...group.focus,
    ...translatedCopies.flatMap((copy) => [
      copy.meaning,
      ...copy.focus,
    ]),
    ...generatedCopies.flatMap((copy) => [
      copy.meaning,
      ...copy.focus,
    ]),
    ...Object.values(group.variants),
  ]
    .join(" ")
    .toLowerCase();
}
