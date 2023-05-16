# JC Team Profile Generator

## Description

The JC README Generator is a command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.



## Installation

Make sure that your project includes a package.json with the required dependencies. You can create one by running `npm i` when you first set up the project, before installing any dependencies:

- Run `npm i` to set up the project

-  Then `npm install --save inquirer@^8.0.0` to install the inquirer module

- To run unit tests use `Jest`

<br>

## Usage

The application will be invoked by using the following command:

`node index.js`

1. Right click on `index.js` and select 'Open in Integrated Terminal'.

2. Type `node index.js` and enter.

3. You will be given a series of prompts to help build your team, you will have to choice to add a team manager, engineer/s and intern/s.


4. Once you have finished building your team select `finish`, your final `team.html` file can then found in the `output` folder. 




## Screenshots
<br>

An example of the prompts the user can select from:
![JC Team Profile Generator](./assets/images/terminal%20prmpts.png)

<br>

Sample `team.html` file in the output folder:

![JC Team Profile Generator](./assets/images/My%20Team.png)
 

## Tests
To run tests use the command `npm run test`.

An example of the tests run on this application:

![JC Team Profile Generator](./assets/images/passed%20tests.png)




## Technologies used

- Node.js
- Inquirer to collect user input
- Jest to run unit tests

