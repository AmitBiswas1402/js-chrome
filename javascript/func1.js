// function sayMyName(){
//     console.log("A");
//     console.log("M");
//     console.log("I");
//     console.log("T");
// }
// sayMyName()

function add2no(n1,n2){
    // let result=console.log(n1+n2);
    // console.log("Amit");         //only printed(outout) before result
    return n1+n2
}

sum=add2no(3, 6)
// console.log("Result: ", sum);

function logInUser(username="ABC"){ //ABC is default value
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in` // backtick(`) is locared on left of 1/! ket... I never even pressed that
}

console.log(logInUser());