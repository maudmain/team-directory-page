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
            if (answer.nextChoice === 'Add an Engineer') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: 'What is the engineer\'s name?'
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
                })
            }
            else if (answer.nextChoice === 'Add Intern') {
                inquirer.prompt
            }
        }
        )
};

init();