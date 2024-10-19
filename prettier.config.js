// filepath: prettier.config.js
// date: October 18, 2024
// description: Prettier configuration using ES module syntax.

const prettierConfig = {
  semi: true,
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default prettierConfig;
