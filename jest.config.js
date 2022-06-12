module.exports = {
  transform: {
    '.(ts|tsx)$': 'ts-jest/dist',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  testMatch: ['**/*.(test|spec).(ts|tsx)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
