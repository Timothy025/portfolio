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
      
      // The timeline block typically looks like this:
      // <div>
      //   <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Timeline</h4>
      //   <p className="font-medium text-sm">...</p>
      // </div>
      
      const timelineRegex = /<div>\s*<h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Timeline<\/h4>\s*<p className="font-medium text-sm">[^<]*<\/p>\s*<\/div>/g;
      
      if (timelineRegex.test(content)) {
        content = content.replace(timelineRegex, '');
        
        // Change md:grid-cols-4 to md:grid-cols-3
        // Only do this in the overview block, let's just do a specific replace
        content = content.replace(/className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white\/5"/g, 'className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/5"');
        
        fs.writeFileSync(fullPath, content);
        console.log(`Removed timeline from ${fullPath}`);
      }
    }
  }
}

processDir(projectsDir);
