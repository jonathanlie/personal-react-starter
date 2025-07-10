import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"],

  // A preset that is used as a base for Jest's configuration
  preset: "ts-jest",

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // An array of file extensions your modules use
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  // A map from regular expressions to paths to transformers
  transform: {
    // Use ts-jest for TypeScript files
    "^.+\\.(ts|tsx)$": "ts-jest",
    // Or for SWC (faster usually)
    // "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },

  // A list of paths to modules that run some code to configure or set up the testing environment before each test
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],

  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/__tests__/**/*.test.ts",
    "**/__tests__/**/*.test.tsx",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  // Module aliasing for paths defined in tsconfig.json (if any, adjust as needed)
  moduleNameMapper: {
    // Example: "@components/(.*)": "<rootDir>/src/components/$1"
  },
};

export default config;
