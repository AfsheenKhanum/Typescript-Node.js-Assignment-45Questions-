//solve Q#13 from Assignment 45 according to Question
//Put the different car names in an array:
var carName = ["Toyota Corolla", "Honda Civic", "Ford Mustang"];
//now use loop method:
for (var index = 0; index < carName.length; index++) {
    console.log("I prefer driving a car like a ".concat(carName[index], " Accord when traveling daily."));
}
//now use forEach method:
carName.forEach(function (car) {
    console.log("When it comes to traveling, I enjoy driving vehicles like a ".concat(car, "."));
});
//now use forof loop method:
for (var _i = 0, carName_1 = carName; _i < carName_1.length; _i++) {
    var car = carName_1[_i];
    console.log("".concat(car, " leads my travels."));
}
;
//method 2
var transportation = ["car", "motorcycle", "bicycle"];
transportation.forEach(function (item) { return console.log("I would like to own a ".concat(item, ".")); });
