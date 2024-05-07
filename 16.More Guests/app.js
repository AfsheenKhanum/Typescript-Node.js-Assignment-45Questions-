#! /usr/bin/env node
//put the different name in array :
var guestName = ['Naim', 'Ahmed', 'Uzair', 'Ali', 'Sajid'];
console.log("\"Hey! we just found a bigger dinner table and would love for you to join us for dinner!\"");
//add new guest to the begning:
guestName.unshift("Huzaifa");
// add new name to between:
guestName.splice(Math.floor(guestName.length / 2), 0, "Shahzad Ullah");
//add new guest to yhe last:
guestName.push("Farhad Ullah");
//print the messaga for each person:
guestName.forEach(function (guest) {
    console.log("Dear! ".concat(guest, " yor all are cordialy invited to dinner."));
});
