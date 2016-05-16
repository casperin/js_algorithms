const id = x => x;

const quickSort = (ns, left, right, get) => {
  if (ns.length < 2) return ns;

  const index = partition(ns, left, right, get);

  if (left < index - 1) quickSort(ns, left, index - 1, get);
  if (index < right) quickSort(ns, index, right, get);

  return ns;
};

const partition = (ns, left, right, get) => {
  const pivot = ns[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (get(ns[i]) < get(pivot)) i++;
    while (get(ns[j]) > get(pivot)) j--;

    if (i <= j) {
      [ns[i], ns[j]] = [ns[j], ns[i]]; // swap
      i++;
      j--;
    }
  }

  return i;
}

module.exports = (ns, get = id) => quickSort([...ns], 0, ns.length - 1, get);
