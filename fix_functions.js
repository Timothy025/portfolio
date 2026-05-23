const fs = require('fs');
const path = require('path');

const projectsDir = path.join(__dirname, 'src/app/projects');

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (file === 'page.tsx') {
      const projectName = path.basename(dir);
      if (projectName === 'feedzaa') continue; // Skip feedzaa
      
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const safeName = toTitleCase(projectName.replace(/[-_]/g, ' ')).replace(/\s+/g, '');
      
      // Fix the export default function line
      content = content.replace(/export default function .*?CaseStudy\(\) \{/, `export default function ${safeName}CaseStudy() {`);
      
      // Also fix the h1 title if it was broken
      content = content.replace(/<h1 className="text-5xl md:text-7xl font-bold font-space-grotesk tracking-tight mb-6 uppercase">\s*\{projectInfo\.title\}\s*<\/h1>/g, 
        `<h1 className="text-5xl md:text-7xl font-bold font-space-grotesk tracking-tight mb-6 uppercase">\n              ${safeName}\n            </h1>`);
        
      // Also fix any other `{...}` strings that leaked into the h1
      content = content.replace(/<h1 className="text-5xl md:text-7xl font-bold font-space-grotesk tracking-tight mb-6 uppercase">\s*\{[^}]*\}\s*<\/h1>/g, 
        `<h1 className="text-5xl md:text-7xl font-bold font-space-grotesk tracking-tight mb-6 uppercase">\n              ${safeName}\n            </h1>`);

      fs.writeFileSync(fullPath, content);
      console.log(`Fixed ${fullPath}`);
    }
  }
}

processDir(projectsDir);
