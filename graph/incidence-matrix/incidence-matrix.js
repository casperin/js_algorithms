
module.exports = connections => {
  const maxNode = connections.reduce((max, [a, b]) => Math.max(max, a, b), 0);
  const makeRow = _ => Array(connections.length).fill(0);
  const matrix = Array(maxNode + 1).fill(null).map(makeRow);

  connections.forEach(([a, b], i) => {
    matrix[a][i] = 1;
    matrix[b][i] = 1;
  });

  return matrix;
}
