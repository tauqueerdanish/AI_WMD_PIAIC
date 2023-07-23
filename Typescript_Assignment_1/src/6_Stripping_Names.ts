let nameWithSpaces: string = "    Tauqueer \n\tDanish  ."
console.log(nameWithSpaces)

// let nameWithoutSpaces: string = nameWithSpaces.trim()
let strippedName: string = nameWithSpaces.replace(/\s+/g, ' ')

console.log(strippedName)