/*
  This program illustrates the string reverse functionality with and without the inbuilt reverse method.
  added one bonus way of reversing a string in single line. (ES6 syntax)
*/
function reverse(str) {
  
  //check input
  if(!str || str.length < 2 || typeof str != 'string'){
    
      return 'This is not a valid string';
  }
  
  const reversedString = [];
  let totalItems = str.length-1
  
  for(let i = totalItems ; i >= 0; i--) {
    
    reversedString.push(str[i]);
  }
  
  return reversedString.join('');
}
console.log(reverse('Hi My name is manish'));
console.log(reverse(''));
console.log(reverse('H'));
console.log(reverse(123));


//using Inbuilt method.

function reverseInbuilt(str) {
  
  
  return str.split('').reverse().join('');
}

console.log(reverseInbuilt('Hello Nepal'));


//one line function using ES6

const reverse3 = str => str.split('').reverse().join('');
console.log(reverse3('Hello california'));
