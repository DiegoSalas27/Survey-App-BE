/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import { resolve } from 'path';

export default {
  // roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@presentation/(.*)$': resolve(__dirname, './src/presentation/$1'),
  },
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};
