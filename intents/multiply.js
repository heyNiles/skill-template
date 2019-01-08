module.exports = intent => intent.ns('multiply')
  .can('multiply numbers')
  .examples([
    'whats 182 times 56',
    'calculate 410 x 54',
  ])
  .command([
    '~[whats] @[number_one] ~[times] @[number_two]',
  ], { train: 100, test: 10 })
  .slot('number_one', { numberPattern: true })
  .slot('number_two', { numberPattern: true })
  .alias('whats', ['whats', 'what is', 'calculate', 'calc', 'do'])
  .alias('times', ['times', 'x', 'multiplied by']);
