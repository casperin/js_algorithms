const add = (list, nodeA, nodeB) => {
  if (!list[nodeA]) list[nodeA] = [];
  if (!list[nodeA].includes(nodeB)) list[nodeA].push(nodeB);
}

const adjacencyList = connections => {
  const result = [];

  connections.forEach(([a, b]) => {
    if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Nodes must be integers');
    add(result, a, b);
    add(result, b, a);
  });

  return result;
}

module.exports = adjacencyList;

