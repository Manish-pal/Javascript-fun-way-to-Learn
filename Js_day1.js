// string, number, Boolean, Null, undefined

const studentName = 'Manish';
console.log(typeOf studetName)



//Strings
const greeting = "Hello World";
console.log(greeting.length);  //---> includes Length with space


console.log(greeting.substring(0,5));   //----> starting position i.e 0 then till what number you want to get 5 = Hello

console.log(greeting.substring(0,5).toUpperCase());  //---> method chaining converts the string to UPPERCASE


const greeting = "Hello world this is my first JS string";

greeting.split(" ");
//o/p["Hello", "world", "this", "is", "my", "first", "program"]

greeting.split(" ").length
//7

greeting.slice(4,15)    //--> Sliced the string starting from 4th index till 15th index
//"o world thi"