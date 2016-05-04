const tape = require('tape');
const heap = require('./binary-heap');

tape('data-structures/binary-heap', t => {
  const heap1 = heap();

  t.ok(heap1.isEmpty(), '.isEmpty() returns true on bran new heap');

  t.notOk(heap1.hasNext(), '.hasNext() is false when empty');

  heap1.push(3);
  heap1.push(1);
  heap1.push(4);
  heap1.push(2);

  t.equal(heap1.getSize(), 4, 'Get size after adding item');

  t.ok(heap1.hasNext(), '.hasNext() is true when not empty');

  t.equal(heap1.pop(), 4, 'Largest n comes out first');
  t.equal(heap1.pop(), 3, 'Second largest n comes out second');
  t.equal(heap1.peek(), 2, 'Peeking gives me value without changing heap');
  t.equal(heap1.pop(), 2, 'Third n comes out third');
  t.equal(heap1.pop(), 1, 'Fourth n comes out fourth');

  t.end();
});

