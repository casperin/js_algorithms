const tape = require('tape');
const bucketSort = require('./bucket-sort');

tape('sorting/bucket-sort', t => {
  const numbers = [.3, .9999, .2, .0, .5, .0002, .1];
  const expected1 = [.0, .0002, .1, .2, .3, .5, .9999];
  const actual1 = bucketSort(numbers);
  t.deepEqual(actual1, expected1, 'bucket sorting simple array of numbers');

  const objects = [{a: .3}, {a: .2}, {a: .5}, {a: .1}];
  const expected2 = [{a: .1}, {a: .2}, {a: .3}, {a: .5}];
  const actual2 = bucketSort(objects, x => x.a);
  t.deepEqual(actual2, expected2, 'bucket sorting simple array of objects with a get func');

  t.end();
});
