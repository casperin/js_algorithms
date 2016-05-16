const tape = require('tape');
const bubbleSort = require('./bubble-sort');

tape('sorting/bubble-sort', t => {
  const numbers = [3, 2, 5, 1];
  const expected1 = [1, 2, 3, 5];
  const actual1 = bubbleSort(numbers);
  t.deepEqual(actual1, expected1, 'bubble sorting simple array of numbers');

  const objects = [{a: 3}, {a: 2}, {a: 5}, {a: 1}];
  const expected2 = [{a: 1}, {a: 2}, {a: 3}, {a: 5}];
  const actual2 = bubbleSort(objects, x => x.a);
  t.deepEqual(actual2, expected2, 'bubble sorting simple array of objects with a get func');

  t.end();
});
