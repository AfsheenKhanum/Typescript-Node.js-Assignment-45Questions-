#! /usr/bin/env node

// Store the person's name with whitespace characters
const personNameWithWhitespace: string = "\t\n   Afsheen Khanum   \t\n";

// Print the name with whitespace
console.log("Name with whitespace: '" + personNameWithWhitespace + "'");

// Strip the whitespace and print the name
const strippedName: string = personNameWithWhitespace.trim();
console.log("Stripped name: '" + strippedName + "'");
