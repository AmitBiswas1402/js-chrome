const XUser = {}

XUser.id="123abc"
XUser.name="STU"
XUser.isLoggedIn=true

// console.log(XUser);

const regularUser={
    email:"abc@abc.com",
    fullname:{
        userFullName:{
            firstname:"Amit",
            lastname:"Biswas",
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstname); //one by one the object opens up
const obj1={1: "a", 2: "b"}
const obj2={3: "c", 4: "d"}
const obj3=Object.assign({}, obj1, obj2) //assign objects through assign
// console.log(obj3);
// console.log(obj3);

const users=[ // objects inside objects
    {
        id:1,
        email:"a@mail.com",
    },
    {
        id:1,
        email:"a@mail.com",
    },
    {
        id:1,
        email:"a@mail.com",
    },
]

users[1].email
console.log(users);

console.log(Object.keys(users)); //keys
console.log(Object.values(users)); //values
console.log(Object.entries(users)); //entries
// is the key present
console.log(XUser.hasOwnProperty('isLoggedIn'));