module.exports = {
  'env': {
      'browser': true,
      'es6': false
  },
  'extends': 'eslint:recommended',
  'globals': {
      'Atomics': 'readonly',
      'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
      'ecmaVersion': 5
  },
  'rules': {
      'indent': [
          'error',
          2
      ],
      'linebreak-style': [
          'error',
          'unix'
      ],
      'quotes': [
          'error',
          'single'
      ],
      'semi': [
          'error',
          'always'
      ],
      "camelcase": [2, {"properties": "always"}],
      "no-console": ["error", { allow: ["warn", "error"] }],
      "eol-last": ["error", "always"]
  }
};
