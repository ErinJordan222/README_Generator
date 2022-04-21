

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)

  ## Description:
  ${data.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Test](#test)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Questions](#questions)

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Contribution:
  ${data.contribution}

  ## Test:
  ${data.test}

  ## Questions?
  Any questions feel free to contact me at ${data.email} or ${data.github}
  

`;
}

module.exports = generateMarkdown;
