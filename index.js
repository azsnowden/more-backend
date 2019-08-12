// const catSound = require("./cat").cat;
// const bagOfCats = re
// console.log(catSound.cat)
// console.log(require("./cat").cat);
// console.log(require('./cat').cat);
// console.log({
//     cat: catSaysWhat,
//     kitten: kittenSaysWhat}.cat)
// console.log("purrerr")
// const {cat, kitten} = require("./cat");
// // console.log(catSound.cat);
// console.log(cat);

// const hoo = require("./owl")
const greet = require("./greet")
// const bark = require("./dog")
// const roar = require("./tiger.js")
const bark = require("./dog")
// const woof = bark();
// greet(woof);
greet(bark, "Tony");
// greet(hoo); 

function helloWorld(){
    console.log("1. hello World")
}

console.log("1. about to call setTimeout")
setTimeout(helloWorld, 1000);
console.log("2. you called setTIMEout");