const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Dont have user Email");
}

// falsy value

// false, 0, -0, BigInt 0n, null, undefined, NaN

// truthy value

// "0", "false", " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


//Nullish Coalescing Operator (??): null undefind

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrise = 100

iceTeaPrise >= 80 ? console.log("less than 80") : console.log("more than 80");