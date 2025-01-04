import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '95rkdc',
  e2e: {
    baseUrl: 'http://localhost:3000/',
    reporter: 'mochawesome',
    retries: {
      runMode: 2,
    },
    reporterOptions: {
      reportDir: 'results',
      overwrite: false,
      html: true,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
