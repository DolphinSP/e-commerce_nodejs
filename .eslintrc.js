module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended' // Asegura que Prettier se ejecute como parte de ESLint
    ],
    plugins: ['simple-import-sort'],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      project: './tsconfig.json'
    },
    rules: {
      'prettier/prettier': 'error', // Marca los problemas de Prettier como errores
      'simple-import-sort/imports': 'error', // Ordena las importaciones automáticamente
      'simple-import-sort/exports': 'error' // Ordena las exportaciones automáticamente
    },
  };
  