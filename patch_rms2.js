const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'projectsData.js');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  /"rms": \{/,
  `"rms": {
    rolesInRow: true,`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully patched projectsData.js for rms rolesInRow');
