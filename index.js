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
        message: "Let's start building your team. \n Enter the manager's name.",
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
        message: "Add another role, or select finish",
        choices: ["Add Engineer", "Add Intern", "Finished building my team"],
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
}

// Engineer Prompts

function engineerPrompts() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the engineer's name.",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the engineer's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the engineers's email.",
      },
      {
        type: "input",
        name: "gitUsername",
        message: "Enter the engineer's GitHub Username.",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.gitUsername
      );
      teamMembers.push(engineer);
      renderTeam();
    });
}

// Intern Prompts

function internPrompts() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the intern's name.",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the intern's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the intern's email.",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the intern's school.",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      renderTeam();
    });
}

const writeFile = () => {
  fs.writeFileSync("./output/team.html", renderTemplate(teamMembers), (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Team profile has been generated");
    }
  });
};

managerPrompts();
