module.exports = {
  root: true,
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    "no-console": 0,
    "eqeqeq": 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': [0,'always'],
    'indent': 0,
    'no-tabs': 0,
    'no-new': 0,
    'no-trailing-spaces': 0,
    'quotes': 0,
    'space-before-function-paren': 0,
    'space-in-parens': 0,
    'padded-blocks': 0,
    'keyword-spacing': 0
  }
}
