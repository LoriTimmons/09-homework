
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Call in Generate markdown 
// renderLicenseBadge (if statement) see slack for help. Write in license section below. Add option none. See Juans info
// ${data.License} will be replaced but I call it thru
function renderLicenseBadge(license) {
  if (data.license === Apache) {
    [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  }

  if (data.license === MIT) {
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  }

  if (data.license === Boost) {
    [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
  }

  if (data.license === IBM) {
    [![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
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
  ${data.description}

  # Installation
  ${data.Installation}

  # Usage
  ${data.Usage}

  # Contributing
  ${data.Contributing}

  
  # Tests
  ${data.Test}

  # License
  ${data.renderLicenseBadge} 

  # Questions
  ${data.Email}
  ${data.Github}

`;
}

// Exporting function (Hint: require in other files. Give access)
module.exports = generateMarkdown;

