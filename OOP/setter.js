class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value 
    }

    get password(){
        return `${this._password}amit`
    }

    set password(value){
        this._password = value
    }
}

const amit = new User("amit@dg.v", "123456")
console.log(amit.password);