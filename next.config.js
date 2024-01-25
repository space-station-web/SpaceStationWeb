// webpack.config.js
// ...
module.exports = {
  // ...
  webpackFinal: async (config) => {
    // ...
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    // ...
    return config;
  },
};

// next.config.js
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
