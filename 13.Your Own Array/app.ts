#! /usr/bin/env node

//solve Q#13 from Assignment 45 according to Question

//Put the different car names in an array:
let carName : string[]= ["Toyota Corolla" , "Honda Civic" , "Ford Mustang" ];

//now use loop method:
 for ( let index =0; index <carName.length; index++){
    console.log(`I prefer driving a car like a ${carName [index]} Accord when traveling daily.`)
 }

 //now use forEach method:
 carName.forEach(car => {
    console.log(`When it comes to traveling, I enjoy driving vehicles like a ${car}.`);
});

//now use forof loop method:
for (const car of carName) {
    console.log(`${car} leads my travels.`)};

    //method 2

let transportation: string[] = ["car", "motorcycle", "bicycle"];
transportation.forEach(item => console.log(`I would like to own a ${item}.`));