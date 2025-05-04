import { defineConfig } from 'cypress';
import viteConfig from './vite.config';

export default defineConfig({
  component: {
    port: 5173,
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig,
    },
  },

  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'spec', // or 'junit', 'mochawesome', etc.
    reporterOptions: {
      mochaFile: 'results/test-results.xml',
      toConsole: true,
    },
  },
});


