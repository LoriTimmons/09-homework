
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === "Apache") {
   return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }

  if (data.license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }

  if (data.license === "Boost") {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  }

  if (data.license === "Eclipse") {
    return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  }

  if (data.license === "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  }
  // Might need work     
  if (data.license === "None") {
    return ""
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// table on content see slack. None to remove section 
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// look at why it returns a #. Research .md sent from Juan 🚫
function generateMarkdown(data) {
  return `# ${data.title}

  # Description
  ${data.Description}

  # Installation
  ${data.Installation}

  # Usage
  ${data.Usage}

  # Contributing
  ${data.Contributing}

  
  # Tests
  ${data.Test}

  # License
  ${renderLicenseBadge(data)}

  # Questions
  ${data.Email}
  ${data.GitHub}

`;
}

// Exporting function (Hint: require in other files. Give access)
module.exports = generateMarkdown;

