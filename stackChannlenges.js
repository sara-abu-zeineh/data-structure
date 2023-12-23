class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Additional method to peek at the top element without popping
    peek() {
      return this.items[this.items.length - 1];
    }
  }
  
  // Stack Challenges
  function reverseList(list) {
    const stack = new Stack();
    let current = list.head;
    while (current) {
      stack.push(current.data);
      current = current.next;
    }
  
    const reversedList = new LinkedList();
    while (!stack.isEmpty()) {
      reversedList.head = new Node(stack.pop(), reversedList.head);
    }
  
    return reversedList;
  }
  
  function balanceParentheses(str) {
    const stack = new Stack();
    const parentheses = { '(': ')', '[': ']', '{': '}' };
  
    for (const char of str) {
      if (char in parentheses) {
        stack.push(char);
      } else {
        const top = stack.pop();
        if (!top || parentheses[top] !== char) {
          return false;
        }
      }
    }
  
    return stack.isEmpty();
  }
  
  // Example usage
  const linkedList = new LinkedList();
  linkedList.head = new Node(1);
  linkedList.head.next = new Node(2);
  linkedList.head.next.next = new Node(3);
  
  console.log('Print in Reverse:');
  linkedList.printInReverse();
  
  console.log('\nMiddle Node:');
  console.log(linkedList.findMiddleNode());
  
  console.log('\nReverse Linked List:');
  linkedList.reverseLinkedList();
  console.log(linkedList);
  
  console.log('\nRemove All Occurrences:');
  linkedList.removeAllOccurrences(2);
  console.log(linkedList);
  
  const str1 = '()[]{}';
  const str2 = '({[}])';
  console.log(`\nIs "${str1}" balanced? ${balanceParentheses(str1)}`);
  console.log(`Is "${str2}" balanced? ${balanceParentheses(str2)}`);
  