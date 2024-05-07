#! /usr/bin/env node
//use variable Suffix 
let numbers: number[]=[1,2,3,4,5,6,7,8,9,10];
numbers.forEach(number=>{
    let Suffix="th";
    if (number ===1){
        Suffix="st";
    }else if (number===2){
        Suffix="nd";
    }else if (number===3){
        Suffix="rd";
    }
console.log(`${number}${Suffix}`);
});


//use variable ordinalEnding
let numbers1: number[]=[1,2,3,4,5,6,7,8,9];
for(let num of numbers1){
    let ordinalEnding:string;
    if(num===1){
        ordinalEnding="st"
    }else if(num===2){
        ordinalEnding="nd"
    }else if(num===3){
        ordinalEnding="rd"
    }else {
        ordinalEnding="th"
    }
console.log(`${num}${ordinalEnding}`)    
};
//both results same print 