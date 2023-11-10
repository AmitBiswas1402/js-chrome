const myNum = [1,8,9]

// const myTotal = myNum.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and current value: ${currval}`);
//     return acc + currval
// }, 3)

const total = myNum.reduce((acc, curr)=>acc+curr,0)

// console.log(total);

const shoppe=[
    {
        item: "AI for Everyone",
        price: 5,
    },
    {
        item: "DevOps KodeKloud",
        price: 10,
    },
    {
        item: "Open Source Web Dev",
        price: 10,
    }
]

const totalpay = shoppe.reduce((acc, item)=> acc + item.price, 0)

console.log(totalpay);