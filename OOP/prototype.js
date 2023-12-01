let superHero = ["Iron Man", "Spider-Man"]

let heroPower = {
    'Iron Man': "technology",
    'Spider-Man': "web",

    getSpiderPower: function(){
        console.log(`Spider power is ${this["Spider-Man"]}`);
    }
}

Object.prototype.amit=function(){
    console.log(`Present in all objects`);
}

Array.prototype.heyAmit=function(){
    console.log(`Hello World`);
}
// heroPower.amit()

// superHero.amit()
// superHero.amit()
// superHero.heyAmit()

const User = {
    name: "sacsa",
    email: "uyfgydg"
}

const Teacher = {
    makeVideo: true
}

const TSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignments: "JS Assignments",
    partTime: true,
    __proto__: TSupport,
}

Teacher.__proto__=User

Object.setPrototypeOf(TSupport, Teacher)

let anotherName = "codes  "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherName.trueLength()