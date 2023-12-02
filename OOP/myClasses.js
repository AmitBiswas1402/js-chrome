// class User  {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("names", "emails@duffy", "454")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const kaffe = new User("names", "emails@duffy", "454")

console.log(kaffe.encryptPassword());
// console.log(kaffe.changeUsername());

