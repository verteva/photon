module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  sourceMaps: true,
  plugins: [
    [
      'component',
      {
        libraryName: 'maz-ui',
        styleLibraryName: 'css',
      },
    ],
  ],
};
