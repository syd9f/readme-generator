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
      choices: ['MIT License','two','three'],
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
   
    fs.writeFile('README.md',JSON.stringify(response, null, '\t'), (err) => {
      if(err) {
        console.log('There was an error: ' + err);
      } else {
        // TODO: append title to readme
        const title = '# ' + response.title.toUpperCase();
        console.log(title);
        // TODO: append each header to readme
        const headers = ['Description','Table of Contents','Installation','Usage','License','Contributing','Tests','Questions'];
        for (const header of headers){
          console.log('## ' + header.toUpperCase());
        };
        // TODO: append user inputted description
        const descInput = response.description;
        console.log(descInput); 
        // TODO: append table of contents with links
        for (const header of headers){
          console.log("[" + header + "](#" + header + ")");
        }
        // TODO: append to license section
        const licenseDesc = "This project is licensed under the terms of the " + response.license;
        console.log(licenseDesc);

      }
    })
  });
