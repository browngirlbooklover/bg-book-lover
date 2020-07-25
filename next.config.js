module.exports = {
  sassOptions: {
    postcssLoaderOptions: {},
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }

    return config;
  },
};
