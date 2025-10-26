const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  video: true,
  screenshotsFolder: 'images',
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
    env: {
      baseUrl: process.env.CYPRESS_BASE_URL,
    },
    pageLoadTimeout: 30000,
    defaultCommandTimeout: 30000,
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
});
