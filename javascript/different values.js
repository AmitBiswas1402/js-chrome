// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Stack = (Primitive), Heap = (Non-Primitive)
let Name = "AmitBiswas"

let homeName = Name
Name = "Anshu"

// console.log(Name) // Storing values in stack gives a copy
// console.log(homeName)

let user = {
    email: "user@g.com",
    id: "5468"
}

let anotherUser = user // Storing values in heaps gives a reference of original value
anotherUser.id = "8979" 

console.log(user.id)
console.log(anotherUser.id)