const tape = require('tape');
const selectionSort = require('./selection-sort');

tape('sorting/selection-sort', t => {
  const numbers = [3, 2, 5, 1];
  const expected1 = [1, 2, 3, 5];
  const actual1 = selectionSort(numbers);
  t.deepEqual(actual1, expected1, 'selection sorting simple array of numbers');

  const objects = [{a: 3}, {a: 2}, {a: 5}, {a: 1}];
  const expected2 = [{a: 1}, {a: 2}, {a: 3}, {a: 5}];
  const actual2 = selectionSort(objects, x => x.a);
  t.deepEqual(actual2, expected2, 'selection sorting simple array of objects with a get func');

  t.end();
});

