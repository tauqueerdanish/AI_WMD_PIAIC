"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
inquirer_1.default.prompt({
    name: 'Full Name',
    type: 'input',
    message: "What is your Full Name?"
}, {
    name: 'age',
    type: 'number',
    message: 'What is your age?'
});
