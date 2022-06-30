const subtract = require('../src/subtract')

test('minuses 3 - 1 to equal 2', () => {
  expect(subtract(3, 1)).toBe(2)
})
