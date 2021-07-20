// TODO include packages needed for this application 

const inquirer = require("inquirer");
const fs = require('fs');
const path = require("path");

//Create an array of questions for Employees
const employees = [
    {
        type: "input",
        message: "what is the employee's name?",
        name: "name"
    },
    {
        type: "list",
        message: "what is the role of the employee?",
        options: ["Manager","Engineer","Intern"],
        name: "role"
    },
    {
        type: "input",
        message: "what is the employee's ID?",
        name: "id" 
    },
    {
        type: "input",
        message: "what is the team employee's email?",
        name: "email"
    },
];

//Create an array of questions for Manager

const managerQuestions = [
    
    {
        type: "input",
        message: "what is the manager's office number",
        name: "Office number"
    }
];

//Create an array of questions for Engineer

const engineerQuestions = [
   
    {
        type: "input",
        message: "what is the team engineer's GitHub username?",
        name: "GitHub"
    }
];

//Create an array of questions for Intern

const internQuestion = [
    
    {
        type: "input",
        message: "what is the team inter's school name?",
        name: "school"
    }
];



const whatsNextQuestions = [
    {
        type: "input",
        message: "Which type of team member would you like to add?",
        name: "list",
        options: []
    }
];

const askforInternInfo = () => {

    return inquirer
        .prompt( internQuestions )
        .then((internAnswers) => {

            //THEN we need to create a new Intern object with that data

            //Push the new intern to the list of employees

            return askWhatsNext();

        })

}

const askWhatsNext = () => {

    return inquire
        .prompt(whatsNextQuestion)
        .then((whatsNextAnswer) => {

            // THEN then to use their answer to decide what to do next.
            return askforInternInfo();

        });
};

//'inquire.prompt()' the user of manager information using our 'managerQuestion'
inquirer
    .prompt(managerQuestions)
    .then((managerAnswer) => {

        //THEN we need to create a new Manger object with that data
        //const manager = new Manager (managerAnswers)

        //AND THEN new to ask the users what they want to do next. ( 'inquire.prompt()' with whatsNextQuestion)
        return askWhatsNext();


    })
    .then(() => {

        //User employee objects to create HTML page and writeit to file
    
    })
    .catch((error) => {
        if (error.isTtyError) {
        //Prompt couldn't be rendered in the current environment 
        } else {
        //Something else went wrong
        }
    });