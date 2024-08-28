import js from '@eslint/js';
import ts from 'typescript-eslint';
import react from 'eslint-plugin-react';
import mocha from 'eslint-plugin-mocha';
import cypress from 'eslint-plugin-cypress';

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  react.configs.flat.recommended,
  mocha.configs.recommended,
  cypress.configs.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'mocha/no-mocha-arrows': 'off',
    },
  },
];
