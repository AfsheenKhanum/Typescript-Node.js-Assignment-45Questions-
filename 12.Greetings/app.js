//Question 12 solution
// define an array of names
var names = ["Naim", "Ahmed", "Uzair", "Ali", "Sajid"];
//we use Loop Methood
for (var i = 0; i < names.length; i++) {
    console.log("Assalam-u-Alaikum ".concat(names[i], "! How are you?"));
}
//we use the "forEach" method.
names.forEach(function (friends) {
    console.log("Assalam-u-Alaikum ".concat(friends, "!what are you doing?"));
});
//we use the "for ofloop" method.
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendsName = names_1[_i];
    console.log("Assalam-u-Alaikum ".concat(friendsName, "!Have a nice day."));
}
;
//With this development we can display the same message with a different name
// method2
names.forEach(function (name) { return console.log("Hello ".concat(name, "!")); });
