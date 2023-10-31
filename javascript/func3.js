const user = {
    username: "Amit",
    price: 66,

    welcomeMessage: function(){
        console.log((`${this.username}, welcome`));
        console.log(this);
    }
}
user.welcomeMessage()
user.username="ABC"
user.welcomeMessage()
// console.log(this);