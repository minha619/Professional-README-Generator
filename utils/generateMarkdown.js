// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge (license) {
  if (license){
    return `![${license} License (https://img.shields.io/badge/license-${data.license}-lightgrey)`;
  }else{
    return '';
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## License:
![License](https://img.shields.io/badge/license-${data.license}-blue)

## Table of Contents:
* [Description](#description)
  
* [Installation Instructions](#installation)
  
* [Usage Information](#usage)
  
* [Contribution Guidelines](#contribution)
  
* [Testing Instructions](#testing)
  
* [Additional Information](#additional-info)

## Description:
${data.description}

## Installation:
${data.installation}

## Usage:
${data.usage}

## License:
${data.license}

## Contribution:
${data.contribution}

## Testing:
${data.test}

## Additional Questions:
- Github: [${data.github}](https://github.com/${data.github})
  
- For additional questions about the project, please reach out to ${data.email}

`;
}

module.exports = generateMarkdown;
