import sum from './sum';

test('adds 1 + 2 to equal 3', async () => {
  const data = await sum(1, 2);
  expect(data).toBe(3);
});