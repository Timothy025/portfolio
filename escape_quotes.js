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

      if (content.includes("isn't")) {
        content = content.replace(/isn't/g, "isn&apos;t");
        changed = true;
      }
      
      if (content.includes("user's")) {
        content = content.replace(/user's/g, "user&apos;s");
        changed = true;
      }
      
      if (content.includes("users'")) {
        content = content.replace(/users'/g, "users&apos;");
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log(`Escaped quotes in ${fullPath}`);
      }
    }
  }
}

processDir(projectsDir);
