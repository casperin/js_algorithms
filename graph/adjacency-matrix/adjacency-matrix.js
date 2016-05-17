
const adjacencyMatrix = connections => {
  const maxNode = connections.reduce((max, [a, b]) => Math.max(max, a, b), 0);
  const makeRow = _ => Array(maxNode + 1).fill(0);
  const matrix = Array(maxNode + 1).fill(null).map(makeRow);

  for (const [a, b] of connections) {
    matrix[a][b] = 1;
    matrix[b][a] = 1;
  }

  return matrix;
}

module.exports = adjacencyMatrix;

