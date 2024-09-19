
let age: number =25
for (let i=0; i <= age; i++){
    console.log(i);
}
if(age > 18){
    console.log("You can enter");
}else {
    console.log("go back and wait");
}
let score: number = 0;
if (score !== 0){
    console.log("Score is available.");
}
if (score){
    console.log("Score is evaluated as truthy.");
}else {
    console.log("Score is not evaluated.");
}

let username: string = "";
if (username){
    console.log("Username is " + username);
}
if (!username) {
    console.log('Username is evaluated as falsy.');
} else {
    console.log('Username is evaluated as truthy.');
}

let isAdmin: boolean = false;
if (isAdmin) {
    console.log('isAdmin is evaluated as truthy.');
} else {
    console.log('isAdmin is evaluated as falsy.');
}
if (!isAdmin) {
    console.log('isAdmin is false.');
}

let n:number = 5;
for (let i=1; i <= n; i++){
    let spaces = ' '.repeat(n - i);
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
}
for (let i=1; i <= n; i++){
    let spaces = ' '.repeat(4);
    let stars = '*';
    console.log(spaces + stars);
}
const num=[ 3, 8, 9, 10, 15 ];
const newNum =num.map(num => num * 2 );
console.log(num);
console.log(newNum);

const words =["hello", "hi", "Hallochen", "Hey"];
console.log(words);

//Create an array of words. Use the '.filter' function to select only the words that are longer than 5 letters.
const newWords = words.filter(word => word.length > 5 );
console.log(newWords);

//Create an array of numbers. Use the '.reduce' function to calculate the sum of all the numbers in the array.
const reduce = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(reduce);

//Create an array of numbers. Use the '.some' function to check if at least one number is greater than 10.
const some= num.some(num => num > 10);
console.log(some);

const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];

//Sort these numbers in descending order.
const sortDesNumbers = list.sort((a, b) => b - a);
console.log(sortDesNumbers);

//Square these numbers.
const squareNumbers = list.map(num => num * num);
console.log(squareNumbers);

//Remove the lowest two numbers and the highest 4 numbers from the list.
const removeNumbers = list.slice(4, -2);
console.log(removeNumbers);

//Remove all numbers that are divisible by 4.
const removeNumberByDiv = list.filter(num => num %4 !==0);
console.log(removeNumberByDiv);

//Add up all the numbers.
const sum = list.reduce((num, num1) => num +num1);
console.log(sum);
