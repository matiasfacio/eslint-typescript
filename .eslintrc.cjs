module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
      resolve: {
        "modules": ["../eslint-rules"]
      }
    },
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'eslint-rules'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'rules'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'rules/my-rule-name': 'error',
  },
}
