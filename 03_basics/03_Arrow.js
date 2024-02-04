const user = {
    username: "Vivek",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     const username = "Vivek"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//         const username = "Vivek"
//         console.log(this.username);
//     }

// const chai = () => {
//     const username = "Vivek"
//     console.log(this);
// }

// This function name is: Impleset return

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } 

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Vivek"})
    
console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()