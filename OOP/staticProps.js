class User {
    constructor(username){
        this.username = username
    }
    
    logMe(){
        console.log(`EMAIL is ${this.email}`);
    }

    static craeteId(){
        return `123`;
    }
}

const amit = new User("agxdvf")

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const masterji = new Teacher("masterji", "masterji@@")
masterji.logMe()