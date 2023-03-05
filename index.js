const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { managerQuestions, engineerQuestions, internQuestions } = require("./questions");

//empty array for the team members
const teamMembers = [];

// Initialize 
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
    inquirer.prompt(managerQuestions)
        .then((answers) => {
            const manager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber
            );
            // adds the manager to the team members array
            teamMembers.push(manager);
            console.info('Manager added to the team!')
            newEmployee();
        });
};

const newEmployee = async () => {
    let isFinished = false;
    do {
        console.info('What would you like to do next?');
        const answer = await inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'nextChoice',
                    message: 'What would you like to do?',
                    choices: ['Add an Engineer', 'Add an Intern', 'Finish building the team']
                }
            ]);

        // first option chosen to add an engineer
        if (answer.nextChoice === 'Add an Engineer') {
            const answers = await inquirer.prompt(engineerQuestions)
            const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github
            );
            // add the engineer to the team member array
            teamMembers.push(engineer);
            console.info('Engineer added to the team!')

        }
        // second option chosen to add an intern
        else if (answer.nextChoice === 'Add an Intern') {
            const answers = await inquirer.prompt(internQuestions)
            const intern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
            );
            // add the intern to the team member array
            teamMembers.push(intern);
            console.info('Intern added to the team!')

        }
        // third option to finish building the team
        // render and fs.writeFile
        else if (answer.nextChoice === 'Finish building the team') {
            const html = render(teamMembers);

            fs.writeFile(outputPath, html, (err) => {
                if (err) throw err;
                console.info(`Team profile successfully generated at ${outputPath}`);
            });
            isFinished = true;
        };
    } while (!isFinished)
};

init();