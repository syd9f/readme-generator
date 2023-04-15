# readme-generator
Module 9 : Node JS

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Usage

![Gif](./assets/images/readme-generator.gif)

[Link to Video](https://drive.google.com/file/d/156VNzWUeiNWrLYxjCnFjhhA0ppiTzyCt/view)

When opening the project assets folder in the terminal, the user can initiate the application by typing 'node index.js'. This will begin a series of prompts that the user can answer. Once all of the prompts have been answered, a professional Readme File is generated using the answers provided.

## Installation
Requires Node.js and the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4)

## Credits
https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository
https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
