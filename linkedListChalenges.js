class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Challenge 1: Print in Reverse
  printInReverse() {
    const stack = [];
    let current = this.head;
    while (current) {
      stack.push(current.data);
      current = current.next;
    }
    while (stack.length > 0) {
      console.log(stack.pop());
    }
  }

  // Challenge 2: Find the Middle Node
  findMiddleNode() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow ? slow.data : null;
  }

  // Challenge 3: Reverse a Linked List
  reverseLinkedList() {
    let prev = null;
    let current = this.head;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  // Challenge 4: Remove All Occurrences
  removeAllOccurrences(value) {
    let dummy = new Node(0);
    dummy.next = this.head;
    let current = dummy;

    while (current.next) {
      if (current.next.data === value) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    this.head = dummy.next;
  }
}

// Example usage
const linkedList = new LinkedList();
linkedList.head = new Node(1);
linkedList.head.next = new Node(2);
linkedList.head.next.next = new Node(3);
linkedList.head.next.next.next = new Node(2);
linkedList.head.next.next.next.next = new Node(4);

console.log('Challenge 1: Print in Reverse:');
linkedList.printInReverse();

console.log('\nChallenge 2: Find the Middle Node:');
console.log(linkedList.findMiddleNode());

console.log('\nChallenge 3: Reverse Linked List:');
linkedList.reverseLinkedList();
console.log(linkedList);

console.log('\nChallenge 4: Remove All Occurrences of 2:');
linkedList.removeAllOccurrences(2);
console.log(linkedList);
