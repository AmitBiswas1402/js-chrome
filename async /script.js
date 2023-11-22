// let ans = new Promise((res, rej) =>{
//     let n = Math.floor(Math.random()*10)

//     if(n < 5){
//         return res();
//     }
//     else{
//         return rej();
//     }
// })

// ans.then(function(){
//     console.log('below');
// })
// .catch(function(){
//     console.log('above');
// })

// let ans = new Promise((res, rej) =>{
//     return res("Return Home")
// })

// let p2 = ans.then(function(data){
//     console.log(data);
//     return new Promise((res, rej) =>{
//         return res("Open gate and get inside");
//     })
// })

// let p3 = p2.then(function (data) {
//     console.log(data);
//     return new Promise(function (res, rej) {
//         return res("Cook Food and eat")
//     })
// })

// var p4 = p3.then(function (data){
//     console.log(data);
// })

async function abcd(){
    let raw = await fetch(`https://api.github.com`)
    .then(function(raw){
        return raw.json();
    })
    .then(function(data){
        console.log(data);
    })
}
abcd()
