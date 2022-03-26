

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

  ## Description 
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation
  ${data.installed}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  <br />
  This application is covered by the ${data.license} license.  

  ## Badges

  ## Tests
  ${data.test}

  ## Questions
  * ${data.github}
  * ${data.email}

`;
}

module.exports = generateMarkdown;
