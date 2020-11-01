module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    // TODO: no-descending-specificity も本来は入れたほうがいいので削除
    'no-descending-specificity': null,
    'rule-empty-line-before': ['always-multi-line', { except: ['first-nested'] }],
    'at-rule-empty-line-before': ['always', { except: ['inside-block'] }],
    'property-no-vendor-prefix': true,
  },
}
