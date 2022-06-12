module.exports = {
  transform: {
    '.(ts|tsx)$': 'ts-jest/dist',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  testMatch: ['<rootDir>/src/**/*.(spec|test).{ts,tsx,js,jsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@utils': '<rootDir>/src/utils/index',
  },
};
