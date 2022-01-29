const warn = process.env.NODE_ENV === "development" ? "warn" : "error"

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:nuxt/recommended"],
  plugins: ["promise"],
  // add your custom rules here
  rules: {
    "no-console": warn,
    "no-debugger": warn,
    "comma-dangle": ["error", "always-multiline"],
    "@typescript-eslint/no-explicit-any": "error",
    "require-await": "off",
    "promise/always-return": "error",
    "import/order": "off",
    semi: ["error", "never", { beforeStatementContinuationChars: "never" }],
    "@typescript-eslint/member-ordering": warn,
    quotes: ["error", "double", { allowTemplateLiterals: true }],
  },
}
