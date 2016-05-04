const tape = require('tape');
const circularQueue = require('./circular-queue');

tape('data-structures/circular-queue', t => {
  const queue1 = circularQueue(3);

  t.equal(queue1.getMaxSize(), 3, 'We can get our maxSize out again');

  t.ok(queue1.isEmpty(), 'Queue is empty when first created');

  queue1.add(1);
  queue1.add(2);

  t.equal(queue1.peek(), 1, 'Peeking gives me first item');

  queue1.add(3);
  queue1.add(4);

  t.equal(queue1.poll(), 4, 'Queue is circular');

  t.equal(queue1.poll(), 2, 'Queue is circular');

  t.ok(queue1.hasNext(), '.hasNext() returns true when items are in queue');

  t.notOk(queue1.isEmpty(), '.isEmpty() returns false when items are in queue');

  t.equal(queue1.poll(), 3, 'Queue is circular');

  t.equal(queue1.poll(), 4, 'Queue is very circular');

  t.notOk(queue1.hasNext(), '.hasNext() returns false when items are not in queue');

  t.ok(queue1.isEmpty(), '.isEmpty() returns true when items are not in queue');

  t.end();
});

