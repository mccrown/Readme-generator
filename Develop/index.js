// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => { 
    return inquirer.prompt([
    {
    message: 'What is the title of your Readme file?',
    type: 'input',
    name: 'title',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a title!');
          return false;
        }
    }
},
{
    message: 'Enter a description.',
    type: 'input',
    name: 'description',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a description!');
          return false;
        }
      }
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
]);
};

//TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./README.md', data, err => {
        if (err) throw new Error(err);
    });
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(data => writeToFile(generateMarkdown(data)));
    
    
}
// fs.writeFile('./develop/README.md', generateMarkdown(), err => {
//     if (err) throw new Error(err);
//  });


// Function call to initialize app
init();
