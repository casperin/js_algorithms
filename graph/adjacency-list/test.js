const tape = require('tape');
const adjacencyList = require('./adjacency-list');
const quickSort = require('../../sorting/quick-sort/quick-sort');

tape('graph/adjacency-list', t => {
  const connections1 = [[0, 1], [2, 3], [1, 2], [2, 0], [3, 0]];
  const expected1 = [[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]];
  const result1 = adjacencyList(connections1);
  // the adjacency lists are not sorted, so before we check anything, we need
  // to do this first.
  const actual1 = result1.map(l => quickSort(l));
  t.deepEqual(expected1, actual1, 'Simple adjacency list with nodes of numbers');

  t.end();
});

