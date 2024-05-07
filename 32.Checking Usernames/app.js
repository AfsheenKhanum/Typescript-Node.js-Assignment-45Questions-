#! /usr/bin/env node
var current_users = ["user1", "admin", "user3", "user4", "user5"];
var new_users = ["user1", "user6", "user7", "admin", "user9"];
new_users.forEach(function (new_user) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === new_user.toLowerCase(); })) {
        console.log("".concat(new_user, " will need to enter a new username."));
    }
    else {
        console.log("".concat(new_user, " is available"));
    }
});
//Excercise No 32
var current_users1 = ["Naim", "Uzair", "Ali", "Shayan", "Sajid", "Hassan"];
var new_users1 = ["Naim", "Uzair", "Ali", "Shahzad", "Farhad"];
new_users1.forEach(function (new_users1) {
    var lowercase = new_users1.toLowerCase();
    if (current_users1.map(function (c_user) { return c_user.toLowerCase(); }).includes(lowercase)) {
        console.log("The User Name ".concat(new_users1, " is not available. Please write a different username."));
    }
    else {
        console.log("The user name ".concat(new_users1, " is available"));
    }
});
