'use strict';

module.exports = function circularQueue (maxSize) {
  const queue = [];
  let readIndex = 0;
  let writeIndex = 0;

  const isEmpty = _ => readIndex === writeIndex;
  const hasNext = _ => writeIndex > readIndex;
  const getMaxSize = _ => maxSize;

  const add = item => {
    queue[writeIndex % maxSize] = item;
    writeIndex++;
    return true;
  }

  const peek = _ => {
    if (isEmpty()) throw new Error('circular queue is empty');
    return queue[readIndex % maxSize];
  }

  const poll = _ => {
    if (isEmpty()) throw new Error('circular queue is empty');
    readIndex++;
    return queue[(readIndex - 1) % maxSize];
  }

  return {
    isEmpty,
    hasNext,
    getMaxSize,
    add,
    peek,
    poll
  };
};
