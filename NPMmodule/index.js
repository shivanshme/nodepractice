const chalk = require("chalk");
const validator=require("validator")
//downgrade the chalk version
//import chalk from 'chalk';
console.log(chalk.green("Hello world"));
console.log(chalk.blue.bold("Hello world"));
//console.log(chalk.green.inverse("Hello world"));

//email validator
const res = validator.isEmail("shivansh@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));