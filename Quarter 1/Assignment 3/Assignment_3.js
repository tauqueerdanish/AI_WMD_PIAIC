// Assignment for the week: 
// 1 - Develop a program that calculates and prints the sum of the first n even numbers using a for loop. 
function sumOfFirstNEvens(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        var evenNumber = 2 * i;
        sum += evenNumber;
    }
    return sum;
}
var n = 5;
var sum = sumOfFirstNEvens(n);
console.log("The sum of the first ".concat(n, " even numbers is: ").concat(sum));
// 2 - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers. 
function printEvenNumbers(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log(numbers[i]);
        }
    }
}
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Even numbers in the array:');
printEvenNumbers(numberArray);
// 3 - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones 
function removeEvenNumbers(numbers) {
    var oddNumbers = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            oddNumbers.push(numbers[i]);
        }
    }
    return oddNumbers;
}
var numberArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddNumbersArray = removeEvenNumbers(numberArray2);
console.log('Array with even numbers removed:', oddNumbersArray);
// 4 - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area. 
function calculateCircleArea(radius) {
    var pi = Math.PI;
    var area = pi * Math.pow(radius, 2);
    return area;
}
var radius = 5;
var circleArea = calculateCircleArea(radius);
console.log("The area of the circle with radius ".concat(radius, " is: ").concat(circleArea));
// 5 - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array. 
function removeFailingGrades(grades) {
    for (var i = 0; i < grades.length; i++) {
        if (grades[i] < 50) {
            grades.splice(i, 1);
            i--;
        }
    }
}
var gradesArray = [65, 42, 80, 30, 55, 90, 48, 75, 95];
console.log('Original grades array:', gradesArray);
removeFailingGrades(gradesArray);
console.log('Grades array with failing grades removed:', gradesArray);
// 6 - Write a program that uses a function to find the largest element in an array of numbers.
function findLargestElement(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array is empty");
    }
    var largest = numbers[0]; // Assume the first element is the largest
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}
var numberArray3 = [12, 45, 67, 23, 89, 34, 56];
var largestElement = findLargestElement(numberArray3);
console.log("The largest element in the array is: ".concat(largestElement));
