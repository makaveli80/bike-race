const pathConfiguration = './config';
const babelJestOptions = {configFile: `${pathConfiguration}/babel.config.json`};

module.exports = {
  moduleNameMapper: {
    '\\.css$': '<rootDir>/config/jest/mockCssImportFile.js'
  },
  rootDir: '../',
  testMatch: ['**/src/**/*.test.js'],
  transform: {'\\.js$': ['babel-jest', babelJestOptions]},
  transformIgnorePatterns: [ '/node_modules/' ]
};
