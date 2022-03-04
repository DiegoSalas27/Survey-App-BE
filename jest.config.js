/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/**/**protocols.ts',
    '!<rootDir>/src/**/**index.ts',
    '!**/test/**'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@presentation/(.*)$': '<rootDir>/src/presentation/$1',
    '@infrastructure/(.*)$': '<rootDir>/src/infrastructure/$1',
    '@data/(.*)$': '<rootDir>/src/data/$1',
    '@domain/(.*)$': '<rootDir>/src/domain/$1',
    '@main/(.*)$': '<rootDir>/src/main/$1',
    '@validation/(.*)$': '<rootDir>/src/validation/$1'
    // '@/(.*)': '<rootDir>/src/$1'
  },
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
