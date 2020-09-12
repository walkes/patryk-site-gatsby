module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended'
    ],
    rules: {
        "@typescript-eslint/explicit-function-return-type": ["error",
            {

                "allowExpressions": true
            }
        ],
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/ban-ts-ignore": "off",
        "quotes": ["error", "single"]
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};