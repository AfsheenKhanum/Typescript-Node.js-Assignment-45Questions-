#! /usr/bin/env node
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function (number) {
    var Suffix = "th";
    if (number === 1) {
        Suffix = "st";
    }
    else if (number === 2) {
        Suffix = "nd";
    }
    else if (number === 3) {
        Suffix = "rd";
    }
    console.log("".concat(number).concat(Suffix));
});
var numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers1_1 = numbers1; _i < numbers1_1.length; _i++) {
    var num = numbers1_1[_i];
    var ordinalEnding = void 0;
    if (num === 1) {
        ordinalEnding = "st";
    }
    else if (num === 2) {
        ordinalEnding = "nd";
    }
    else if (num === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(num).concat(ordinalEnding));
}
;
