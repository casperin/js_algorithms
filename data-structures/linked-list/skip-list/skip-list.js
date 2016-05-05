const gt = (a, b) => a > b;

const roll = _ => {
  let heads = 0;
  while (Math.random() < .5) heads++;
  return heads;
}

const makeItem = value => {
  return {
    value,
    next: new Array(roll() + 1)
  };
};

module.exports = function skipList (compare = gt) {
  const end = {value: Infinity};
  const head = {value: -Infinity, next: [end]}
  let levels = 1;
  let size = 0;

  const push = value => {
    const item = makeItem(value);

    while (item.next.length >= levels) {
      head.next.push(end);
      levels++;
    }

    let level = levels;
    const nodes = [];
    let currentNode = head;

    // Vertical traverse
    while (level--) {
      // Horizontal traverse
      while (compare(value, currentNode.next[level].value)) {
        currentNode = currentNode.next[level];
      }

      nodes[level] = currentNode;
    }

    for (let i = 0, len = item.next.length; i < len; i++) {
      item.next[i] = nodes[i].next[i];
      nodes[i].next[i] = item;
    }
     size++;
  }

  const pop = _ => {
    if (head.next[0] === end) throw new Error('Trying to pop on an empty skip list');
    const {value, next} = head.next[0];
    next.forEach((ref, i) => head.next[i] = ref);
    size--;
    return value;
  };

  const peek = _ => {
    const item = head.next[0];
    if (item === end) throw new Error('Trying to pop on an empty skip list');
    return item.value;
  };

  const hasNext = _ => head.next[0] !== end;
  const isEmpty = _ => !hasNext();
  const getSize = _ => size;

  return {push, pop, peek, hasNext, isEmpty, getSize};
};
