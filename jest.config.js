module.exports = {
  testMatch: ['**/?(*.)+(spec|test).js'],
  coverageProvider: 'v8',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/**/*.stories.js',
    '!src/main.js',
    '!src/stories/**',
    '!src/components/Icon/icons/**',
  ],
  verbose: false,
  transformIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'jsdom',
  snapshotSerializers: ['jest-serializer-vue'],
  setupFilesAfterEnv: ['./setupTests.js'],
  testResultsProcessor: 'jest-sonar-reporter',
  maxWorkers: 2,
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': '@vue/vue2-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.tsx?$': ['ts-jest', { babelConfig: true }],
  },
  coverageReporters: [
    // 'json'
    'html', // Check out coverage/lcov-report/index.html
    'lcov',
    'text',
  ],
};
