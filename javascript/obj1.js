//object literal is variable={
//
//}

const Symb = Symbol("Key1")

const jsUser={
    name:"ABC",
    "full name":"ABC DEG",
    [Symb]: "keys1",
    age:23,
    loaction:"XYZ",
    email:"abc@mail.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"]
}

// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser.Symb); //sometimes dots or not are used

// jsUser.email="abc@email.com"
// console.log(jsUser);
// Object.freeze(jsUser) /object freezes for any changes further
// jsUser.email="abc@email.com"
// console.log(jsUser);

jsUser.greets=function(){
    console.log("hey JS User");
}

console.log(jsUser.greets);