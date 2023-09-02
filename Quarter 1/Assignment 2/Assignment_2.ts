// Assignment for the week is: 
// 1 - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array. 

let array: number[] = [1,2,3,4,5,6]
let index: number = 3
let arrayValue: number = 25
function createArray(array, index, arrayValue): number[] {
    array.splice(index, 0, arrayValue)
    return array
}

array = createArray(array, index, arrayValue)
console.log(array)

//3 - Write a program that uses a while loop to print the first 25 integers.

let value:number = 0

while(value<26){
    console.log(value)
    value++
}
// 4 - Write a program that uses a while loop to print the first 10 even numbers. 

let integer: number = 1
let increment: number = 1

while(increment < 11) {
    if (integer % 2 == 0){
        console.log(integer)
        increment++
    }
    integer++
}

// 5 - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number. 

function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const num = 5;
const result = factorial(num);
console.log(`Factorial of ${num} is ${result}`);


// 6 - Write a program having an array of numbers if the number is negative it should remove the negative number from the array. 

const numbers: number[] = [1, -2, 3, -4, 5, -6];
const filteredNumbers = numbers.filter((number) => number >= 0);

console.log('Original array:', numbers);
console.log('Array with negative numbers removed:', filteredNumbers);




// 7- Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array. 

function calculateSum(numbers: number[]): number {
    let sum = 0;
    let i = 0;

    while (i < numbers.length) {
        sum += numbers[i];
        i++;
    }

    return sum;
}

const numbersArray: number[] = [1, 2, 3, 4, 5];
const sumOfArray: number = calculateSum(numbersArray);
console.log(`The sum of the numbers is: ${sumOfArray}`);


// 8 - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.

function celsiusToFahrenheit(celsiusTemperatures: number[]): number[] {
    const fahrenheitTemperatures: number[] = [];
    let i = 0;

    while (i < celsiusTemperatures.length) {
        const celsius = celsiusTemperatures[i];
        const fahrenheit = (celsius * 9/5) + 32;
        fahrenheitTemperatures.push(fahrenheit);
        i++;
    }

    return fahrenheitTemperatures;
}

const celsiusTemperatures: number[] = [0, 10, 20, 30, 40];
const fahrenheitTemperatures = celsiusToFahrenheit(celsiusTemperatures);

console.log('Celsius Temperatures:', celsiusTemperatures);
console.log('Fahrenheit Temperatures:', fahrenheitTemperatures);

