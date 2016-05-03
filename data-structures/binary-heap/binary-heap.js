module.exports = function heap (compare) {
  const heap = [];
  compare = compare || (a, b) => a > b; // descending
  const swap = (a, b) => {
    const tmp = heap[a];
    heap[a] = heap[b];
    heap[b] = tmp;
  };

  const sinkDown = n => {
    const left = 2 * n + 1;
    const right = left + 1;
    // If this holds true, we don't need to swap anything
    var largest = n;

    // Left leg is larger
    if (left < heap.length && compare(heap[left], heap[n])) largest = left;
    // Right leg is larger
    if (right < heap.length && compare(heap[right], heap[n])) largest = right;

    // If the parent is the largest, then we're done.
    if (largest === n) return;

    swap(n, largest);
    sinkDown(largest);
  };

  const bubbleUp = n => {
    if (n <= 0) return;
    const parent = Math.floor((n + 1) / 2) - 1;

    // We're good, parent is bigger.
    if (compare(heap[parent], heap[n])) return;

    swap(n, parent);
    bubbleUp(parent);
  };

  const pop = _ => {
    if (heap.length === 0) throw new Error('Heap is empty');

    const item = heap[0];
    const end = heap.pop();

    if (heap.length) {
      heap[0] = end;
      sinkDown(0);
    }

    return item;
  }

  const peek = _ => heap[0];

  const push = item => {
    heap.push(item);
    bubbleUp(heap.length - 1);
  };

  const getSize = _ => heap.length;
  const hasNext = _ => heap.length > 0;
  const isEmpty = _ => heap.length === 0;

  return {pop, peek, push, getSize, hasNext, isEmpty};
};
