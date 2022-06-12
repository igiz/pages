module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
    },
    'extends': [
        'plugin:react/recommended',
        'google'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'plugins': [
        'react',
        '@typescript-eslint',
    ],
    'rules': {
        'indent': [2, 4],
        'max-len': [2, { 'code': 200 }],
        'object-curly-spacing': [2, 'always'],
        'linebreak-style': 'off',
        'react/display-name': 'off',
    },
};
