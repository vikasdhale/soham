let myDate = new Date()

console.log(myDate.toString());

console.log(myDate.toDateString()) // TUE AUG 20  2024

console.log(myDate.toISOString());

console.log(myDate.toJSON());

console.log(typeof myDate) // date is a object

let myCreateDate = new Date(2023, 0, 23)
console.log(myCreateDate.toDateString());//Mon jan  23 2023
console.log(myCreateDate.toLocaleString());