const renderTemplate = require("./src/template");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// const path = require("path");
const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

const teamMembers = [];


// TODO: Write Code to gather information about the development team members, and render the HTML file.

//  Manager Prompts

function managerPrompts() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: " Enter the manager's name.",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the manager's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the manager's email.",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office number.",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      renderTeam();
    });
}

function renderTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "roles",
          message: "Add another role.",
          choices: ["Engineer", "Intern", "Finished my selection"],
        },
      ])
      .then((answers) => {
        if (answers.roles === "Engineer") {
          engineerPrompts();
        } else if (answers.roles === "Intern") {
          internPrompts();
        } else {
          writeFile();
        }
      });
  };

// Engineer Prompts


// Intern Prompts   



//





