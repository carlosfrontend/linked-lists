import LinkedList from './LinkedList.js';

const myList = new LinkedList();

myList.append('One'); // 0
myList.append('Two'); // 1
myList.append('Three'); // 2
myList.append('Four'); // 3
myList.append('Five'); // 4

console.log('\n#######################\n');
console.log(myList);
console.log('\n#######################\n');
console.log(myList.getSize());
console.log('\n#######################\n');
console.log(myList.getHead());
console.log('\n#######################\n');
console.log(myList.getTail());
console.log('\n#######################\n');
console.log(myList.getNodeAt(2))
console.log('\n#######################\n');
