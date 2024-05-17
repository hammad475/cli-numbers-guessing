#! /usr/bin/env node
import inquirer from "inquirer";
// computer will generate a random number = done
// user input for guessing number =done
// compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
;
//console.log(answer);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10: ",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulations! you guessed a right number");
}
else {
    console.log("you guessed a wrong number");
}
