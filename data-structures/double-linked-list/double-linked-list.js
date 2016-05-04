module.exports = function singleLinkedList () {
  let list = null;

  let length = 0;

  const getAt = n => {
    let result = list;
    while (n--) result = result[2];
    return result;
  }

  const push = item => {
    if (!list) {
      list = [null, item, null];
    } else {
      const newItem = [null, item, list];
      list[0] = newItem;
      list = newItem;
    }
    length++;
  };

  const pop = _ => {
    if (length === 0) throw new Error('pop of empty linked-ist');
    const [prev, item, tail] = list;
    list = tail;
    if (tail) tail[0] = null;
    length--;
    return item;
  };

  const peek = (n = 0) => {
    if (length === 0) throw new Error('peek of empty linked-ist');
    try {
      return getAt(n)[1];
    } catch (e) {
      throw new Error('You tried to peek at non existent item');
    }
  };

  /**
   * To delete an item we link the former directly to the item after.
   */
  const remove = n => {
    if (length === 0) throw new Error('remove of empty linked-ist');
    try {
      const before = getAt(n - 1);
      const after = before[2][2];
      before[2] = after;
      after[0] = before;
      length--
    } catch (e) {
      throw new Error('Delete on non existent item');
    }
  }

  /**
   * To update an item, we linked the former to a new created item that links
   * to the one after the item we want to update.
   */
  const update = (n, value) => {
    if (n === 0) return push(value);
    try {
      const before = getAt(n - 1);
      const after = before[2][2]; // getAt(n + 1)
      const newItem = [before, value, after];
      before[2] = newItem;
      after[0] = newItem;
    } catch (e) {
      throw new Error('You tried to update non existent item');
    }
  }

  const getSize = _ => length;
  const isEmpty = _ => length === 0;
  const hasNext = _ => length > 0;

  return {push, pop, peek, update, remove, getSize, isEmpty, hasNext};
};
