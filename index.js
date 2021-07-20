const employees = [];

const managerQuestions = [
    {
        type: "input",
        message: "what is the team manager's name?",
        name: "name"
    }

];

const internQuestion = [
    {
        type: "input",
        message: "What is the team inter's name?",
        name: "name"
    }
];

const engineerQuestions = [
    {
        type: "input",
        message: "What is the team's engineer's name?", 
        name: "name"
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