// questions arrays
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the team manager\'s name?'
    },
    {
        type: 'input',
        message: 'What is the team manager\'s employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the team manager\'s email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the team manager\'s office number?',
        name: 'officeNumber',
    }];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the engineer\'s name?'
    },
    {
        type: 'input',
        message: 'What is the engineer\'s employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the engineer\'s email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the engineer\'s GitHub username?',
        name: 'github',
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the intern\'s name?'
    },
    {
        type: 'input',
        message: 'What is the intern\'s email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the intern\'s school?',
        name: 'school',
    }
]

module.exports = {managerQuestions, engineerQuestions, internQuestions}