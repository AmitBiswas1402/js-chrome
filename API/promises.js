// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log(('Async task is complete'));
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task");
//         resolve()
//     },1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "ABC", email: "sdfdfdgv"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "uvguy", password: "5848"})
        }else{
            reject('ERROR')
        }
    }, 1000)
})

promiseFour.then((user)=>{
    
})