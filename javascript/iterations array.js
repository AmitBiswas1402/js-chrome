const arr = [1, 2, 3, 4]

for (const n of arr) {
    // console.log(n);    
}

const prog = "Amit Biswas"
for (const words of prog) {
    // console.log(words);    
}

//Maps - another datatype
const map = new Map()
map.set('IN', "Bharat")
map.set('CN', "China")
map.set('JP', "Japan")
map.set('DE', "Germany")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);    
}

//for objects - for in loop
const obj = {          
    'game1': 'COD Mobile',
    'game2': 'BGMI'
}

for (const key in obj) {
    // console.log(`${key} : ${obj[key]}`);  
}

//for arrays - for of loop
const prolang = ['html', 'css', 'js', 'c', 'py', 'ipynb']
for (const key in prolang) {
    console.log(prolang[key]);
}