/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const { resolve } = require('path')

module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@presentation/(.*)$': resolve(__dirname, './src/presentation/$1'),
    '@infrastructure/(.*)$': resolve(__dirname, './src/infrastructure/$1'),
    '@main/(.*)$': resolve(__dirname, './src/main/$1')
  },
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
