module.exports = {

  'package.json': [
    'sort-package-json',
    'git add'
  ],

  '*.(j|t)s(x)?': [
    'eslint --fix',
    'git add'
  ]

}
