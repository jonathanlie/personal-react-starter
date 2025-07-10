import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173", // Your Vite dev server URL
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.ts",
    video: false, // Set to true if you want video recordings of tests
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    defaultCommandTimeout: 10000, // Increase default timeout for robust tests
    retries: {
      runMode: 2, // Retry failed tests twice in run mode
      openMode: 0,
    },
  },
});
