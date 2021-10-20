// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is a title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title!');
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project. (Required)',
        validate: descriptionInput => {
            if(descriptionInput){
                return true;
            }else{
                console.log('Please provide a proejct description!');
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide an installation instruction. (Required)',
        validate: installationInput => {
            if(installationInput){
                return true;
            }else{
                console.log('Please provide an installation instruction!');
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Provide information about the use of the project. (Required)',
        validate: usageInput=> {
            if(usageInput){
                return true;
            }else{
                console.log('Please provide information aobut the use of the project!');
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide test instructions for the project',
        validate: testInput  => {
            if(testInput){
                return true;
            }else{
                console.log('Please provide test instruction!')
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ['Apache', 'GNU General Public', 'MIT']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
