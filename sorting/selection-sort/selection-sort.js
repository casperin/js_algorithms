const id = x => x;

const swap = (a, n, m) => [a[n], a[m]] = [a[m], a[n]];

module.exports = (ns, get = id) => {
  ns = [...ns] // Don't mess with user's array

  for (let i = 0, len = ns.length; i < len; i++) {
    let min = i;

    for (let j = i + 1; j < len; j++) {
      if (get(ns[j]) < get(ns[min])) min = j;
      if (min !== i) swap(ns, i, min);
    }
  }

  return ns;
}
