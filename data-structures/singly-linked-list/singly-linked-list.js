module.exports = function singleLinkedList () {
  let list = null;

  let length = 0;

  const getAt = n => {
    let result = list;
    while (n--) result = result[1];
    return result;
  }

  const push = item => {
    list = [item, list];
    length++;
  };

  const pop = _ => {
    if (length === 0) throw new Error('pop of empty linked-ist');
    const [head, tail] = list;
    list = tail;
    length--;
    return head;
  };

  const peek = (n = 0) => {
    if (length === 0) throw new Error('peek of empty linked-ist');
    try {
      return getAt(n)[0];
    } catch (e) {
      throw new Error('You tried to peek at non existent item');
    }
  };

  const update = (n, item) => {
    if (n === 0) return push(item);
    // Since each item is linked, we need the item before and after
    try {
      const before = getAt(n - 1);
      const after = before[1][1];
      before[1] = [item, after];
    } catch (e) {
      throw new Error('You tried to update non existent item');
    }
  }

  const getSize = _ => length;
  const isEmpty = _ => length === 0;
  const hasNext = _ => length > 0;

  return {push, pop, peek, update, getSize, isEmpty, hasNext};
};
