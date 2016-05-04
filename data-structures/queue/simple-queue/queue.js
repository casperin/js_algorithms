'use strict';

/**
 * This is a naive implementation of a queue. There are much better
 * implementations.
 *
 * .pop() is especially expensive.
 */

module.exports = function queue () {
  const queue = [];

  return {
    isEmpty: _ => queue.length === 0,
    hasNext: _ => queue.length > 0,
    getSize: _ => queue.length,
    push: item => queue.push(item),
    peek: _ => queue[0],
    pop: _ => queue.shift()
  };
};
