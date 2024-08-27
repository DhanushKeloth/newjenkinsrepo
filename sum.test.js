const sum= require('./index');


test('sum of two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});

