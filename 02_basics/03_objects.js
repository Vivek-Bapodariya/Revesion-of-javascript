//singleton 
//Object.create

//object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Vivek",
    "full name": "Vivek Bapodariya",
    [mySym]: "myKey1",
    age: 20,
    location: "Amreli",
    email: "vivek@google.com",
    isLogedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);

JsUser.email = "Vivek@chatGPT.com"
//Object.freeze(JsUser)
JsUser.email = "Vivel@microsoft.com"

//console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());