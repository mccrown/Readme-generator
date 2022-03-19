// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [{
    message: 'What is the title of your Readme file?',
    type: 'input',
    name: 'title',
},
{
    message: 'Enter a description.',
    type: 'input',
    name: 'description',
},
{
    message: 'How is this project installed?',
    type: 'input',
    name: 'installed',
},
{
    message: 'How is this project used?',
    type: 'input',
    name: 'usage',
},
{
    message: 'List credits for this project.',
    type: 'input',
    name: 'credits',
},
{
    message: 'Enter a license.',
    type: 'input',
    name: 'license',
},
{
    message: 'Test of the project.',
    type: 'input',
    name: 'test',
},
{
    message: 'Enter your Github profile link.',
    type: 'input',
    name: 'github',
},
{
    message: 'Enter your email address.',
    type: 'input',
    name: 'email',
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
