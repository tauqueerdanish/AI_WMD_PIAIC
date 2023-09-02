// 1 Write a program that uses filter to remove all negative numbers from an array of numbers
function removeNegativeNumbers(numbers) {
    return numbers.filter(function (number) { return number >= 0; });
}
var numbArray = [1, -2, 3, -4, 5, -6];
var positiveNumbersArray = removeNegativeNumbers(numbArray);
console.log('Array with negative numbers removed:', positiveNumbersArray);
// 2 Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
var originalArray = [1, 2, 3, 4, 5];
var doubledArray = originalArray.map(function (number) { return number * 2; });
console.log('Original array:', originalArray);
console.log('Array with each number multiplied by 2:', doubledArray);
// 3 Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
var fruitsArray = ["apple", "banana", "cherry", "date", "grape"];
var longFruitsArray = fruitsArray.filter(function (fruit) { return fruit.length > 5; });
console.log('Original array:', fruitsArray);
console.log('Fruits with more than 5 characters:', longFruitsArray);
// 4 Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var squaresOfEvenNumbersArray = numbersArray
    .filter(function (number) { return number % 2 === 0; }) // Filter even numbers
    .map(function (evenNumber) { return Math.pow(evenNumber, 2); }); // Square each even number
console.log('Original array:', numbersArray);
console.log('Squares of even numbers:', squaresOfEvenNumbersArray);
// 5 Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
var celsiusTemperatures = [0, 10, 20, 30, 40];
var fahrenheitTemperatures = celsiusTemperatures.map(function (celsius) { return (celsius * 9 / 5) + 32; });
console.log('Celsius Temperatures:', celsiusTemperatures);
console.log('Fahrenheit Temperatures:', fahrenheitTemperatures);
// 6 Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
var numbArray2 = [3, 6, 9, 12, 15, 18];
var doubledOddNumbersArray = numbArray2
    .filter(function (number) { return number % 2 !== 0; }) // Filter odd numbers
    .map(function (oddNumber) { return oddNumber * 2; }); // Double each odd number
console.log('Original array:', numbArray2);
console.log('Doubled values of odd numbers:', doubledOddNumbersArray);
// 7 Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
var namesArray = ["Alice", "Bob", "Charlie", "David", "Emily"];
namesArray.forEach(function (name) {
    console.log("".concat(name, "!"));
});
