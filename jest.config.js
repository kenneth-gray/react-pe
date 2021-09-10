module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      // Disable type checking
      diagnostics: false,
    },
  },
};
