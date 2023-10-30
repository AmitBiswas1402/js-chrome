if (true){
    const username="amit"

    if (username === "amit"){
        const website="yt"
        console.log(username+website);
    }
    // console.log(website); //won't execute because outside of scope{}
}
// console.log(username); //same outside of scope{}

//function holding technique 1
function one(num){
    return num+1
}

console.log(one(5))

//function holding technique 2
const two=function(num){
    return num+2
}

console.log(two(5))


