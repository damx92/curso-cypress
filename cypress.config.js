const { defineConfig } = require("cypress");

import { configureAllureAdapterPlugins } from '@mmisty/cypress-allure-adapter/plugins';
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);
      return config; 
    },
  },
});
