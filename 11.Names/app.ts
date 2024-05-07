#! /usr/bin/env node

//Question 11 solution

// define an array of names
let names:string[]=["Naim" , "Ahmed" , "Uzair" , "Ali" , "Sajid"];
console.log(names);
//Each name appears on a single line followed by a comma at the terminal 
//['Naim' , 'Ahmed' ,  'Uzair' , 'Ali' , 'Sajid' ]

// According to the question, it is not correct
//, so we try using the differnt method,

//now we use Loop Methood
for (let i = 0; i <names.length; i++ ){
    console.log(names [i]);
} 
//Now each name is appearing in a separate line in the terminal.
//Naim     
//Ahmed   
//Uzair    
//Ali       
//Sajid

//Now let's see how to use the "forEach" method.

names.forEach(friends => {
console.log(friends);    
});
//Now each name is appearing in a separate line in the terminal.
//Naim    
//Ahmed   
//Uzair   
//Ali
//Sajid

//Now let's see how to use the "for ofloop" method.
for (const friendsName of names) {
    console.log(friendsName)
};
//Now each name is appearing in a separate line in the terminal.
//Naim    
//Ahmed   
//Uzair   
//Ali
//Sajid

// method #2
// Names
let names1: string[] = ["Naim Mehmood" , "Ahmed Sajid" , "Uzair Sajid" , "Shayan Ali" , "Sajid Mehmood"];
names1.forEach(names1 => console.log(names1));
