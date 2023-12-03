class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return this.password.toUpperCase()
    }

    set password(value){
        this.password = value.toUpperCase()
    }
}

const amit = new User("amit@dg.v", "123456")
console.log(amit.password);