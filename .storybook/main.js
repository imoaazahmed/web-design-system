// Set custom max asset size to avoid storybook build errors
const maxAssetSize = 1024 * 1024 * 1024;

const path = require('path');
const toPath = _path => path.join(process.cwd(), _path);

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../packages/*/**/*.stories.tsx'],
  typescript: {
    reactDocgen: false,
  },
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
    '@storybook/addon-toolbars',
    '@storybook/preset-scss',
  ],
  webpackFinal: async (config, { configType }) => {
    config.devtool = configType === 'DEVELOPMENT' ? 'inline-source-map' : false;

    config.performance = {
      ...config.performance,
      maxEntrypointSize: maxAssetSize,
      maxAssetSize,
    };

    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        minSize: 30 * 1024,
        maxSize: maxAssetSize,
      },
    };

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@emotion/core': toPath('node_modules/@emotion/react'),
        'emotion-theming': toPath('node_modules/@emotion/react'),
      },
    };

    config.stats = { logging: 'verbose' };

    return config;
  },
};
