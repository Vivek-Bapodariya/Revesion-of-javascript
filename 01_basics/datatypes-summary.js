// Primitive

// 7 Tyoe : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLogedIn = false
const outsideTemp = null
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id === anotherId);

//const bigNumber = 5278969379289247598276597n




//Reference (Non Primitive)

//Array, Object, Function

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Vivek",
    age: "20"
}

let myFunction  = function(){
    console.log("Hello world");
}

console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3