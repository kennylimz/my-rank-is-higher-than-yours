const repo = 'my-rank-is-higher-than-yours' // Replace with your repo name

const nextConfig = {
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${repo}/` : '',
  basePath: process.env.NODE_ENV === 'production' ? `/${repo}` : '',
  images: {
    unoptimized: true,
  },
  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
    };
  },
}

module.exports = nextConfig
