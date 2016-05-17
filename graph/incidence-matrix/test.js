const tape = require('tape');
const incidenceMatrix = require('./incidence-matrix');

tape('graph/incidence-matrix', t => {
  const actual = incidenceMatrix([[0, 1], [0, 2], [0, 3], [1, 3], [1, 2]]);
  const expected = [
    [1, 1, 1, 0, 0],
    [1, 0, 0, 1, 1],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 1, 0]
  ];

  t.deepEqual(actual, expected, 'Simple matrix');

  t.end();
});
