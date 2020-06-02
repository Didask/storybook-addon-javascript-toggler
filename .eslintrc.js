const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  'env': { 'browser': true, 'es6': true, 'node': true },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint',
    'json',
    'react',
    'react-hooks',
    'jsx-a11y'
  ],
  'rules': {
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/indent': ['warn', 2],
    '@typescript-eslint/member-delimiter-style': 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/type-annotation-spacing': 'warn',

    'react/jsx-curly-spacing': ['warn', {
      'when': 'never',
      'spacing': { 'objectLiterals': 'never' },
      'children': false
    }],
    
    'indent': ['warn', 2, { 'SwitchCase': 1 }],
    'eol-last': ['warn', 'always'],
    'jsx-quotes': [ 'warn', 'prefer-double' ],
    'linebreak-style': [ 'warn', 'unix' ],
    'no-console': isDev ? ['warn'] : ['error', { 'allow': ['warn', 'error'] }],
    'no-irregular-whitespace': ['error', { 'skipTemplates': true, 'skipComments': true }],
    'object-curly-spacing': ['warn', 'always'],
    'quotes': [ 'warn', 'single' ],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'keyword-spacing': ['warn', { 'before': true, 'after': true }],
    'space-before-function-paren': ['warn', 'never'],
    'semi': [ 'warn', 'never' ]
  }
}
