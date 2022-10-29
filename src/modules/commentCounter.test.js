const { countComments } = require('./commentCounter.js');

describe('Count comments of a meal item', () => {
  test('No comments', () => {
    const arr = [];
    expect(countComments(arr)).toBe(0);
  });
  test('Expect to get 2 comments back', () => {
    const comments = [{
      creation_date: '2022-10-26',
      username: 'kenny',
      comment: 'lovely meal',
    }, {
      creation_date: '2022-10-26',
      comment: 'delecious meal',
      username: 'kenny',
    }];
    expect(countComments(comments)).toBe(2);
  });
});