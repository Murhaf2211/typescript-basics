
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
const newWords = words.filter(word => word.length > 5 );
console.log(newWords);

const reduce = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(reduce);

const some= num.some(num => num > 10);
console.log(some);