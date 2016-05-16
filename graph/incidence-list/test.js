const tape = require('tape');
const incidenceList = require('./incidence-list');
const quickSort = require('../../sorting/quick-sort/quick-sort');

tape('graph/incidence-list', t => {
  const connections1 = [[1, 2], [3, 4], [2, 3], [3, 1], [4, 1]];
  const expected1 = [2, 3, 4];
  const result1 = incidenceList(connections1, 1);
  // the incidence lists are not sorted, so before we check anything, we need
  // to do this first.
  const actual1 = quickSort(result1);
  t.deepEqual(actual1, expected1, 'Simple incidence list with nodes of numbers');

  const connections2 = [['a', 'b'], ['a', 'c']];
  const expected2 = ['b', 'c'];
  const result2 = incidenceList(connections2, 'a');
  const actual2 = quickSort(result2);
  t.deepEqual(actual2, expected2, 'Simple incidence list with nodes of letters');

  t.end();
});

