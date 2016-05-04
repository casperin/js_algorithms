/**
 * A priority queue is implemented on top of a binary heap.
 *
 * Each item in our priority queue is modelled as {value, priority}
 */
const makeHeap = require('../../heap/binary-heap/binary-heap');

module.exports = function priorityQueue () {
  // We want the compare the priorities.
  const compare = (a, b) => a.priority > b.priority;

  const heap = makeHeap(compare);

  /**
   * push, pop, and peek just sits as layers in between the user and the binary
   * heap, making sure the user is handed values, and the heap is handed
   * objects.
   */
  const push = (value, priority) => heap.push({value, priority});
  const pop = _ => heap.pop().value;
  const peek = _ => heap.peek().value;

  const getSize = _ => heap.getSize();
  const hasNext = _ => heap.hasNext();
  const isEmpty = _ => heap.isEmpty();

  return {push, pop, peek, getSize, hasNext, isEmpty};
};

