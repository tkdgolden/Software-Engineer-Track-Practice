module.exports = {
    'env': {
        'node': true,
        'jasmine': true,
        'es2021': true,
    },
    'extends': 'eslint:recommended',
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}',
                'challenges/**/*.mjs' ,
            ],
            'parserOptions': {
                'sourceType': 'module'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'rules': {
        // treat var statements as if they were block scoped
        // https://eslint.org/docs/rules/block-scoped-var
        'block-scoped-var': 'error',


        // require the use of === and !==
        // https://eslint.org/docs/rules/eqeqeq
        'eqeqeq': ['error', 'always', { null: 'ignore' }],

        'curly': ['error', 'multi-line'], // multiline
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};
