class User {
    constructor(username){
        this.username = username
    }
    
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("Amit", "gmail", "545")

chai.addCourse()
const spices = new User("Spicy")

spices.logMe()

console.log(chai instanceof User);