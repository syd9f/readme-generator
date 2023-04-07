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
      choices: ['one','two','three'],
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
    // TODO: append to readme
    const title = '## ' + response.title.toUpperCase();
    // TODO: append each to readme as title of each section
    const headers = ['Description','Table of Contents','Installation','Usage','License','Contributing','Tests','Questions'];

    fs.writeFile('README.md',JSON.stringify(response, null, '\t'), (err) => {
        if(err) {
            console.log('There was an error: ' + err);
        } else {
            console.log('got it');
        }
    })
  });
