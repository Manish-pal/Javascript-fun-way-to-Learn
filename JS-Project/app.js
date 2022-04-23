// sets don't store duplicate values
/*
const students = new Set(['john','Aragon', 'Tanya']);
students.add('Manish');
console.log(students);

console.log(students.has('Punit'));

console.log(students.has('manish'));  // it's case sensitive

console.log(students.has('Manish'));

students.delete('john');

console.log(students);

const studentArr = Array.from(students);
console.log('Array is ', studentArr);


//clear out all the values
students.clear();
console.log(students);

*/
//Maps in JS
const sections = new Map([['A2001', ['John', 'Morbius']]]);
console.log(sections);

const students = sections.get('A2001');
students.push('Lin fong');
console.log(students);


//console.log(sections);

sections.set('B2001', ['Emily', 'Rebecca', 'Julia']);
console.log(sections);

console.log(sections.keys());

console.log(sections.values());
console.log(sections.entries());

