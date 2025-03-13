function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;

    this.changePassword = function(newPassword) {
        this.password = newPassword;
        console.log("Password updated successfully.");
    };

    this.getDetails = function() {
        return `Username: ${this.username}, Email: ${this.email}`;
    };
}

let user1 = new User("Nika", "nika@gmail.com", "password123");


user1.changePassword("newPassword456");

console.log(user1.getDetails()); 
