#! /urs/bin/env node 

let Transports:string[]=["Bike","Boat","Aeroplane"];

//international error because index 4 is out of bounds
console.log(Transports[4]);

//correcting the error by accessing a valid index
Transports[2]="Boat";

console.log(Transports[2]);
