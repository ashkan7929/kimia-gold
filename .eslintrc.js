module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {
                project: './tsconfig.json',
            },
        },
    },
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'jsx-a11y', 'import', 'prettier'],
    extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        // spacing 4 space
        'indent': ['error', 4, { SwitchCase: 1 }],
        '@typescript-eslint/indent': ['error', 4],

        // optional tweaks
        'react/react-in-jsx-scope': 'off', // for React 17+
        'prettier/prettier': ['error', { tabWidth: 4, useTabs: false }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'no-console': 'warn',
        'import/prefer-default-export': 'off',
        'react/require-default-props': 'off',
    },
}
