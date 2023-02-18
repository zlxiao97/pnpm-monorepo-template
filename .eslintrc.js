const reactPaths = ['apps/react/src/**/*.{js,ts,jsx,tsx}'];
const vuePaths = ['apps/vue/src/**/*.{js,ts,vue}'];
const miniAppPaths = ['apps/miniapp/miniprogram/**/*.{js}'];

module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  overrides: [
    {
      files: reactPaths,
      ...require('./.eslintrc.react.js'),
    },
    {
      files: vuePaths,
      ...require('./.eslintrc.vue.js'),
    },
    {
      files: miniAppPaths,
      ...require('./.eslintrc.miniapp.js'),
    },
  ],
};
