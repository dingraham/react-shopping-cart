import js from '@eslint/js';
import ts from 'typescript-eslint';
import react from 'eslint-plugin-react';
import cypress from 'eslint-plugin-cypress';

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  react.configs.flat.recommended,
  // Manually add Mocha-related configuration
  {
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        after: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
    },
    rules: {
      'mocha/no-mocha-arrows': 'off', // Customize other Mocha rules here if needed
    },
  },
  // Cypress configuration (converted to Flat Config format)
  {
    plugins: {
      cypress, // Add Cypress plugin explicitly
    },
    languageOptions: {
      globals: {
        cy: 'readonly',
        Cypress: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
    },
    rules: {
      // Define any Cypress-specific rules here
    },
  },
];
