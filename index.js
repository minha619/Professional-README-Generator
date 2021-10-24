// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const promptUser = () => [
    //project name
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
    //project description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a proejct description!');
            }
        }
    },
    //installation  instruction
    {
        type: 'input',
        name: 'installation',
        message: 'Provide an installation instruction. (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide an installation instruction!');
            }
        }
    },
    //usage information
    {
        type: 'input',
        name: 'usage',
        message: 'Provide information about the use of the project. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide information aobut the use of the project!');
            }
        }
    },
    //confirm contribution
    {
        type: 'confirm',
        name: 'confirmContribution',
        message: 'Would you like to provide guidelines for contributing?',
        default: true
    },
    // contribution information
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide guidelines for contributing.',
        when: ({ confirmContribution }) => confirmContribution
    },
    //test information
    {
        type: 'input',
        name: 'test',
        message: 'Provide test instructions for the project',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please provide test instruction!')
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ['Apache', 'GNU', 'MIT']
    },
    //github username
    {
        type: 'input',
        name: 'github',
        message: 'Provide your GitHub username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username.')
                return false;
            }
        }
    },
    //email 
    {
        type: 'input',
        name: 'email',
        message: 'Provide your email address to reach for more questions about the project.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('README.md has been created!')
    });
}


// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(promptUser());
};

// Function call to initialize app
init()
    .then(userInput => generateMarkdown (userInput))
    .then(generateReadMe => writeToFile("output/README.md", generateReadMe))
    .catch(err => {
        console.log(err);
    });