const adjacencyList = connections => {
  const buffer = new Map();

  connections.forEach(([a, b]) => {
    if (!buffer.has(a)) buffer.set(a, []);
    if (!buffer.get(a).includes(b)) buffer.get(a).push(b);

    if (!buffer.has(b)) buffer.set(b, []);
    if (!buffer.get(b).includes(a)) buffer.get(b).push(a);
  });

  return [...buffer];
}

module.exports = adjacencyList;

