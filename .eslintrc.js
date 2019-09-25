module.exports = {
  root: true,
  env: {
    node: true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue', '.jsx'],
      },
    },
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    'no-console': 'off',
    'no-debugger': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      '.js': 'never',
      '.jsx': 'never',
      '.vue': 'never',
    }],
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    "space-before-function-paren": ["error", {
      anonymous: "always",
      named: "never",
      asyncArrow: "always"
    }],
    semi: ['error', 'always'],
    'indent': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
};
