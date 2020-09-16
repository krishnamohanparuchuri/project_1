const sum = require('./sum');

test('add two numbers', () => {
    expect(sum(1, 2)).toBe(3)
})

test('add two numbers', () => {
    expect(sum(2, 2)).toBe(4)
})