MCU_Heroes = ["Iron Man", "Capatian America", "Thor"]
DCEU_Heroes = ["Super Man", "Bat Man", "Wonder Woman"]

// MCU_Heroes.concat(DCEU_Heroes)
// console.log(MCU_Heroes);

const SuperHeroes = MCU_Heroes.concat(DCEU_Heroes)
// console.log(SuperHeroes); // concat 2 strings

const allSuperHeroes = [...MCU_Heroes, ...DCEU_Heroes]
// console.log(allSuperHeroes);

const array = [[1,2],5,[3,[6,5]]]
const arr = array.flat(Infinity)
// console.log(arr); //spread arrays nested in another arrays into one array

// console.log(Array.from("AmitBiswas")); //makes string an array not dictionary

var f= 6556
var g= 6556
var h= 6556
console.log(Array.of(f, g, h)); //another way of concatination