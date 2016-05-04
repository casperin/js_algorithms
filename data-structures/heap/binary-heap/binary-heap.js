module.exports = function binaryHeap (compare) {
  compare = compare ? compare : (a, b) => a > b; // gt
  /**
   * The heap itself is based on an array, ordered as exaplined here:
   * http://interactivepython.org/runestone/static/pythonds/Trees/BinaryHeapImplementation.html#the-heap-order-property
   */
  const heap = [];

  /**
   * We can get children by this simple formula.
   */
  const getChildren = n => [
    2 * n + 1, // left
    2 * n + 2 // right
  ];

  /**
   * Getting parent
   */
  const getParent = n => Math.floor((n + 1) / 2) - 1;

  /**
   * Helper to swap two items.
   */
  const swap = (a, b) => [heap[a], heap[b]] = [heap[b], heap[a]];

  const push = item => {
    heap.push(item);
    bubbleUp(heap.length - 1);
  };

  /**
   * When pushing to the heap we add it to the end of the list (mean at the
   * bottom right of the tree), and then bubble it up, swapping places with its
   * parent up through the tree if it is larger than its parent. As soon as we
   * find a parent larger than our value, we are done.
   */
  const bubbleUp = n => {
    if (n <= 0) return;

    const parent = getParent(n); // index of parent, not the actual value

    // We're good, parent is larger.
    if (compare(heap[parent], heap[n])) return;

    swap(n, parent);
    bubbleUp(parent);
  };

  /**
   * When popping an item off the heap, we know that the item we want is at the
   * top. We then take the very last item, put it at the top and let it sink
   * down through the heap.
   */
  const pop = _ => {
    if (heap.length === 0) throw new Error('Heap is empty');

    const item = heap[0];

    const end = heap.pop();

    // If we have no heap (meaning item and end are the same), then we just
    // forget the sinking down and return our item.
    if (heap.length) {
      heap[0] = end;
      sinkDown(0);
    }

    return item;
  }

  /**
   *
   */
  const sinkDown = n => {
    const [left, right] = getChildren(n);

    // If this holds true, we don't need to swap anything
    var largest = n;

    // Left leg exists and is larger than our value
    if (left < heap.length && compare(heap[left], heap[n])) largest = left;

    // Right leg exists and is larger than our value
    if (right < heap.length && compare(heap[right], heap[n])) largest = right;

    // Guard: If the parent is the largest, then we're done
    if (largest === n) return;

    swap(n, largest);
    sinkDown(largest);
  };

  const peek = _ => heap[0];
  const getSize = _ => heap.length;
  const hasNext = _ => heap.length > 0;
  const isEmpty = _ => heap.length === 0;

  return {pop, peek, push, getSize, hasNext, isEmpty};
};
