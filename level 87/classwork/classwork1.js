function User(name, lastName, phoneNumber, email, password, confirmPassword){
    this.name = name;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;

    this.getIntroduction = function(){
        return "My name is ${this.name} and my last name is ${this.lastName}. My phone number is ${this.phoneNumber} and my email is ${this.email} my password is ${this.password} and my confirm password is ${this.confirmPassword}"


    
    }
}

const user1 = new User("ნიკა", "ჭყოიძე", "558187758", "nickchkoidze@gmail.com", "123123123", "123123123");

const user2 = new User("name", "lastname", "phone", "email", "password", "confirmpassword");

console.log(user1.getIntroduction());
console.log(user2.getIntroduction());