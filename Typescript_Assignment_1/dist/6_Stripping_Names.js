"use strict";
let nameWithSpaces = "    Tauqueer \n\tDanish  .";
console.log(nameWithSpaces);
let strippedName = nameWithSpaces.replace(/\s+/g, ' ');
console.log(strippedName);
