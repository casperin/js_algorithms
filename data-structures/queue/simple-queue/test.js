const tape = require('tape');
const queue = require('./queue');

tape('data-structures/queue', t => {
  const queue1 = queue();

  t.ok(queue1.isEmpty(), 'Queue is empty when first created');

  t.equal(queue1.getSize(), 0, 'Reports correct size when empty');

  queue1.push(1);

  t.notOk(queue1.isEmpty(), 'Queue is not empty after enqueing item');

  queue1.push(2);

  t.equal(queue1.getSize(), 2, 'Reports correct size');

  t.equal(queue1.peek(), 1, '.front() gives us first item');

  t.equal(queue1.getSize(), 2, 'Calling front did not change queue\'s size');

  t.equal(queue1.pop(), 1, '.dequeue() also gives us first size');

  t.ok(queue1.hasNext(), 'Queue .hasNext() returns true when items are there');

  queue1.pop();

  t.notOk(queue1.hasNext(), 'Queue .hasNext() returns false when no items are there');

  t.equal(queue1.getSize(), 0, 'Calling dequeue changes queue\'s size');

  t.end();
});

