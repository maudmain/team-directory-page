const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

//empty array for the team members
const teamMembers = [];



const init = () => {
    console.info(
        "\n",
        "-------------------- Welcome to your Team Directory --------------------",
        "\n",
        "Answer the questions below to generate your team",
        "\n"
    )
    managerPrompt()

}

const managerPrompt = () => {
    console.info('Please enter the following information for your Team Manager.')
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team manager\'s name?'
        }
    ])
        .then((answers) => {
            const manager = new Manager(
                answers.name
            );
            // adds the manager to the team members array
            teamMembers.push(manager);
            console.log(teamMembers);
            console.info('Manager added to the team!')
            newEmployee();
        });
};

const newEmployee = () => {
    console.info('What would you like to do next?');
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'nextChoice',
                message: 'What would you like to do?',
                choices: ['Add an Engineer', 'Add an Intern', 'Finish building the team']
            }
        ])
        .then((answer) => {
            // first option chosen to add an engineer
            if (answer.nextChoice === 'Add an Engineer') {
                inquirer.prompt([
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
                ])
                    .then((answers) => {
                        const engineer = new Engineer(
                            answers.name
                        );
                        // add the engineer to the team member array
                        teamMembers.push(engineer);
                        console.log(teamMembers);
                        console.info('Engineer added to the team!')
                        newEmployee();
                })
            }
            // second optionmaud chosen to add an intern
            else if (answer.nextChoice === 'Add an Intern') {
                inquirer.prompt([
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
                ])
                    .then((answers) => {
                        const intern = new Intern(
                            answers.name
                        );
                        // add the intern to the team member array
                        teamMembers.push(intern);
                        console.log(teamMembers);
                        console.info('Intern added to the team!')
                        newEmployee();
                    })
            }

            // third option to finish building the team
            // render and fs.writeFile
        })
    
};

init();