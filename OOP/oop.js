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