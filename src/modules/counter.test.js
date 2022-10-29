const { counter } = require('./counter.js');

describe('Count food displayed', () => {
  test('Empty array', () => {
    const arr = [];
    expect(counter(arr)).toBe(0);
  });
  test('Expect to get 12 foods back', () => {
    const movies = [{ item_id: '2345' }, { item_id: '4562' }, { item_id: '139' }, { item_id: '748' }, { item_id: '748' }, { item_id: '748' }, { item_id: '748' }, { item_id: '748' }, { item_id: '748' }, { item_id: '748' }, { item_id: '748' }, { item_id: '748' }];
    expect(counter(movies)).toBe(12);
  });
});