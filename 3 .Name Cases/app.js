// Store the person's name in a variable
var personName = "Afsheen Khanum";
// Print the name in lowercase
console.log("Lowercase: " + personName.toLowerCase());
// Print the name in uppercase
console.log("Uppercase: " + personName.toUpperCase());
// Print the name in titlecase
console.log("Titlecase: " + toTitleCase(personName));
// Function to convert string to titlecase
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
