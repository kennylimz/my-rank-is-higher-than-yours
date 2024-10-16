const { i18n } = require('./next-i18next.config');

const repo = 'my-rank-is-higher-than-yours' // Replace with your repo name

module.exports = {
  reactStrictMode: true,
  i18n: {
    ...i18n,
    defaultLocale: 'zh',
  },
  basePath: process.env.NODE_ENV === 'production' ? `/${repo}` : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${repo}/` : '',
};
