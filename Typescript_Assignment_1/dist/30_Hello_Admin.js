"use strict";
let usersList = ['admin', 'daniel', 'eric', 'sebastian', 'laura'];
for (let i = 0; i < usersList.length; i++) {
    if (usersList[i] == 'admin') {
        console.log(`Hello ${usersList[i]}, want to check some log`);
    }
    else {
        console.log(`Hello ${usersList[i]}, thank you for logging in again`);
    }
}
