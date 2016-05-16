const id = x => x;

const swap = (a, n, m) => [a[n], a[m]] = [a[m], a[n]];

module.exports = (ns, get = id) => {
  ns = [...ns];
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 1, len = ns.length; i < len; i++) {
      if (get(ns[i-1]) <= get(ns[i])) continue;
      swap(ns, i-1, i);
      swapped = true;
    }
  }

  return ns;
}

