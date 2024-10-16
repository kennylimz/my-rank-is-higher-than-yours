const nextConfig = {
  output: 'export',
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
