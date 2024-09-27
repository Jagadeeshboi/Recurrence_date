module.exports = {
  // Use jsdom for simulating browser-like environments
  testEnvironment: 'jsdom',

  // Use babel-jest to transpile JS and JSX files
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },

  // Ignore transforming node_modules except for ES6 modules
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],

  // Automatically set up additional testing tools
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // Handle module aliases used in Next.js (e.g., @ for src)
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },

  // File extensions to be processed
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
};
