'use strict';

module.exports = function queue () {
  const queue = [];
  let currentIndex = 0;

  return {
    isEmpty: _ => queue.length === currentIndex,
    hasNext: _ => queue.length > currentIndex,
    getSize: _ => queue.length - currentIndex,
    enqueue: item => queue.push(item),
    front: _ => queue[currentIndex],
    dequeue: _ => {
      currentIndex++;
      return queue[currentIndex - 1];
    }
  };
};
