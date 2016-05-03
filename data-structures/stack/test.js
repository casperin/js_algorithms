const tape = require('tape');
const stack = require('./stack');

tape('data-structures/stack', t => {
  const stack1 = stack();

  t.ok(stack1.isEmpty(), 'Stack is empty when first created');

  stack1.push(1);
  stack1.push(2);

  t.equal(stack1.getSize(), 2, 'Reports correct size');

  t.equal(stack1.pop(), 2, 'First to come out is last to be put in');

  t.notOk(stack1.isEmpty(), 'Stack is not empty when it has items');

  t.equal(stack1.top(), 1, 'Sneak peek at top item');

  t.equal(stack1.pop(), 1, 'Remove last item');

  t.equal(stack1.getSize(), 0, 'Reports correct size when empty');

  t.throws(stack1.pop, 'Throws if trying to pop and empty stack');

  t.notOk(stack1.hasNext(), 'hasNext returns false if empty');

  stack1.push(3);

  t.ok(stack1.hasNext(), 'hasNext returns true if stack contains items');

  t.notOk(stack1.isFull(), 'Stack is not full');

  t.end();
});

