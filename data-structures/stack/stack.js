module.exports = function stack () {
  const stack = [];

  return {
    isEmpty: _ => stack.length === 0,
    hasNext: _ => stack.length > 0,
    isFull: _ => stack.length > 4294967294,
    push: item => stack.push(item),
    getSize: _ => stack.length,
    top: _ => stack[stack.length - 1],
    pop: _ => {
      if (stack.length === 0) throw new Error('stack is empty');
      return stack.pop()
    }
  };
};

