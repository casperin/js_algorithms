const incidenceList = (connections, node) => {
  const result = [];

  const add = node => {
    if (!result.includes(node)) result.push(node);
  }

  connections.forEach(([a, b]) => {
    if (a === node) add(b);
    if (b === node) add(a);
  });

  return result;
}

module.exports = incidenceList;

