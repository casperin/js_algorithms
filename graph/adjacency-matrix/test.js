const tape = require('tape');
const adjacencyMatrix = require('./adjacency-matrix');

tape('graph/adjacency-matrix', t => {
  const actual = adjacencyMatrix([[0, 1], [0, 2], [0, 3], [1, 3]]);
  const expected = [
    [0, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 0],
    [1, 1, 0, 0]
  ];

  t.deepEqual(actual, expected, 'Simple matrix');

  t.end();
});
