/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: [
        '@remix-run/eslint-config',
        '@remix-run/eslint-config/node',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
    settings: {
        'import/resolver': {
            typescript: true,
            node: true,
        },
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
};
