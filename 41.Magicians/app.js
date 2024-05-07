#! /usr/bin/env node
var magicians = ["wisely", "Darren Brown", "Criss Angel", "David Copperfield"];
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
show_magicians(magicians);
