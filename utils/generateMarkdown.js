// edge case: 
// Make "license" in TOC disappear 
// TODO: Include packages needed for this application

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

function renderLicenseLink(data) {
if (data.license === "Apache") {
  return "<https://www.apache.org/licenses/LICENSE-2.0>"
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
function renderLicenseSection(data) {
  if (data.license === "None") {
    return ""
  } else {
    return `
    ${renderLicenseBadge(data)} 
    <br>
    ${renderLicenseLink(data)}`
  }
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var licenseCheck = renderLicenseSection(data);
  var licenseTitle = "## License";
  return `${renderLicenseBadge(data)}
  # ${data.title}

## Table of Contents 
* [Description](#Description)  <br>
* [Installation](#Installation)<br>
* [Usage](#Usage)<br>
* [Contributing](#Contributing)<br>
* [Tests](#Tests)<br>
* [License](#License)<br>
* [Questions / Issues](#Questions)<br>

  ## Description
  ${data.Description}

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## Contributing
  ${data.Contribution} <br>
  This is an open source project, and I welcome contributors. Please refer to the code of conduct.  
  [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) 
  

  ## Tests
  ${data.Test}
  
  ${(licenseCheck !== "") ? licenseTitle: ""}

  ${(licenseCheck !== "") ? renderLicenseBadge(data):""}
  <br>
  ${(licenseCheck !== "") ? renderLicenseLink(data):""} 

  ## Questions / Report an Issue
  #### Contact Me @: ${data.Email}<br>
  #### GitHub Profile: ${data.GitHub}
`;
}

// Exporting function (Hint: require in other files. Give access)
module.exports = generateMarkdown;

