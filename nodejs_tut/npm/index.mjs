// import chalk from "chalk";
// console.log(chalk.blue.inverse("hello"));
// console.log(chalk.green.inverse("hello"));

import chalk from "chalk";
import validator from "validator";

const isEmail = validator.isEmail("abc@gmail.com");
console.log(
  isEmail ? chalk.green.inverse(isEmail) : chalk.red.inverse(isEmail)
);
