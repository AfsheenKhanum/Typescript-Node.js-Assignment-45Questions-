#! /usr/bin/env node
{ }
// define guest name in array:
var guest_list = ['Naim', 'Ahmed', 'Uzair', 'Ali', 'Sajid'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir ' + guest_list[i] + '\nI would like to invite you to dinner tomorrow. \n Thank You\n');
}
// unable person from guest list:
var not_present = guest_list.splice(1, 1)[0];
//add name in guest list (push):
guest_list.push("Shayan Mehmood");
// now print the invitation message:
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir ' + guest_list[i] + '\nI would like to invite you to dinner tomorrow. \n Thank You\n');
}
// define guest name in array:
var guestList = ["Hani", "Hunain", "haram", "huzaifa"];
// unable person from guest lit:
var unableAttendent = guestList.splice(3, 1)[0];
//for Print the Result:
console.log("".concat(unableAttendent, " can't cook food ."));
//add name in guest list (push):
guestList.push("Humna Khan");
// now print the invitation message:
guestList.forEach(function (guest) {
    console.log("Dear, ".concat(guest, " you are cordially invited to dinner."));
});
