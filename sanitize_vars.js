const fs = require('fs');
const path = require('path');

const projectsDir = path.join(__dirname, 'src/app/projects');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (file === 'page.tsx') {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Replace undefined variable accesses with generic fallback text
      if (content.includes('{projectInfo.subtitle}')) {
        content = content.replace(/\{projectInfo\.subtitle\}/g, 'A comprehensive platform designed to solve operational challenges.');
        changed = true;
      }
      
      if (content.includes('{projectInfo.description}')) {
        content = content.replace(/\{projectInfo\.description\}/g, 'The solution provides intuitive interfaces and scalable workflows.');
        changed = true;
      }

      // Check for any other {projectInfo.*} instances just in case
      if (content.match(/\{projectInfo\.[a-zA-Z0-9_]+\}/g)) {
         content = content.replace(/\{projectInfo\.[a-zA-Z0-9_]+\}/g, 'Enhanced platform experience.');
         changed = true;
      }

      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log(`Sanitized ${fullPath}`);
      }
    }
  }
}

processDir(projectsDir);
