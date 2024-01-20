module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: ["standard"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  root: true,
  rules: {
    quotes: ["error", "double"],
    "comma-dangle": ["error", "always-multiline"],
    semi: ["error", "never"],
  },
}
