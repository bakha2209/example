// const moment = require('moment');


// setInterval(() => {
//   const time = moment().format();
//   console.log(`hozirgi vaqt: ${time}`);
// }, 5000);

// const inquirer = require ("inquirer");
// inquirer
//   .prompt([{type: 'input', name: 'raqam', message: "raqamni kiriting"}])
//   .then(answer => {
//     console.log('man kiritgan raqam qiymati:', answer.raqam);
//   })
//   .catch(err => console.log(err));

const validator = require('validator');
// const test = validator.isEmail("foo@bar.com");
// const test = validator.isInt("150");
const test = validator.isIP("220.90.54.248")
console.log("test:",test);


const {v4: uuid4 } = require("uuid"); 
const random = uuid4();
console.log("random:", random)

const chalk = require('chalk');
const log = console.log;
log(chalk.blue("Hello") + random + chalk.red("!"))




