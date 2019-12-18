const argsString = require('./argsString')

test('replace {} with arrays values with index', () => {
  expect(argsString('{} {}', ['Hello', 'World!'])).toBe('Hello World!');
});
test('return test as it is as there is no placeholder available', () => {
  expect(argsString('How are you?', ['Hey', 'what'])).toBe('How are you?');
});

