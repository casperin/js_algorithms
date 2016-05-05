const tape = require('tape');
const binarySearchTree = require('./binary-search-tree');

tape('data-structures/tree/binary-search-tree', t => {
  const bst = binarySearchTree();

  const ns = [23, 12, 4, 13, 53, 21, 64, 43, 24, 1];
  for (const n of ns) bst.insert(n);

  t.notOk(bst.search(523), 'Returns falsy when searching for number not in the tree');

  t.equal(bst.search(24), 24, 'Can find number 24 again');
  t.ok(bst.delete(24), 'Returns true when deleting 24 (zero children)');
  t.notOk(bst.search(24), 'Can no longer find number');

  t.equal(bst.search(13), 13, 'Finds 13 (has one child)');
  t.ok(bst.delete(13), 'Returns true when deleting node with one child');
  t.notOk(bst.search(13), 'Can no longer find number 13');

  t.equal(bst.search(23), 23, 'Finds 23 (has two children)');
  t.ok(bst.delete(23), 'Returns true when deleting node with two children');
  t.notOk(bst.search(23), 'Can no longer find number 23');

  t.end();
});
