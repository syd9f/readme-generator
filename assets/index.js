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
      message: 'Enter Contribution Guidelines:',
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
    const githubUrl = '[Github](https://github.com/' + response.github + ') ';
    const tableOfContents = '\n1. [Description](#Description) \n2. [Installation](#Installation) \n3. [Usage](#usage) \n4. [License](#license) \n5. [Contributing](#contributing) \n6. [Tests](#tests) \n7. [Questions](#questions)\n';
    // license badges

    const apacheBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    const MITBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    const GNUBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

    if (response.license == 'MIT License') {
      var selectedLicense = MITBadge;
    } else if(response.license == 'Apache License') {
      var selectedLicense = apacheBadge;
    } else {
      var selectedLicense = GNUBadge;
    }

    // create readme using user input
    fs.writeFile('README.md', title + '\n' + selectedLicense + '\n## ' + headers[0] + '\n' + descInput + '\n## ' + headers[1] + '\n' + tableOfContents + '\n## ' + headers[2] + '\n' + installInput + '\n## ' + headers[3] + '\n' + usageInput + '\n## ' + headers[4] + '\n' + licenseDesc + '\n## ' + headers[5] + '\n' + contributionInput + '\n## ' + headers[6] + '\n' + testInstructions + '\n## ' + headers[7] + '\nContact for Questions: ' + '\n ' + githubUrl + '\nEmail: ' + response.email, (err) => {
      if(err) {
        console.log('There was an error: ' + err);
      } 
    });
  })
