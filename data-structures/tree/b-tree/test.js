const tape = require('tape');
const bTree = require('./b-tree');

tape('data-structures/tree/b-tree', t => {
  const bt = bTree();

  bt.insert(2);
  t.equal(bt.search(2), 2, 'Can insert and find number');

  bt.insert(1);
  t.equal(bt.search(1), 1, 'Can insert and find a second number');

  t.end();
});

