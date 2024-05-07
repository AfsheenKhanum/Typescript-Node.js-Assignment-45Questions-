#! /usr/bin/env node
//version that passes
var alien_color = "green";
if (alien_color === "green") {
    console.log("player just earned 5 point");
}
//version that fails (no output)
alien_color = "yellow";
if (alien_color === "green") {
    console.log("player just earned 5 point");
}
;
alien_color = "red";
if (alien_color === "green") {
    console.log("player just earned 5 point!");
}
;
//no output because the condition is false
