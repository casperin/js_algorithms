const tape = require('tape');
const list = require('./doubly-linked-list');

tape('data-structures/doubly-linked-list', t => {
  const list1 = list();

  list1.push(1);
  list1.push(2);
  list1.push(3);

  t.equal(list1.getSize(), 3, '.getSize()');
  t.equal(list1.peek(2), 1, '.peek(n)');
  t.equal(list1.pop(), 3, 'LIFO');
  t.equal(list1.peek(), 2, 'Peek changes nothing');
  t.equal(list1.pop(), 2, 'Next');
  t.ok(list1.hasNext(), '.hasNext()');
  t.equal(list1.pop(), 1, 'Last');
  t.notOk(list1.hasNext(), 'false .hasNext()');
  t.ok(list1.isEmpty(), '.isEmpty()');

  list1.push(1);
  list1.push(2);
  list1.push(3);

  list1.update(1, 5);

  t.equal(list1.peek(1), 5, '.update()');

  list1.remove(1);
  t.equal(list1.getSize(), 2, 'Removing item');
  t.equal(list1.pop(), 3, 'Making sure item was removed 1');
  t.equal(list1.pop(), 1, 'Making sure item was removed 2');

  t.throws(_ => list1.peek(42), 'Trying to peek out of bounds throws');
  t.throws(_ => list1.update(42, 'foo'), 'Trying to update out of bounds throws');

  t.end();
});

