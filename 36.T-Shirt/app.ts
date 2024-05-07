#! /usr/bin/env node

function make_shirt(size:string,message:string)
 {
    console.log(`Making a ${size} t-shirt with the message "${message}"  printed on it.`);
 }
 make_shirt("medium","Sky is the limit");

//2nd method

 function make_shirts(size:string,text:string){

    console.log(`Creating a ${size} T-shirt with the message:  ${text}`)
};
make_shirts(`large`,`this is large`);
make_shirts(`medium`,`this is medium`);
make_shirts(`small`,`this is large`);
