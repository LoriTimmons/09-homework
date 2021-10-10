
// Inquire 
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
console.log(generateMarkdown);
//  Hints answers I need to plug it in on the MD file (Markdown file) FS model. File system GOOGLE!!! 
const fs = require("fs");


// TODO: Create an array of questions for user input (for "type see mdn package info")
// build questions 

const questions = [{
    type: "input",
    name: "title",
    message: "what is the title of your project"
},
{
    type: "input",
    name: "Description",
    message: "What is the description of the project"
},

{
type: "input",
name: "Installation",
message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
},

{
type: "input",
name: "Usage",
message: "What instructions do you need for usage?"
},

{
    type: "input",
    name: "Images",
    message: "Input any screenshots."
    },

{
    
    type: "input",
    name: "Contribution",
    message: "Add your contributors."
},

{
    
    type: "input",
    name: "Test",
    message: "What are your testing commands?"
},

{
    type: "list",
    name: "license",
    message: "What license do you use?",

    choices: [
        "Apache", "MIT", "Eclipse" , "Boost", "IBM", "None"
    ]
},

{

    type: "input",
    name: "Email",
    message: "What is your Email?"
},

{

    type: "input",
    name: "GitHub",
    message: "What is your GitHub username?"
},
{
type: "input",
name: "Repo",
message: "What is your GitHub Repo Link?"
},

];

// TODO: Create a function to write README file
function writeToFile(data) {
fs.writeFile("README.md", data, (error) => {
    if (error === true) {
        console.log(error)
    }else {
        console.log("Successful")
    }
} )
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data){
        console.log("This is data", data);
    let answers = generateMarkdown(data);
    console.log(answers);
    writeToFile(answers);
    })
}

// Function call to initialize app
init();
