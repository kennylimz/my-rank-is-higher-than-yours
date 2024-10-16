export const translations = {
  en: {
    title: "Game Rank Converter",
    sourceGame: "Source Game",
    targetGame: "Target Game",
    rankInfo: "Rank Information",
    beatsPlayers: "{{rank}} in {{game}} beats {{percentage}}% of players.",
    equivalent: "This is equivalent to {{rank}} in {{game}}.",
    selectGame: "Select a game",
    selectRank: "Select a rank"
  },
  zh: {
    title: "你什么水平？",
    sourceGame: "你的游戏",
    targetGame: "目标游戏",
    rankInfo: "结果",
    beatsPlayers: "《{{game}}》里的 {{rank}} 超越了{{percentage}}%的玩家。",
    equivalent: "大概相当于《{{game}}》里的 {{rank}} 。",
    selectGame: "选择游戏",
    selectRank: "选择段位"
  }
};

export function t(key, lang, params = {}) {
  const translation = translations[lang][key];
  return translation.replace(/{{(\w+)}}/g, (_, key) => params[key] || '');
}
