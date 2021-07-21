// TODO include packages needed for this application 

const inquirer = require("inquirer");
const fs = require('fs');
const path = require("path");
const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const { generate } = require("rxjs");

const allEmployees = [];

//Create an array of questions for Employees
const employees = [
    {
        type: "input",
        message: "What is the employee ID?",
        name: "id" 
    },
    {
        type: "input",
        message: "What is the employee email?",
        name: "email"
    },
];

//Create a question for Manager

const managerQuestions = [
    {
        type: "input",
        message: "What is the Team Manager's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the Manager's office number",
        name: "officeNumber"
    }
];

//Create a question for Engineer

const engineerQuestions = [
    {
        type: "input",
        message: "What is the Engineer's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the team Engineer's GitHub username?",
        name: "github"
    }
];

//Create a question for Intern

const internQuestion = [
    {
        type: "input",
        message: "What is the Intern's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the team Intern's school name?",
        name: "school"
    }
];

//Create an array of WhatNextQuestions

const whatsNextQuestions = [
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        choices: ["Intern", "Engineer", "Finish"],
        name: "addEmployee",
    }
];

const askForInternInfo = () => {

    return inquirer
        .prompt(internQuestion.concat(employees))
        .then((internAnswers) => {

            //THEN we need to create a new Intern object with that data

            //Push the new intern to the list of employees
            const intern = new Intern(internAnswers.id, internAnswers.name,
                internAnswers.email, internAnswers.school);
            allEmployees.push(intern);
            return askWhatsNext();

        })

}

const askForEngineerInfo = () => {
    return inquirer
        .prompt(engineerQuestions.concat(employees))
        .then((engineerAnswers) => {
            const engineer = new Engineer(engineerAnswers.id, engineerAnswers.name,
                engineerAnswers.email, engineerAnswers.github);
            allEmployees.push(engineer);
            return askWhatsNext();
        })
}


const askWhatsNext = () => {

    return inquirer
        .prompt(whatsNextQuestions)
        .then((whatsNextAnswer) => {
            // THEN then to use their answer to decide what to do next.
            if (whatsNextAnswer.addEmployee == 'Intern') {
                return askForInternInfo();
            }
            else if (whatsNextAnswer.addEmployee == 'Engineer') {
                return askForEngineerInfo();
            }
            console.log("Done collection questions! Generating result!");
            return; // finish
        });
};

//'inquire.prompt()' the user of manager information using our 'managerQuestion'
inquirer
    .prompt(managerQuestions.concat(employees))
    .then((managerAnswers) => {

        //THEN we need to create a new Manger object with that data
        //const manager = new Manager (managerAnswers)

        //AND THEN new to ask the users what they want to do next. ( 'inquire.prompt()' with whatsNextQuestion)
        const manager = new Manager(managerAnswers.id, managerAnswers.name, 
            managerAnswers.email, managerAnswers.officeNumber);
        allEmployees.push(manager);
        return askWhatsNext();

    })
    .then(() => {

        //User employee objects to create HTML page and write it to file
        console.log(allEmployees);
    })
    .catch((error) => {
        if (error.isTtyError) {
        //Prompt couldn't be rendered in the current environment 
        } else {
        //Something else went wrong
        }
    });