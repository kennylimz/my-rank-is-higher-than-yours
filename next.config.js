const repo = 'my-rank-is-higher-than-yours' // Replace with your repo name

module.exports = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? `/${repo}/${process.env.NEXT_PUBLIC_LANG}` : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${repo}/${process.env.NEXT_PUBLIC_LANG}/` : '',
  images: {
    unoptimized: true
  },
};
