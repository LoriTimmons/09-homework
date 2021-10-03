// TODO: Include packages needed for this application
// Inquire 
const inquirer = require("inquirer");
const Inquire = require("inquirer");

// TODO: Create an array of questions for user input (for "type see mdn package info")
// build questions 
// Hints answers I need to plug it in on the MD file (Markdown file) FS model. File system GOOGLE!!! 
const questions = [{
    type: "input",
    name: "title",
    message: "what is the title of your project"
},
{
    type: "input",
    name: "Pizza",
    message: "what is the title of your project"
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data){
        console.log(data);
    })
}

// Function call to initialize app
init();
