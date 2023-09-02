// Assignment for this week is: 
// 1 - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse. 
var temperature = 56.5;
var celcius_to_farenheit = (temperature * 9 / 5) + 32;
console.log(celcius_to_farenheit);
var farenheit_to_celcius = (temperature - 32) * 5 / 9;
console.log(farenheit_to_celcius);
// 2 Write a program that calculates the percentage./
var total = 100;
var achieved = 88;
var percentage = (achieved / total) * 100;
console.log("Percentage = ".concat(percentage, "%"));
// 3 - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days. 
var totalDays = 50;
var weeks = Math.floor(totalDays / 7);
var days = totalDays % 7;
console.log("In ".concat(totalDays, ", there are ").concat(weeks, " Week(s) and ").concat(days, " Day(s)."));
// 4 - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount. 
var productPrice = 500;
if (productPrice > 100) {
    var discount = (10 * productPrice) / 100;
    var priceAfterDiscount = productPrice - discount;
    console.log("Product Price = ".concat(priceAfterDiscount));
}
else {
    var discount = (5 * productPrice) / 100;
    var priceAfterDiscount = productPrice - discount;
    console.log("Product Price = ".concat(priceAfterDiscount));
}
// 5 - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult." 
var age = 26;
if (age >= 0 && age <= 12) {
    console.log("Person is a Child.");
}
else if (age >= 13 && age <= 19) {
    console.log("Person is a Teenager.");
}
else {
    console.log("Person is an Adult.");
}
// 6 - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather. 
var environmentTemperature = 22;
if (environmentTemperature <= 15) {
    console.log("It's cold outside please wear warm clothes.");
}
else if (environmentTemperature > 15) {
    console.log("It's hot outside please wear some light clothes.");
}
// 7 - Write a program that checks if the given number is divisible by 3 or 5 or both or not divisible by anyone show output accordingly. 
var givenNmber = 55;
var divisibleBy3 = '';
var divisibleBy5 = '';
if (givenNmber % 3 == 0) {
    divisibleBy3 = 'Divisible';
}
else {
    divisibleBy3 = 'Not Divisible';
}
if (givenNmber % 5 == 0) {
    divisibleBy5 = 'Divisible';
}
else {
    divisibleBy5 = 'Not Divisible';
}
console.log("The given number ".concat(givenNmber, " is ").concat(divisibleBy3, " by 3 and ").concat(divisibleBy5, " by 5."));
// 8 - Write a program that checks if the given year is leap year or not.
var givenYear = 2007;
if (givenYear % 4 == 0) {
    console.log("It's a leap year.");
}
else {
    console.log("Not a leap year.");
}
// 9 - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
var dayOfWeek = 5;
if (dayOfWeek = 1) {
    console.log("Monday");
}
else if (dayOfWeek = 2) {
    console.log("Tuesday");
}
else if (dayOfWeek = 3) {
    console.log("Wednesday");
}
else if (dayOfWeek = 4) {
    console.log("Thursday");
}
else if (dayOfWeek = 5) {
    console.log("Friday");
}
else if (dayOfWeek = 6) {
    console.log("Saturday");
}
else {
    console.log("Sunday");
}
// 10 - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax // Where the tax amount will be calculated by the amount of bill.
var consumedUnits = 460;
var calculatedTax = 0;
var perUnitBill = 0;
var taxPercentage = 0;
var totalBill = 0;
if (consumedUnits > 100) {
    perUnitBill = 20;
    taxPercentage = 10;
}
else if (consumedUnits > 200) {
    perUnitBill = 30;
    taxPercentage = 15;
}
else if (consumedUnits > 500) {
    perUnitBill = 40;
    taxPercentage = 25;
}
totalBill = consumedUnits * perUnitBill;
calculatedTax = (taxPercentage * totalBill) / 100;
totalBill = totalBill + calculatedTax;
console.log("Toatl Bill is ".concat(totalBill));
