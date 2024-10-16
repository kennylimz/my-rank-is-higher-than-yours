export const translations = {
  en: {
    pageTitle: "Game Rank Converter",
    title: "Game Rank Converter",
    sourceGame: "Source Game",
    targetGame: "Target Game",
    rankInfo: "Rank Information",
    sourceRankInfo: "{{rank}} in {{game}} beats {{start}}% of players.",
    targetRankInfo: "This is equivalent to {{rank}} in {{game}}.",
    selectGame: "Select a game",
    selectRank: "Select a rank"
  },
  zh: {
    pageTitle: "游戏段位转换器",
    title: "你什么冠军？",
    sourceGame: "你的游戏",
    targetGame: "TA的游戏",
    rankInfo: "结果",
    sourceRankInfo: "《{{game}}》里的 {{rank}} 超越了{{start}}%的玩家。",
    targetRankInfo: "大概相当于《{{game}}》里的 {{rank}} 。",
    selectGame: "选择游戏",
    selectRank: "选择段位"
  }
};

export function t(key, lang, params = {}) {
  const translation = translations[lang][key];
  return translation.replace(/\{\{(\w+)\}\}/g, (_, key) => params[key] || '');
}
