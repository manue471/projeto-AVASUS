module.exports = {
  root: false,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "prettier/prettier": 0
  },
};
