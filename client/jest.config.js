module.exports = {
  rootDir: ".",
  collectCoverage: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/tests/setup/setupTests.ts"],
  testMatch: [
    "<rootDir>/tests/**/*.test.js",
    "<rootDir>/tests/**/*.test.ts",
    "<rootDir>/tests/**/*.test.tsx",
  ],
  testPathIgnorePatterns: ["<rootDir>/tests/setup"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(svg|css)$": "<rootDir>/tests/setup/stubTransform.js"
  }
};
