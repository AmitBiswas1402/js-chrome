// function multipleBuy10(num){
//     return num*5
// }

// multipleBuy10.power=2

// console.log(multipleBuy10(5));
// console.log(multipleBuy10.power);
// console.log(multipleBuy10.prototype);

function createUser(username, score){
    this.username=username;
    this.score=score;
}

createUser.prototype.increment = function(){
    this.score++
}

const chai=new createUser("chai", 25)
const tea=createUser("tea", 250)

myArray.prototype.map()