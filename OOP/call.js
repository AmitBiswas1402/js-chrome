function SetUsername(username){
    this.username = username;
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(username)

    this.email = email
    this.password = password
}

const chai = new createUser("HGG", "GYYFUFYKY", "68")
console.log(chai);