
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

// table on content see slack. None to remove section. See slack🚫

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(data) {
if (data.license === "Apache") {
  return "https://www.apache.org/licenses/LICENSE-2.0"
 }

 if (data.license === "MIT") {
   return "https://opensource.org/licenses/MIT"
 }

 if (data.license === "Boost") {
   return "https://www.boost.org/users/license.html"
 }

 if (data.license === "Eclipse") {
   return "https://www.eclipse.org/legal/epl-2.0/"
 }

 if (data.license === "IBM") {
   return "https://www-40.ibm.com/software/sla/sladb.nsf"
 }
 // Might need work     
 if (data.license === "None") {
   return ""
 }
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (data.license === "") {
    return 
  }
}

// TODO: Create a function to generate markdown for README
// look at why it returns a #. Research .md sent from Juan 🚫
function generateMarkdown(data) {
  return `# ${data.title}

# Table of Contents 
#### Description
#### Installation
#### Usage
#### Contributing
#### Tests
#### License
#### Questions

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
  ${renderLicenseLink(data)}

  # Questions
  ${data.Email}
  ${data.GitHub}

`;
}

// Exporting function (Hint: require in other files. Give access)
module.exports = generateMarkdown;

