

function sayMyName() {
    console.log("v");
    console.log("i");
    console.log("v");
    console.log("e");
    console.log("k");
}

//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

//console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if (!username) {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Vivek"));
// console.log(loginUserMessage("Vivek"));

function calculateCartPrise(val1, val2, ...num1) {
   return num1
}

// console.log(calculateCartPrise(200, 400, 500, 2000));

const user = {
    username: "Vivek",
    price: 199
}

function handleObject(anyObject){
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: "399"

})

const myNewArray = [200, 400, 100, 600]

function returnSecoundValue(getArray){
         return getArray[1]
}

// console.log(returnSecoundValue(myNewArray));
console.log(returnSecoundValue([200, 400, 500, 1000]));
