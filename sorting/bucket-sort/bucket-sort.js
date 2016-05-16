const insertionSort = require('../insertion-sort/insertion-sort');

const id = x => x;
const flatMap = (arr, fn) => arr.reduce((acc, a) => acc.concat(fn(a)), []);

module.exports = (ns, get = id) => {
  const buckets = [[], [], [], [], [], [], [], [], [], []];

  // Insert items into their buckets.
  ns.forEach(n => {
    const index = Math.floor(get(n) * 10);
    if (index > 9) throw new Error('This bucket-sort only works for 0 <= n < 10');
    buckets[index].push(n);
  });

  // Sort each bucket, then flatten the buckets into one array.
  return flatMap(buckets, b => insertionSort(b, get));
};

