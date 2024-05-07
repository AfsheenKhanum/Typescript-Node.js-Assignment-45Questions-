#! /usr/bin/env node 

function storecarinfo(manufacturer:string,modelName:string,...extraOptions:{[key:string]:any}[]):
 Object {
    const carinfo ={
manufacturer,
modelName,
...Object.assign({},...extraOptions)
 }
 return carinfo;
 }
let answer= storecarinfo('hyundai tucson','XRT',{color:'Dark Knight Grey'},{features:['navigation','engine problems and excessive clutch wear']});
console.log (answer);


