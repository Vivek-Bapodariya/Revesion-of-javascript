const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);



function User(userName, loginCount, isLogedIn){
     this.userName = userName;
     this.loginCount= loginCount;
     this.isLogedIn = isLogedIn;

     this.greeting = function() {
        console.log(`Welcome ${this.username}`);
     }

     return this
}


const userOne = new User('vivek', 10, true)
const userTwo = new User('js', 8, false)
console.log(userOne.constructor);
// console.log(userTwo);