// Assignment for this week is: 
// 1 - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse. 

let temperature:number = 56.5

let celcius_to_farenheit: number = (temperature * 9/5) + 32
console.log(celcius_to_farenheit)

let farenheit_to_celcius:number = (temperature - 32) * 5/9
console.log(farenheit_to_celcius)



// 2 Write a program that calculates the percentage./

let total: number = 100
let achieved: number = 88

let percentage: number = (achieved/total) * 100
console.log(`Percentage = ${percentage}%`)


// 3 - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days. 

let totalDays: number = 50

let weeks: number = Math.floor(totalDays/7)
let days: number = totalDays % 7

console.log(`In ${totalDays}, there are ${weeks} Week(s) and ${days} Day(s).`)



// 4 - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount. 

let productPrice: number = 500

if (productPrice > 100) {
    let discount: number = (10 * productPrice) / 100
    let priceAfterDiscount: number = productPrice - discount
    console.log(`Product Price = ${priceAfterDiscount}`)  
}

else{
    let discount: number = (5 * productPrice) / 100
    let priceAfterDiscount: number = productPrice - discount
    console.log(`Product Price = ${priceAfterDiscount}`)  
}


// 5 - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult." 

let age: number = 26

if(age >= 0 && age<=12){
    console.log(`Person is a Child.`)
}

else if(age >= 13 && age<=19){
    console.log(`Person is a Teenager.`)
}

else{
    console.log(`Person is an Adult.`)
}


// 6 - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather. 

let environmentTemperature: number = 22

if(environmentTemperature <= 15){
    console.log(`It's cold outside please wear warm clothes.`)
}

else if(environmentTemperature > 15){
    console.log(`It's hot outside please wear some light clothes.`)
}
// 7 - Write a program that checks if the given number is divisible by 3 or 5 or both or not divisible by anyone show output accordingly. 

let givenNmber: number = 55
let divisibleBy3: string = ''
let divisibleBy5: string = ''
if (givenNmber%3  == 0) {
    divisibleBy3 = 'Divisible'
}
else{ divisibleBy3 ='Not Divisible' }

if (givenNmber%5 == 0) {
     divisibleBy5 = 'Divisible'
}
else{ divisibleBy5 ='Not Divisible' }

console.log(`The given number ${givenNmber} is ${divisibleBy3} by 3 and ${divisibleBy5} by 5.`)



// 8 - Write a program that checks if the given year is leap year or not.

let givenYear: number = 2007

if(givenYear%4 == 0){
    console.log(`It's a leap year.`)
}
else{
    console.log(`Not a leap year.`)
}

// 9 - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.

let dayOfWeek: number = 5

if(dayOfWeek == 1){
    console.log(`Monday`)
}
else if(dayOfWeek == 2){
    console.log(`Tuesday`)
}
else if(dayOfWeek == 3){
    console.log(`Wednesday`)
}
else if(dayOfWeek == 4){
    console.log(`Thursday`)
}
else if(dayOfWeek == 5){
    console.log(`Friday`)
}
else if(dayOfWeek == 6){
    console.log(`Saturday`)
}
else{
    console.log(`Sunday`)
}

// 10 - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax // Where the tax amount will be calculated by the amount of bill.

let consumedUnits: number = 460
let calculatedTax: number = 0
let perUnitBill: number = 0 
let taxPercentage: number = 0
let totalBill: number = 0

if(consumedUnits > 100){
    perUnitBill = 20
    taxPercentage = 10
}
else if(consumedUnits > 200){
    perUnitBill = 30
    taxPercentage = 15
}
else if(consumedUnits > 500){
    perUnitBill = 40
    taxPercentage = 25
}

totalBill = consumedUnits * perUnitBill
calculatedTax = (taxPercentage * totalBill) / 100
totalBill = totalBill + calculatedTax
console.log(`Toatl Bill is ${totalBill}`)
