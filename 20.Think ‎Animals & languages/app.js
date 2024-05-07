#! /usr/bin/evn node
// Making a Animals Array
var animals = ["Monkey", "Panther", "Gorilla", "Cat", "Wolf"];
console.log("Original order:");
console.log(animals);
console.log("\nAlphabetical order:");
console.log(animals.sort());
console.log("\nReverse alphabetical order:");
console.log(animals.sort().reverse());
console.log("\nReversed order:");
animals.reverse();
console.log(animals);
console.log("\nSorted in alphabetical order:");
animals.sort();
console.log(animals);
console.log("\nSorted in reverse alphabetical order:");
animals.sort().reverse();
console.log(animals);
console.log("\nSorted in reverse alphabetical order:");
animals.sort().reverse();
console.log(animals);
console.log("\nNumber of animals:", animals.length);
console.log("\nNumber of animals:", animals.length);
animals.push("Rabbit");
console.log("\nAfter adding an animal:");
console.log(animals);
animals.splice(animals.indexOf("Gorilla"), 1);
console.log("\nAfter removing an animal:");
console.log(animals);
// Making a Languages Array
var languages = ["Urdu", "English", "Sindhi", "chines"];
// Print the Message of list
console.log("List of languages:");
//Print the Values of Array in the form of List
languages.forEach(function (language) { return console.log(language); });
