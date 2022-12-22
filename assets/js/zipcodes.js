const inquirer = require('inquirer');
const zipcodes = require('zipcodes');

let hills = zipcodes.lookup(90210);

console.log(hills)