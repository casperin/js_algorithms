/**
 * A priority queue is implemented on top of a binary heap
 */
const makeHeap = require('../binary-heap/binary-heap');

module.exports = function priorityQueue () {
  const heap = makeHeap((a, b) => a.priority > b.priority);

  const push = (value, priority) => heap.push({value, priority});
  const pop = _ => heap.pop().value;
  const peek = _ => heap.peek().value;

  const getSize = _ => heap.getSize();
  const hasNext = _ => heap.hasNext();
  const isEmpty = _ => heap.isEmpty();

  return {push, pop, peek, getSize, hasNext, isEmpty};
};

