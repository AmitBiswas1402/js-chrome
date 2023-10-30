let a=554
if (true){
    let a=54
    // console.log("Inner:", a);  // Block Scope
}
// console.log(a);  // Global Scope

function one(){
    const username="amit"

    function two(){
        const website="yt"
        console.log(username);
    }
    // console.log(website); //outside of scope{}

    // two() //after commenting out above now two() will execute
}
one() //when two() is commented the one() is not executed also