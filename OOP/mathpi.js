const descr = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descr);

// console.log(Math.PI);

const chai = {
    name: "coffee",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("good tea");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);        
    }
}