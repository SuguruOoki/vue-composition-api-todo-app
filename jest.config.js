module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['js', 'vue', 'json', 'ts', 'd.ts'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      babelConfig: true,
    },
  },
  setupFiles: ['<rootDir>/test/helpers/jest.setup.ts'],
  verbose: true,
  testPathIgnorePatterns: ['/test/e2e/'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!typed-vuex/lib|nuxt-typed-vuex/lib)'],
}
