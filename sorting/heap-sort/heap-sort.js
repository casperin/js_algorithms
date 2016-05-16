const binaryHeap = require('../../data-structures/heap/binary-heap/binary-heap');

const id = x => x;

module.exports = (ns, get = id) => {
  const compare = (a, b) => get(a) < get(b);
  const heap = binaryHeap(compare);
  const result = [];

  // Add to heap
  let len = ns.length;
  while (len--) heap.push(ns[len]);

  // pull out of heap
  while (heap.hasNext()) result.push(heap.pop());

  return result;
}

