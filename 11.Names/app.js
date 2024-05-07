//Question 11 solution
// define an array of names
var names = ["Naim", "Ahmed", "Uzair", "Ali", "Sajid"];
console.log(names);
//Each name appears on a single line followed by a comma at the terminal 
//['Naim' , 'Ahmed' ,  'Uzair' , 'Ali' , 'Sajid' ]
// According to the question, it is not correct
//, so we try using the differnt method,
//now we use Loop Methood
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Now each name is appearing in a separate line in the terminal.
//Naim     
//Ahmed   
//Uzair    
//Ali       
//Sajid
//Now let's see how to use the "forEach" method.
names.forEach(function (friends) {
    console.log(friends);
});
//Now each name is appearing in a separate line in the terminal.
//Naim    
//Ahmed   
//Uzair   
//Ali
//Sajid
//Now let's see how to use the "for ofloop" method.
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendsName = names_1[_i];
    console.log(friendsName);
}
;
//Now each name is appearing in a separate line in the terminal.
//Naim    
//Ahmed   
//Uzair   
//Ali
//Sajid
// method #2
// Names
var names1 = ["Naim Mehmood", "Ahmed Sajid", "Uzair Sajid", "Shayan Ali", "Sajid Mehmood"];
names1.forEach(function (names1) { return console.log(names1); });
