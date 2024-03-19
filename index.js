#! /usr/bin/env node 
import inquirer from "inquirer";
//A simple Calculator
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select One Operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtration", "Multiplication", "Division"],
    },
]);
//Conditional Statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtration") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select valid operator");
}
console.log(answer);
