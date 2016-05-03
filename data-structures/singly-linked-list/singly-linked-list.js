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

  /**
   * To delete an item we link the former directly to the item after.
   */
  const remove = n => {
    if (length === 0) throw new Error('remove of empty linked-ist');
    try {
      const before = getAt(n - 1);
      const after = before[1][1];
      before[1] = after;
      length--
    } catch (e) {
      throw new Error('Delete on non existent item');
    }
  }

  /**
   * To update an item, we linked the former to a new created item that links
   * to the one after the item we want to update.
   */
  const update = (n, item) => {
    if (n === 0) return push(item);
    try {
      const before = getAt(n - 1);
      const after = before[1][1]; // getAt(n + 1)
      before[1] = [item, after];
    } catch (e) {
      throw new Error('You tried to update non existent item');
    }
  }

  const getSize = _ => length;
  const isEmpty = _ => length === 0;
  const hasNext = _ => length > 0;

  return {push, pop, peek, update, remove, getSize, isEmpty, hasNext};
};
