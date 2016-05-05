const id = x => x;

module.exports = function binarySearchTree (get = id) {
  let root = null; // we start out with an empty tree

  const makeItem = data => ({data, left: null, right: null});

  const insert = data => {
    if (search(data)) throw new Error(`${data} is already in the tree`);
    const item = makeItem(data);

    if (root === null) return root = item;

    let current = root;
    while (true) {
      if (get(data) < get(current.data)) {
        if (!current.left) return current.left = item;
        current = current.left;
      } else {
        if (!current.right) return current.right = item;
        current = current.right;
      }
    }
  };

  const search = data => {
    if (!root) return null;
    let current = root;
    while (get(current.data) !== get(data)) {
      current = get(data) < get(current.data) ? current.left : current.right;
      if (!current) return null;
    }
    return get(current.data);
  };

  const findClosest = (head, methodName, seed) => {
    const data = get(head.data);
    const left = !head.left ? seed : findClosest(head.left, methodName, seed);
    const right = !head.right ? seed : findClosest(head.right, methodName, seed);
    return Math[methodName](data, left, right);
  };

  const remove = data => {
    let parent = null;
    let current = root;
    let dir = null; // 'left'|'right'
    while (get(current.data) !== get(data)) {
      parent = current;
      dir = get(data) < get(current.data) ? 'left' : 'right';
      current = dir === 'left' ? current.left : current.right;
      if (current === null) return false; // nothing to delete
    }

    switch (true) {
      case !current.left && !current.right: // no children
        parent[dir] = null;
        return true;

      case !current.left || !current.right: // one child
        parent[dir] = current.left || current.right;
        return true;

      default: // two children
        const closestFromLeft = findClosest(current.left, 'max', -Infinity);
        const closestFromRight = findClosest(current.right, 'min', Infinity);
        const diffLeft = get(current.data) - closestFromLeft;
        const diffRight = closestFromRight - get(current.data);
        if (diffLeft < diffRight) {
          const tmp = get(closestFromLeft);
          remove(get(closestFromLeft));
          current.data = tmp;
        } else {
          const tmp = get(closestFromRight);
          remove(get(closestFromRight));
          current.data = tmp;
        }
        return true;
    }
  };

  return {insert, search, delete: remove};
};
