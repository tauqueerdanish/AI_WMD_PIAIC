"use strict";
let personNameNew = "Tauqueer DANISH";
function toTitleCase(name) {
    return name.toLowerCase().replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
}
let lowerCaseName = personNameNew.toLowerCase();
let upperCaseName = personNameNew.toUpperCase();
let titleCaseName = toTitleCase(personNameNew);
console.log(lowerCaseName);
console.log(upperCaseName);
console.log(titleCaseName);
