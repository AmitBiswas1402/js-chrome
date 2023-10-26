const Arr = [0, 1, 2, 3, 4, 5]
// console.log(Arr[3]);

// Arr.push(6)
// console.log(Arr);
// Arr.pop()
// Arr.unshift(9)
// Arr.shift()
// console.log(Arr);

// Question Methods
// console.log(Arr.includes(6));
// console.log(Arr.indexOf(4));

const Arr2 = Arr.join() //joins array to form string
// console.log(Arr);
// console.log(Arr2);

console.log("A ", Arr);
const ar = Arr.slice(1,3) //doesn't manipulate the original array and copy the sliced part
console.log("B ", ar);
const ar2 = Arr.splice(1,3) //manipulate the original array and gives sliced array of 2 parts
console.log("C ", Arr);
console.log("D ", ar2);