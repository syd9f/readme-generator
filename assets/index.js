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
      message: 'List Table of Contents',
      name: 'toc',
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
      type: 'input',
      message: 'Select a License from the following options:',
      name: 'license',
    },
    {
        type: 'input',
        message: 'Enter Contribution Guidelines;',
        name: 'contibuting',
    },
    {
        type: 'input',
        message: 'Enter Test Instructions:',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter Questions:',
        name: 'questions',
    },

  ])
  .then((response) =>
    fs.appendFile('README.md',JSON.stringify(response, null, '\t'), (err) => {
        if(err) {
            console.log('There was an error: ' + err);
        } else {
            console.log('got it');
        }
    })
  );
