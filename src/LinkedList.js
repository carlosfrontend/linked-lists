import Node from './Node.js';

class LinkedList {
  constructor() {
    this.start = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.start === null) {
      this.start = newNode;
    } else {
      let current = this.start;

      while (current.nextNode !== null) {
        current = current.nextNode;
      }

      current.nextNode = newNode;
    }

    this.length += 1;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.start === null) {
      this.start = newNode;
    } else {
      const current = this.start;
      this.start = newNode;
      this.start.nextNode = current;
    }

    this.length += 1;
  }

  size() {
    return `The Linked List has a size of ${this.length} Nodes`;
  }

  head() {
    if (this.start === null) {
      return `HEAD is ${this.start}`;
    }

    return `HEAD is ${this.start.value}`;
  }

  tail() {
    let tail = null;
    let current = this.start;

    if (this.start === null) {
      return `TAIL is ${tail}`;
    }

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    current.nextNode = tail;
    tail = current;

    return `TAIL is ${tail.value}`;
  }

  at(index) {
    let current = this.start;
    let count = 0;
    let msg = '';

    while (current !== null) {
      if (count === index) {
        msg = `The Node at index ${index} is ${current.value}`;
        return msg;
      }

      count += 1;
      current = current.nextNode;
    }
    msg = `The Node at index ${index} is ${current}`;
    return msg;
  }

  pop() {
    let current = this.start;

    for (let i = 0; i < this.length - 2; i += 1) {
      current = current.nextNode;
    }

    if (this.length <= 1) {
      this.start = null;
      this.length = 0;
      return this.start;
    }

    current.nextNode = null;
    this.length -= 1;

    return JSON.stringify(this);
  }

  contains(value) {
    let result = false;
    let current = this.start;

    if (value === current.value) {
      result = true;
    } else {
      while (current.nextNode !== null) {
        current = current.nextNode;
        if (current.value === value) {
          result = true;
        }
      }
    }

    return result;
  }

  find(value) {
    const arrayOfValues = [];
    let current = this.start;
    let result;
    let msg = '';

    if (!this.contains(value)) {
      result = null;
    } else {
      arrayOfValues.push(current.value);

      if (arrayOfValues[0] === value) {
        result = arrayOfValues.indexOf(value);
        msg = `The index of ${value} is ${result}`;
      }

      for (let i = 0; i < this.length; i += 1) {
        if (i > 0) {
          current = current.nextNode;
          arrayOfValues.push(current.value);
          if (arrayOfValues[i] === value) {
            result = arrayOfValues.indexOf(value);
            msg = `The index of ${value} is ${result}`;
          }
        }
      }
    }

    msg = `The index of ${value} is ${result}`;
    return msg;
  }
}

export default LinkedList;
