#! /usr/bin/env node
var placesToVisit = ["China", "Bahrain", "Bhutan", "Pakistan", "Denmark"];
// Print array in its original order.
console.log("original order:", placesToVisit);
// Print array in alphabetical order without modifying the actual list:
console.log("Alphabetical order:", placesToVisit.slice().sort());
// Show array is still in its original order by printing it:
console.log("original order:", placesToVisit);
// Print array in reverse alphabetical order without changing the order of the original list.
console.log("reverse order:", placesToVisit.slice().sort().reverse());
// Array is still in its original order by printing it again.
console.log("original order:", placesToVisit);
// Sort array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("alphabetical order changed:");
placesToVisit.sort();
console.log(placesToVisit);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("original order:", placesToVisit.reverse());
console.log(placesToVisit);
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("alphabetical order changed:", placesToVisit.sort().reverse());
console.log(placesToVisit);
