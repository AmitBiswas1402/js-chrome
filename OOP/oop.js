const user={
    username: "amit",
    loginCount: 10,
    signedIn: true,

    getUserDetails: function(){
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }    
}

console.log(user.username);
console.log(user.getUserDetails());

function User(username, loginCount, signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this;
}

const userOne = new user("Amit", 12, true)
const userTwo = new user("ABC", 11, false)

console.log(userOne);
// console.log(userTwo);