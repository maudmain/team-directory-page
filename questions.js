// questions arrays
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the team manager\'s name?',
        validate: validateInput
    },
    {
        type: 'input',
        message: 'What is the team manager\'s employee ID?',
        name: 'id',
        validate: validateID
    },
    {
        type: 'input',
        message: 'What is the team manager\'s email address?',
        name: 'email',
        validate: validateEmail
    },
    {
        type: 'input',
        message: 'What is the team manager\'s office number?',
        name: 'officeNumber',
        validate: validateNumber
    }];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the engineer\'s name?',
        validate: validateInput
    },
    {
        type: 'input',
        message: 'What is the engineer\'s employee ID?',
        name: 'id',
        validate: validateID
    },
    {
        type: 'input',
        message: 'What is the engineer\'s email address?',
        name: 'email',
        validate: validateEmail
    },
    {
        type: 'input',
        message: 'What is the engineer\'s GitHub username?',
        name: 'github',
        validate: validateUserName
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the intern\'s name?',
        validate: validateInput
    },
    {
        type: 'input',
        message: 'What is the intern\'s employee ID?',
        name: 'id',
        validate: validateID
    },
    {
        type: 'input',
        message: 'What is the intern\'s email address?',
        name: 'email',
        validate: validateEmail
    },
    {
        type: 'input',
        message: 'What is the intern\'s school?',
        name: 'school',
        validate: validateInput
    }
]


// validate all inputs to make sure that length is >0
function  validateInput(input) {
    if (input.trim().length > 0) {
        return true;
    } else {
        return 'Please enter a valid name.';
    }
};

// validate ID to check if input is only numbers (0-9)
function validateID(input) {
    if (/^\d+$/.test(input)) {
        return true;
    } else {
        return 'Please enter a valid ID.';
    }
};

// validate phone number
function validateNumber(input) {
    if (/^\d+$/.test(input)) {
        return true;
    } else {
        return 'Please enter a valid phone number.';
    }
}

// validate email format using regex
function validateEmail(email) {
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (email.match(mailformat)) {
        return true;
    } else {
        return "Invalid email address.";
    }
}
// validate GitHUb username format using regex 
function validateUserName(github) {
    var userformat = /^([A-Za-z0-9\-])+$/;
    if (github.match(userformat)) {
        return true;
    } else {
        return "Invalid GitHub username.";
    }
}

module.exports = {managerQuestions, engineerQuestions, internQuestions}