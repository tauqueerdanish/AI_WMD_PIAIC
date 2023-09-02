// Assignment for the week: 
// 1 - Develop a program that calculates and prints the sum of the first n even numbers using a for loop. 

function sumOfFirstNEvens(n: number): number {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        const evenNumber = 2 * i;
        sum += evenNumber;
    }

    return sum;
}

const n = 5; 
const sum = sumOfFirstNEvens(n);
console.log(`The sum of the first ${n} even numbers is: ${sum}`);

// 2 - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers. 

function printEvenNumbers(numbers: number[]): void {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log(numbers[i]);
        }
    }
}

const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Even numbers in the array:');
printEvenNumbers(numberArray);


// 3 - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones 

function removeEvenNumbers(numbers: number[]): number[] {
    const oddNumbers: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            oddNumbers.push(numbers[i]);
        }
    }

    return oddNumbers;
}

const numberArray2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbersArray = removeEvenNumbers(numberArray2);

console.log('Array with even numbers removed:', oddNumbersArray);


// 4 - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area. 

function calculateCircleArea(radius: number): number {
    const pi = Math.PI;
    const area = pi * Math.pow(radius, 2);
    return area;
}

const radius = 5; 
const circleArea = calculateCircleArea(radius);

console.log(`The area of the circle with radius ${radius} is: ${circleArea}`);


// 5 - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array. 

function removeFailingGrades(grades: number[]): void {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 50) {
            grades.splice(i, 1);
            i--; 
        }
    }
}

const gradesArray: number[] = [65, 42, 80, 30, 55, 90, 48, 75, 95];
console.log('Original grades array:', gradesArray);

removeFailingGrades(gradesArray);

console.log('Grades array with failing grades removed:', gradesArray);


// 6 - Write a program that uses a function to find the largest element in an array of numbers.

function findLargestElement(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("Array is empty");
    }

    let largest = numbers[0]; // Assume the first element is the largest

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

const numberArray3: number[] = [12, 45, 67, 23, 89, 34, 56];
const largestElement = findLargestElement(numberArray3);

console.log(`The largest element in the array is: ${largestElement}`);


