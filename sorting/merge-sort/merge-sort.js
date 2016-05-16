const id = x => x;

/**
 * merge two sorted arrays.
 */
const merge = (left, right, get) => {
  const result  = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length){
    if (get(left[leftIdx]) < get(right[rightIdx])){
      result.push(left[leftIdx++]);
    } else {
      result.push(right[rightIdx++]);
    }
  }

  return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}


const mergeSort = (ns, get = id) => {
    if (ns.length < 2) return ns;

    const middle = Math.floor(ns.length / 2);
    const left = ns.slice(0, middle);
    const right = ns.slice(middle);

    return merge(mergeSort(left), mergeSort(right), get);
}

module.exports = mergeSort;
