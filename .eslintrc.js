module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  plugins: ['import'],

  env: {
    browser: true,
    node: true,
    mocha: true,
  },

  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: ['src', 'node_modules'],
            extensions: ['.js', '.json'],
          },
        },
      },
    },
  },


  rules: {
    /* eslint-plugin-import */
    'import/extensions': [2, 'never'],
    'import/no-extraneous-dependencies': [2, {
      devDependencies: [
        'tools/**',
        'config/**',
        './*.js',
      ],
      optionalDependencies: false,
      peerDependencies: false,
    }],

    /* core */
    'func-names': [2, 'as-needed'],
    semi: [2, 'never'],
    'no-unexpected-multiline': 2,
  },

  overrides: [
    {
      files: "**/*.test.js",
      globals: {
        expect: false,
        sinon: false,
      },
      rules: {
        /* https://github.com/eslint/eslint/issues/2102 */
        'no-unused-expressions': false,
      },
    },
  ],
}
