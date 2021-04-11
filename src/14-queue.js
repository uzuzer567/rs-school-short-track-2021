// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.queue = [];
  }

  get size() {
    return this.queue.length;
  }

  enqueue(elem) {
    this.lastElement = new ListNode(elem);
    this.queue.push(elem);
  }

  dequeue() {
    return this.queue.shift();
  }
}

module.exports = Queue;
