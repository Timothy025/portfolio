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
      
      const navRegex = /\{\/\*\s*Navigation\s*\*\/\}\s*<div className="fixed top-0 left-0 right-0 z-50[^>]*>\s*<div[^>]*>\s*<Button[^>]*>\s*<Link[^>]*>\s*<ArrowLeft[^>]*\/>\s*(?:Back to Projects|Back to work)\s*<\/Link>\s*<\/Button>\s*<\/div>\s*<\/div>/m;

      if (navRegex.test(content)) {
        const newNav = `{/* Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <Button variant="ghost" size="icon" asChild className="rounded-full bg-background/40 backdrop-blur-md border border-white/10 hover:bg-white/10 shadow-lg w-12 h-12">
          <Link href="/#work">
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </Button>
      </div>`;
        content = content.replace(navRegex, newNav);
        fs.writeFileSync(fullPath, content);
        console.log(`Updated nav in ${fullPath}`);
      }
    }
  }
}

processDir(projectsDir);
