// const prolang = ['html', 'css', 'js', 'c', 'py', 'ipynb']

// const value = coding.forEach( (item) => {
    // console.log(item);    
//     return item;
// });

// console.log(value);

const Nums = [1,2,5,6,9,2,5,5,4,7,4]
const numb = Nums.filter( (num) => num > 0) //filter by condition
// console.log(numb);
const New = Nums.filter( (num)=>{
    return num > 4
} )
// console.log(New);

const Books = [
    {title:'Book 1', genre:'Thriller', publish:'1990', edition:'2007'},
    {title:'Book 2', genre:'Non-Fiction', publish:'1992', edition:'2008'},
    {title:'Book 3', genre:'Fiction', publish:'1999', edition:'2007'},
    {title:'Book 4', genre:'Mystry', publish:'1989', edition:'2010'},
    {title:'Book 5', genre:'Science', publish:'2009', edition:'2014'},
    {title:'Book 6', genre:'History', publish:'1997', edition:'2002'},
    {title:'Book 7', genre:'Non-Fiction', publish:'1990', edition:'2018'},
];

const Userbooks = Books.filter((bk) => {
    return bk.publish>=1995 && bk.genre === 'Fiction'
} )
// console.log(Userbooks);

const Numbs = [1,2,3,4,5]
// console.log(Numbs.map( (num) => { return num+10} ));
const newNum = Numbs
.map((num)=>num*10) //first multiply 10
.map((num)=>num+2)  //then add 2
.filter((num)=>num>=30)  //filter ops
console.log(newNum);
