// saved some names an array:
var guestList = [
    "Naim",
    "Ahmed",
    "Uzair",
    "Ali",
    "Sajid",
];
//now use forEach method:
guestList.forEach(function (guest) {
    console.log("\"Dear ".concat(guest, ",\" I would be honored to have you join me for dinner, your presence would make the evening truly special.\n  "));
});
//now use for map method:
var invitetion = guestList.map(function (guest) { return "Dear ".concat(guest, ",I would be honored to have you join me for dinner, your presence would make the evening truly special.\n  "); });
console.log(invitetion);
//now use forEach method 2:
var guests = ["Naim Mehmood", "Ahmed Uzair", "Shayan Ali"];
guests.forEach(function (guest) { return console.log("Dear ".concat(guest, ", you are invited to dinner!")); });
