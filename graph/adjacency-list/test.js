const tape = require('tape');
const adjacencyList = require('./adjacency-list');
const quickSort = require('../../sorting/quick-sort/quick-sort');

tape('graph/adjacency-list', t => {
  const connections1 = [[1, 2], [3, 4], [2, 3], [3, 1], [4, 1]];
  const expected1 = [[1, [2, 3, 4]], [2, [1, 3]], [3, [1, 2, 4]], [4, [1, 3]]];
  const result1 = adjacencyList(connections1);
  // the adjacency lists are not sorted, so before we check anything, we need
  // to do this first.
  const actual1 = result1.map(([node, connections]) => [node, quickSort(connections)]);
  t.deepEqual(expected1, actual1, 'Simple adjacency list with nodes of numbers');

  const connections2 = [['a', 'b'], ['a', 'c']];
  const expected2 = [['a', ['b', 'c']], ['b', ['a']], ['c', ['a']]];
  const result2 = adjacencyList(connections2);
  const actual2 = result2.map(([node, connections]) => [node, quickSort(connections)]);
  t.deepEqual(expected2, actual2, 'Simple adjacency list with nodes of letters');

  t.end();
});

