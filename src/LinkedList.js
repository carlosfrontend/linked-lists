import Node from "./Node.js";

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //   adds a new node containing value to the end of the list

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.size += 1;
    } else {
      let currentValue = this.head;
      while (currentValue.nextNode !== null) {
        currentValue = currentValue.nextNode;
      }

      currentValue.nextNode = newNode;
      this.size += 1;
    }
  }

  //   adds a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      const currentValue = this.head;
      this.head = newNode;
      this.head.nextNode = currentValue;
    }
    this.size += 1;
  }

  getSize() {
    return `Linked List Size ==> ${this.size}`;
  }

  getHead() {
    const { head } = this;
    return `HEAD is ==> ${head.value}`;
  }

  getTail() {
    let currentValue = this.head;
    let tail = null;

    while (currentValue.nextNode !== null) {
      currentValue = currentValue.nextNode;
      tail = currentValue;
    }

    return `TAIL is ==> ${tail.value}`;
  }

  getNodeAt(index) {
    let msg = "";
    let currentValue = this.head;

    if (index === 0) {
      msg += `The Node in the index ${index} is ==> ${currentValue.value} `;
      return msg;
    } else if (index === 1) {
      currentValue = currentValue.nextNode;
      msg += `The Node in the index ${index} is ==> ${currentValue.value} `;
      return msg;
    }

    if (index > this.size - 1 || index < 0) {
      currentValue = null;
      msg += `The Node in the index ${index} is ==> ${currentValue} `;
      return msg;
    } else {
      if (index >= 2) {
        this.head = currentValue;
        currentValue = this.head.nextNode;
        currentValue = currentValue.nextNode;
        msg += `The Node in the index ${index} is ==> ${currentValue.value} `;
       
      }
    }

   
    return msg;
  }
}

export default LinkedList;
