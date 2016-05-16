const id = x => x;

const swap = (a, n, m) => [a[n], a[m]] = [a[m], a[n]];

module.exports = (ns, get = id) => {
  ns = [...ns]; // copy array

  for (let i = 0, len = ns.length; i < len; i++) {
    let j = i;

    while (j > 0 && get(ns[j - 1]) > get(ns[j])) {
      swap(ns, j, j-1);
      j--;
    }
  }

  return ns;
}

