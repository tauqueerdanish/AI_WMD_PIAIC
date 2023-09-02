// Assignment for the week is: 
// 1 - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array. 
var array = [1, 2, 3, 4, 5, 6];
var index = 3;
var arrayValue = 25;
function createArray(array, index, arrayValue) {
    array.splice(index, 0, arrayValue);
    return array;
}
array = createArray(array, index, arrayValue);
console.log(array);
//3 - Write a program that uses a while loop to print the first 25 integers.
var value = 0;
while (value < 26) {
    console.log(value);
    value++;
}
// 4 - Write a program that uses a while loop to print the first 10 even numbers. 
var integer = 1;
var increment = 1;
while (increment < 11) {
    if (integer % 2 == 0) {
        console.log(integer);
        increment++;
    }
    integer++;
}
// 5 - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number. 
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
var num = 5;
var result = factorial(num);
console.log("Factorial of ".concat(num, " is ").concat(result));
// 6 - Write a program having an array of numbers if the number is negative it should remove the negative number from the array. 
var numbers = [1, -2, 3, -4, 5, -6];
var filteredNumbers = numbers.filter(function (number) { return number >= 0; });
console.log('Original array:', numbers);
console.log('Array with negative numbers removed:', filteredNumbers);
// 7- Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array. 
function calculateSum(numbers) {
    var sum = 0;
    var i = 0;
    while (i < numbers.length) {
        sum += numbers[i];
        i++;
    }
    return sum;
}
var numbersArray = [1, 2, 3, 4, 5];
var sumOfArray = calculateSum(numbersArray);
console.log("The sum of the numbers is: ".concat(sumOfArray));
// 8 - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
function celsiusToFahrenheit(celsiusTemperatures) {
    var fahrenheitTemperatures = [];
    var i = 0;
    while (i < celsiusTemperatures.length) {
        var celsius = celsiusTemperatures[i];
        var fahrenheit = (celsius * 9 / 5) + 32;
        fahrenheitTemperatures.push(fahrenheit);
        i++;
    }
    return fahrenheitTemperatures;
}
var celsiusTemperatures = [0, 10, 20, 30, 40];
var fahrenheitTemperatures = celsiusToFahrenheit(celsiusTemperatures);
console.log('Celsius Temperatures:', celsiusTemperatures);
console.log('Fahrenheit Temperatures:', fahrenheitTemperatures);
