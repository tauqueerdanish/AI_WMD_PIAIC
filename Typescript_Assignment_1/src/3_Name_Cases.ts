let personNameNew: string = "Tauqueer DANISH"

function toTitleCase(name: string){
    return name.toLowerCase().replace(/(?:^|\s)\w/g, (match) => match.toUpperCase())
}

let lowerCaseName: string = personNameNew.toLowerCase()
let upperCaseName: string = personNameNew.toUpperCase()
let titleCaseName: string = toTitleCase(personNameNew)

console.log(lowerCaseName)
console.log(upperCaseName)
console.log(titleCaseName)