//equality and inequality

let message1: string = 'Hello World'
let message2: string = 'Hello World'

console.log(`Message1 is: ${message1}`)
console.log(`Message2 is: ${message2}`)
console.log('Is message1 equals to message 2? ' + message1 == message2)
console.log('Is message1 not equals to message 2? ' + message1 != message2)


//Test using lower case functiom

console.log('Is message1.tolowercase() equals to message 2? ' + message1.toLowerCase() == message2)
console.log('Is message1.tolowercase() not equals to message 2? ' + message1.toLowerCase() != message2)


//Numerical tests

console.log('Numerical Tests')

let number1: number = 2
let number2: number = 3

console.log(`First NUmber: ${number1}`)
console.log(`Second NUmber: ${number2}`)

//Numerical equality and inequality

console.log(`Is first number equals to second number? ${number1 == number2}`)
console.log(`Is first number not equals to second number? ${number1 != number2}`)
console.log(`Is first number greater than second number? ${number1 > number2}`)
console.log(`Is first number less than second number? ${number1 < number2}`)
console.log(`Is first number greater than and equals to second number? ${number1 >= number2}`)
console.log(`Is first number less than and equals to second number? ${number1 <= number2}`)


//Tests and/or operators

let weather1: string = 'Rainy'
let weather2: string = 'Sunny'

if(weather1 == 'Rainy' && message2 == message1){
    console.log("And operator works")
}

if(weather1 == 'Rainy' || message2 != message1){
    console.log('OR operator works')
}

let daysList = ['Monday', 'Tuesday', 'Wednesday']

console.log(daysList.includes('Monday'))
// if('Friday' in daysList){
//     console.log('Friday is in Dayslist')
// }
// else{
//     console.log('Friday is not in list')
// }

console.log(!daysList.includes('Monday'))
// if(('Monday' in daysList)){
//     console.log('Monday is not in Dayslist')
// }
// else{
//     console.log('Sorry! Monday is in list')
// }

