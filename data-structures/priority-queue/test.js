const tape = require('tape');
const queue = require('./priority-queue');

tape('data-structures/priority-queue', t => {
  const queue1 = queue();

  t.ok(queue1.isEmpty(), 'New queue is empty');
  t.notOk(queue1.hasNext(), 'New queue has no next');

  queue1.push(4, 1);
  t.equal(queue1.getSize(), 1, '.getSize()');
  queue1.push(3, 5);
  t.notOk(queue1.isEmpty(), '.isEmpty() returns false when items are on queue');
  t.ok(queue1.hasNext(), '.hasNext() returns true when queue have more');
  queue1.push(1, 3);

  t.equal(queue1.pop(), 3, 'Highest priority first');
  t.equal(queue1.peek(), 1, 'Peeking does not change queue');
  t.equal(queue1.pop(), 1, 'Seond highest priority second');
  t.equal(queue1.pop(), 4, 'Third highest priority third');
  t.end();
});
