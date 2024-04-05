import LinkedList from './LinkedList.js';

const myList = new LinkedList();

myList.append('First'); // 0
myList.append('Second'); // 1
myList.append('Third'); // 2
myList.append('Four'); // 3



console.log('\n######## SIZE ##########\n');
console.log(myList.size());
console.log('\n##### LINKED LIST ######\n');
console.log(myList);
console.log('\n####### HEAD ###########\n');
console.log(myList.head());
console.log('\n######## TAIL ############\n');
console.log(myList.tail());
console.log('\n##### NODE AT INDEX ######\n');
console.log(myList.at(3));
console.log('\n########## POP ###########\n');
console.log(myList.pop());
console.log(myList.pop());
console.log(myList.pop());
console.log(myList.pop());
console.log(myList.size());
console.log(myList);
myList.append('Mike');
myList.append('Sarah');
myList.append('Lewis');
myList.prepend('Lara');
console.log(myList);
console.log('\n#### CONTAINS A VALUE ###\n');
console.log(myList.contains('Other'));
console.log('\n####### FIND VALUE ######\n');
console.log(myList.find('Lara'));
console.log('\n####### TO STRING #######\n');
console.log(myList.toString());
console.log('\n#######################\n'); 

/* console.log('\n#######################\n'); */
