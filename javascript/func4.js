// function uhcd(){
//     let name="ABCD"
//     console.log(this.name);
// }
// uhcd()

const ygis = function(){   //another way of using functions
    let myname="ghghghg"
    console.log(this.myname);
}
// ygis()

const vjhd =()=> {       //arrow function ()=>{}
    let myname="ghghghg"
    console.log(this.myname);
}
// vjhd()

// const addn = (n1, n2)=>{
    // return n1+n2;    // Explicit return
// }
// console.log(addn(79,98));

const addn = (n1, n2) => (n1+n2) //Implicit return
console.log(addn(85,95));