const id = x => x;

const leaf = n => ({
  a: n,
  b: null,
  isLeaf: true
});

module.exports = function bTree (get = id) {
  let root = null;

  const insert = n => {
    if (!root) return root = leaf(n);

    const current = root;

    while (true) {
      if (current.isNode && get(n) < get(current.a)) {
          current = current.left;
          continue;
      }

      if (current.isNode) {
        if (current.b === null) {
          current = current.right;
        } else {
          current = get(n) < get(current.b) ? current.middle : current.right;
        }
        continue;
      }

      if (current.isLeaf && current.b === null) {
        if (get(n) > get(current.a)) return current.b = n;
        else {
          current.b = current.a;
          return current.a = n;
        }
      }
    }
  };

  const search = n => {
    if (!root) return null;
    let current = root;

    while (true) {
      if (get(current.a) === n) return current.a;
      if (get(current.b) === n) return current.b;
      if (current.isLeaf) return null;

      if (get(n) < get(current.a)) {
          current = current.left;
          continue;
      }

      if (current.b === null) {
        current = current.right;
      } else {
        current = get(n) < get(current.b) ? current.middle : current.right;
      }
    }
  }

  return {insert, search};
};

