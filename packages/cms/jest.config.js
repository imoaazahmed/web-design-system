module.exports = {
  moduleDirectories: ['node_modules', 'test-utils', __dirname],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testMatch: ['**/*.(test|spec).(ts|tsx)'],
  globals: {
    'ts-jest': {
      tsconfig: 'jest.tsconfig.json', //tsConfig is deprecated
      diagnostics: false,
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/', 'enzyme.js', 'server/i18n'],
  setupFiles: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/__mocks__/',
    '<rootDir>/e2e/',
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/prod_node_modules/',
  ],
  moduleNameMapper: {
    '^@test-utils': ['<rootDir>/test-utils'],
    '^@util/(.*)': ['<rootDir>/src/util/$1'],
    '^@components/(.*)': ['<rootDir>/src/components/$1'],
    '^@pages/(.*)': ['<rootDir>/pages/$1'],
    '^@server/(.*)': ['<rootDir>/server/$1'],
    '^@static/(.*)': ['<rootDir>/static/$1'],
    '^@hooks/(.*)': ['<rootDir>/src/hooks/$1'],
    '^@api/(.*)': ['<rootDir>/src/api/$1'],
    '^@styles/(.*)': ['<rootDir>/styles/$1'],
    '^@screens/(.*)': ['<rootDir>/src/screens/$1'],
    '^@redux/(.*)': ['<rootDir>/src/redux/$1'],
    '^@lib/(.*)': ['<rootDir>/src/lib/$1'],
    '^@layout/(.*)': ['<rootDir>/src/layout/$1'],
  },
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  coverageReporters: ['html', 'text'],
  collectCoverageFrom: [
    'components/*.{js,jsx,ts,tsx}',
    'util/*.{js,jsx,ts,tsx}',
    'static/*.{js,jsx,ts,tsx}',
    'hooks/*.{js,jsx,ts,tsx}',
    'api/*.{js,jsx,ts,tsx}',
    'pages/*.{js,jsx,ts,tsx}',
  ],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
};
