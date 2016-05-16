const tape = require('tape');
const mergeSort = require('./merge-sort');

tape('sorting/merge-sort', t => {
  const numbers = [3, 2, 5, 1];
  const expected1 = [1, 2, 3, 5];
  const actual1 = mergeSort(numbers);
  t.deepEqual(actual1, expected1, 'merge sorting simple array of numbers');

  const objects = [{a: 3}, {a: 2}, {a: 5}, {a: 1}];
  const expected2 = [{a: 1}, {a: 2}, {a: 3}, {a: 5}];
  const actual2 = mergeSort(objects, x => x.a);
  t.deepEqual(actual2, expected2, 'merge sorting simple array of objects with a get func');

  t.end();
});
