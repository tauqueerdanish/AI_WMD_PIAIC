"use strict";
let message1 = 'Hello World';
let message2 = 'Hello World';
console.log(`Message1 is: ${message1}`);
console.log(`Message2 is: ${message2}`);
console.log('Is message1 equals to message 2? ' + message1 == message2);
console.log('Is message1 not equals to message 2? ' + message1 != message2);
console.log('Is message1.tolowercase() equals to message 2? ' + message1.toLowerCase() == message2);
console.log('Is message1.tolowercase() not equals to message 2? ' + message1.toLowerCase() != message2);
console.log('Numerical Tests');
let number1 = 2;
let number2 = 3;
console.log(`First NUmber: ${number1}`);
console.log(`Second NUmber: ${number2}`);
console.log(`Is first number equals to second number? ${number1 == number2}`);
console.log(`Is first number not equals to second number? ${number1 != number2}`);
console.log(`Is first number greater than second number? ${number1 > number2}`);
console.log(`Is first number less than second number? ${number1 < number2}`);
console.log(`Is first number greater than and equals to second number? ${number1 >= number2}`);
console.log(`Is first number less than and equals to second number? ${number1 <= number2}`);
let weather1 = 'Rainy';
let weather2 = 'Sunny';
if (weather1 == 'Rainy' && message2 == message1) {
    console.log("And operator works");
}
if (weather1 == 'Rainy' || message2 != message1) {
    console.log('OR operator works');
}
let daysList = ['Monday', 'Tuesday', 'Wednesday'];
console.log(daysList.includes('Monday'));
console.log(!daysList.includes('Monday'));
