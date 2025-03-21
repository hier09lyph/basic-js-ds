const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
    // Обработка случая пустого списка
    if (!l) {
        return null;
    }

    // Обработка случая удаления узла(ов) в начале списка
    while (l && l.value === k) {
        l = l.next;
    }

    let current = l;
    let previous = null;

    while (current) {
        if (current.value === k) {
            // Удаление текущего узла путем обновления ссылки на следующий узел в предыдущем узле
            previous.next = current.next;
        } else {
            // Перемещение указателя на предыдущий узел вперед
            previous = current;
        }
        // Перемещение указателя на текущий узел вперед
        current = current.next;
    }

    return l;
}


module.exports = {
    removeKFromList
};