module.exports = {
  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['<rootDir>/enzyme.setup.js'],

  // enzyme snapshot serializer
  snapshotSerializers: ['enzyme-to-json/serializer'],
  
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    'src/**/*.{js,jsx}'
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // global coverage 90%
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },

  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules'
  },

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  // default ["/node_modules/"]
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};