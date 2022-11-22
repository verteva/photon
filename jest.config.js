module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: ['**/?(*.)+(spec|test).js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/**/*.stories.js',
    '!src/main.js',
    '!src/stories/**',
  ],
  verbose: true,
  setupFilesAfterEnv: ['./setupTests.js'],
  testResultsProcessor: 'jest-sonar-reporter',
};
