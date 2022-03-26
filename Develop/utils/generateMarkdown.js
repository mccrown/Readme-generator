

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
  Run the following command at th root of your project and answer the prompted questions:
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  <br />
  This application is covered by the ${data.license} license.  

  ## Badges

  ## Tests
  You can see a test video of this application at the link below.
  ${data.test}

  ## Questions
  Email me or reach out on GitHub
  * ${data.github}
  * ${data.email}

`;
}

module.exports = generateMarkdown;
