#! /user/bin/evn node
// They think of something you could store in a TypeScript Object[Symbol].
//  Write a program that creates Objects containing these items.
var containingObjectItems = {
    "laptop": {
        name: "LENOVO",
        price: 100000,
        discruption: "High processor, long bettry timing and The most flexible operating system, Windows 11,"
    },
    "mobile": {
        name: "TECNO POVIOUR 4",
        price: 30000,
        fetures: "In expensive mobile phones,along with all the latest features, the battery timing is 48 hrs."
    },
    "vehicle": {
        name: "BMW iX 2024",
        price: 54000000,
        features: "The BMW iX is equipped with a range of advanced safety features, including adaptive cruise control,",
        color: "Oxide Grey Metallic"
    },
};
console.log(containingObjectItems);
// Create two Objects
var book = {
    Name: 'The Silk Road and Beyond',
    Author: "Professor Iftikhar H. Malik",
    Price: 2000
};
console.log("book name ".concat(book.Name, " , price RS").concat(book.Price));
