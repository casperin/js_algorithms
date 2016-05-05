const tape = require('tape');
const skipList = require('./skip-list');

tape('data-structures/linked-list/skip-list', t => {
  const list1 = skipList()

  t.ok(list1.isEmpty(), 'a new skip list is empty');
  list1.push(3);
  list1.push(1);
  t.notOk(list1.isEmpty(), '.isEmpty() returns false after adding items');
  list1.push(4);
  t.equal(list1.getSize(), 3, '.getSize()');
  list1.push(2);

  t.equal(list1.pop(), 1, 'Pop first item');
  t.equal(list1.pop(), 2, 'Pop second item');
  t.ok(list1.hasNext(), '.hasNext() returns true');
  t.equal(list1.peek(), 3, 'Peek on third item');
  t.equal(list1.pop(), 3, 'Pop third item');
  t.ok(list1.hasNext(), '.hasNext() still returns true');
  t.equal(list1.pop(), 4, 'Pop last item');
  t.notOk(list1.hasNext(), '.hasNext() now returns false');
  t.ok(list1.isEmpty(), '.isEmpty() is true when list has been emptied');

  t.end();
});
