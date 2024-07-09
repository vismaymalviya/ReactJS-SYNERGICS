let word1 = 'Vismay';
let word2 = 'Malviya';
const fullName = `${word1} ${word2}`;
console.log(fullName);

let num1 = 1;
let num2 = 1;
const totalNum = `${num1 + num2} ${word1}`;
console.log(totalNum);

let example1 = 'Hello \n' + 'World';
console.log(example1);

let example2 = `${word1}
${word2}`;
console.log(example2)

const personalInfo = {
    firstName: 'Vismay',
    lastName: 'Malviya',
    city: 'Mumbai',
    state: 'Maharashtra',
    code: 400068
};

const {firstName: fn, lastName: ln, city} = personalInfo;
console.log(`${fn} ${ln} ${city}`);