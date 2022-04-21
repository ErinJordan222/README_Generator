// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},
{
    type: 'input',
    name: 'title',
    message: "What is your project's name?",
},
{
    type: 'input',
    name: 'description',
    message: 'Write a short description about your project here',
},
{
    type: 'list',
    name: 'license',
    message: 'What license should your project have?',
    default: 'MIT',
},
{
    type: 'input',
    name: 'installation',
    message: 'What command should run in order to install dependencies?',
    default: 'npm i',
},
{
    type:'input',
    name: 'test',
    message: 'What command should run in order to run tests?',
    default:'npm test',
},
{
    type:'input',
    name:'usage',
    message: 'Write a short paragraph on the usage of this repo',
},
{
    type:'input',
    name:'contribution',
    message:'Write any contribution used towards this repo/project',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generate README...');
        writetoFile('README.md', generateMarkdown({ ...inquirerResponses}));
    });
}

// Function call to initialize app
init();
