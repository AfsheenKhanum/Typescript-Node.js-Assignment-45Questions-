#! /usr/bin/env node
function make_shirt(size, message) {
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\"  printed on it."));
}
make_shirt("medium", "Sky is the limit");
function make_shirts(size, text) {
    console.log("Creating a ".concat(size, " shirt with the message:  ").concat(text));
}
;
make_shirts("large", "this is large");
make_shirts("medium", "this is medium");
make_shirts("small", "this is large");
