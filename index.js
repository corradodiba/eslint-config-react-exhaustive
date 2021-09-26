module.exports = {
  extends: require("./lib/default"),
  parser: "@typescript-eslint/parser",
  plugins: require("./lib/plugins"),
  rules: require("./lib/rules"),
  settings: {
    react: {
      version: "detect",
    },
  },
};
