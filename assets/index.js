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

    // add project title
    fs.writeFile('README.md',title, (err) => {
      if(err) {
        console.log('There was an error: ' + err);
      } 
    });
  
    // add description section title
    fs.appendFile('README.md','\n## ' + headers[0], (err) => {
      if(err) {
        console.log('There was an error: ' + err);
      } 
    });

    // add description
    fs.appendFile('README.md','\n' + descInput, (err) => {
      if(err) {
        console.log('There was an error: ' + err);
      } 
    });

     // add TABLE oF Contents section title
     fs.appendFile('README.md','\n## ' + headers[1], (err) => {
      if(err) {
        console.log('There was an error: ' + err);
      } 
    });

        //   // TODO: append Table of Contents
      //   for (const header of headers){
      //     console.log("[" + header + "](#" + header + ")");
      //   }

     // add Installation section title
     fs.appendFile('README.md','\n## ' + headers[2], (err) => {
      if(err) {
        console.log('There was an error: ' + err);
      } 
    });

    // add installation input
    fs.appendFile('README.md','\n' + installInput, (err) => {
      if(err) {
        console.log('There was an error: ' + err);
      } 
    });

     // add Usage section title
    fs.appendFile('README.md','\n## ' + headers[3], (err) => {
      if(err) {
        console.log('There was an error: ' + err);
      } 
    });

     // add Usage input
    fs.appendFile('README.md','\n' + usageInput, (err) => {
      if(err) {
        console.log('There was an error: ' + err);
      } 
    });

     // add License section title
    fs.appendFile('README.md','\n## ' + headers[4], (err) => {
      if(err) {
        console.log('There was an error: ' + err);
      } 
    });

    // add License input
    fs.appendFile('README.md','\n' + licenseDesc, (err) => {
      if(err) {
        console.log('There was an error: ' + err);
      } 
    });

     // add Contributing section title
    fs.appendFile('README.md','\n## ' + headers[5], (err) => {
      if(err) {
        console.log('There was an error: ' + err);
      } 
    });

    // add Contributing input
    fs.appendFile('README.md','\n' + contributionInput, (err) => {
      if(err) {
        console.log('There was an error: ' + err);
      } 
    });

     // add Tests section title
    fs.appendFile('README.md','\n## ' + headers[6], (err) => {
      if(err) {
        console.log('There was an error: ' + err);
      } 
    });

    // add Tests input
    fs.appendFile('README.md','\n' + testInstructions, (err) => {
      if(err) {
        console.log('There was an error: ' + err);
      } 
    });

     // add Questions section title
     fs.appendFile('README.md','\n## ' + headers[7], (err) => {
      if(err) {
        console.log('There was an error: ' + err);
      } 
    });

     // add Questions section title
     fs.appendFile('README.md','\n' + 'Contact for Questions: ' + '\n' + 'Github: ' + response.github + '\n' + 'Email: ' + response.email, (err) => {
      if(err) {
        console.log('There was an error: ' + err);
      } 
    });

    


  })

      //   // TODO: append to Questions section
      //   console.log("Contact for Questions: ");
      //   console.log("Github: " + response.github);
      //   console.log("Email: " + response.email);
      // }
  //   })
  // });
