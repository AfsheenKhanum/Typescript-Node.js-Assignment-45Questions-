#! /usr/bin/env node

import { METHODS } from "http";

{}
// define guest name in array:

let guest_list : string [] = ['Naim', 'Ahmed', 'Uzair', 'Ali', 'Sajid'];
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir ' +  guest_list[i] + '\nI would like to invite you to dinner tomorrow. \n Thank You\n');
}
// unable person from guest list:
let not_present : string = guest_list.splice(1, 1)[0];

//add name in guest list (push):
guest_list.push("Shayan Mehmood");

// now print the invitation message:
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir ' + guest_list[i] + '\nI would like to invite you to dinner tomorrow. \n Thank You\n');
}
//METHOD 2
// define guest name in array:
let guestList : string []=["Hani" , "Hunain" , "haram"  , "huzaifa"];

// unable person from guest lit:
let unableAttendent :string = guestList.splice(3,1)[0];

//for Print the Result:
console.log(`${unableAttendent} can't cook food .`);

//add name in guest list (push):
guestList.push("Humna Khan");

// now print the invitation message:
guestList.forEach(guest => {
 console.log(`Dear, ${guest} you are cordially invited to dinner.`)   
});