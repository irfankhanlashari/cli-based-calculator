#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "type your first number", type: "number", name: "firstNumber" },
    { message: "type your second number", type: "number", name: "secondNumber" },
    { message: "select your operator", type: "list", name: "operator",
        choices: ["addition", "multiply", "divide", "substrection"], },
]);
if (answer.operator === "addition") {
    console.log(`your answer is ${answer.firstNumber + answer.secondNumber}`);
}
else if (answer.operator === "multiply") {
    console.log(`your answer is ${answer.firstNumber * answer.secondNumber}`);
}
else if (answer.operator === "divide") {
    console.log(`your answer is ${answer.firstNumber / answer.secondNumber}`);
}
else if (answer.operator === "substrection") {
    console.log(`your answer is ${answer.firstNumber - answer.secondNumber}`);
}
else {
    console.log("please enter valid number");
}
