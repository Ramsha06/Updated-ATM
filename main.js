#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let pin = 1234;
let balance = 500000;
let pinanswer = await inquirer.prompt([{
        message: (chalk.magentaBright("Enter your pin")),
        name: "pin",
        type: "password",
    }]);
if (pinanswer.pin == pin) {
    console.log("correct pin");
    let operations = await inquirer.prompt([{
            message: (chalk.blueBright("Please select an option")),
            type: "list",
            name: "opr",
            choices: ["withdraw", "Fast cash", "Deposit", "Balance inquiry"],
        },
    ]);
    if (operations.opr == "withdraw") {
        let withdraw = await inquirer.prompt([{
                message: (chalk.blueBright("Enter the amount you want to withdraw")),
                type: "number",
                name: "wdraw",
            }]);
        if (withdraw.wdraw > balance) {
            console.log(chalk.redBright("Insufficiant Balnce!, Please enter amount under your current balance."));
        }
        else //if(withdraw.wdraw <= "Balance")
         {
            balance -= withdraw.wdraw;
            console.log(chalk.blueBright(`your remaining balance is ${balance}`));
        }
    }
    else if (operations.opr === "Fast cash") {
        let fcash = await inquirer.prompt([{
                message: (chalk.blueBright("Enter the fast cash amount")),
                type: "list",
                name: "fast",
                choices: ["5000", "15000", "20000", "25000"],
            }]);
        if (fcash.fast > balance) {
            balance -= fcash.fast;
            console.log(chalk.redBright("Insufficiant Balnce!, Please enter amount under your current balance."));
        }
        else if (fcash.fast <= balance) {
            balance -= fcash.fast;
            console.log(chalk.blueBright(`your remaining balance is ${balance}`));
        }
    }
    else if (operations.opr === "Deposit") {
        let depositamount = await inquirer.prompt([{
                message: (chalk.blueBright("Enter the amount you want deposit")),
                name: "depo",
                type: "number",
            }]);
        balance += depositamount.depo;
        console.log(chalk.blueBright(`your new balance is now ${balance}`));
    }
    else if (operations.opr == "Balance inquiry") {
        console.log(chalk.magentaBright(`your balance is ${balance}`));
    }
    console.log(chalk.magentaBright("Thank you for using Atm service"));
}
else {
    console.log(chalk.redBright("invalid pin"));
}
