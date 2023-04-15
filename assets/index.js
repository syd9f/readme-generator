const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter the title of your project:',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter a description:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter Installation requirements:',
      name: 'install',
    },
    {
      type: 'input',
      message: 'Enter Usage information:',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'Select a License from the following options:',
      name: 'license',
      choices: ['MIT License','Apache License','GNU General Public License (GPL)'],
    },
    {
      type: 'input',
      message: 'Enter Contribution Guidelines;',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'Enter Test Instructions:', 
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Enter GitHub username:',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Enter email:',
      name: 'email',
    },

  ])
  .then((response) => {
    const title = '# ' + response.title.toUpperCase();
    const headers = ['Description','Table of Contents','Installation','Usage','License','Contributing','Tests','Questions'];
    const descInput = response.description;
    const installInput = response.install;
    const usageInput = response.usage;
    const licenseDesc = "This project is licensed under the terms of the " + response.license;
    const contributionInput = response.contributing;
    const testInstructions = response.tests;

    // create readme using user input
    fs.writeFile('README.md',title + '\n## ' + headers[0] + '\n' + descInput + '\n## ' + headers[1] + '\n## ' + headers[2] + '\n' + installInput + '\n## ' + headers[3] + '\n' + usageInput + '\n## ' + headers[4] + '\n' + licenseDesc + '\n## ' + headers[5] + '\n' + contributionInput + '\n## ' + headers[6] + '\n' + testInstructions + '\n## ' + headers[7] + '\n' + 'Contact for Questions: ' + '\n' + 'Github: ' + response.github + '\n' + 'Email: ' + response.email, (err) => {
      if(err) {
        console.log('There was an error: ' + err);
      } 
    });
  })
