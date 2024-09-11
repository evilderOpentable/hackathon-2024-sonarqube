module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '/.*\\.test\\.js$/', // Exclude test files
    ],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
};