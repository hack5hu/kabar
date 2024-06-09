module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-native', 'jsx-a11y', 'import', 'prettier'],
  env: {
    'react-native/react-native': true,
  },
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'react/jsx-filename-extension': [
      1,
      {extensions: ['.js', '.jsx', '.ts', '.tsx']},
    ],
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript
    'no-use-before-define': 'off', // Off because it might cause issues with hoisting
    '@typescript-eslint/no-use-before-define': ['error'], // Use this instead for TypeScript
    'no-shadow': 'off', // Off because it might cause issues with variable shadowing
    '@typescript-eslint/no-shadow': ['error'], // Use this instead for TypeScript
    'react/react-in-jsx-scope': 'off', // Off because React 17+ doesn't require React in scope
    'import/order': ['error', {'newlines-between': 'always'}],
    'import/no-unresolved': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  globals: {
    __DEV__: true,
  },
};
