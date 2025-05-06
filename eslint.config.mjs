import TsEslintParser from '@typescript-eslint/parser';
import TsEslintEslintPlugin from '@typescript-eslint/eslint-plugin';
import EslintConfigPrettier from 'eslint-config-prettier';
import EslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  EslintConfigPrettier,
  EslintPluginPrettierRecommended,
  {
    languageOptions: {
      parser: TsEslintParser,
      sourceType: 'module',
      ecmaVersion: 2018,
    },
    files: ['src/**/*.ts'],
    plugins: {
      '@typescript-eslint': TsEslintEslintPlugin,
    },
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
];
