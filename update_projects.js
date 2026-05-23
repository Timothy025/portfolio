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

      // 1. Update root container
      content = content.replace(
        /<div className="min-h-screen bg-gradient-to-br from-background via-background to-muted\/20">/g,
        '<div className="min-h-screen bg-background text-foreground selection:bg-blue-500/20 selection:text-foreground">'
      );

      // 2. Wrap hero content in the new card pattern
      // We will look for: <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
      const heroContainerRegex = /<div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">([\s\S]*?)<\/motion\.div>\s+<\/div>\s+<\/motion\.div>\s+{\/\* Main Content \*\/}/;
      
      const match = heroContainerRegex.exec(content);
      if (match) {
        // We actually want to replace just the `<div className="container...` part up to the end of the hero
        // Actually, it's safer to just replace the class of the container and add the inner motion div.
        
        content = content.replace(
          /<div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">/,
          `<div className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 pt-32 pb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden bg-card/40 border border-border/30 backdrop-blur-2xl p-8 sm:p-12 lg:p-16 flex flex-col shadow-2xl"
          >
            {/* Subtle internal glow & grain */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />`
        );
        
        // Find where the hero ends:
        // usually it ends before: {/* Main Content */}
        content = content.replace(
          /(\s*)<\/div>\s*<\/motion\.div>\s*{\/\* Main Content \*\/}/,
          `$1  </motion.div>\n$1</div>\n$1</motion.div>\n\n$1{/* Main Content */}`
        );
      }

      // 3. Update all secondary Cards
      content = content.replace(
        /<Card className="border-0 shadow-lg bg-background\/50 backdrop-blur-sm">/g,
        '<Card className="border border-border/30 bg-card/40 backdrop-blur-2xl shadow-xl rounded-3xl">'
      );
      
      // Update other cards to match if needed
      content = content.replace(
        /className="border border-white\/5 bg-background\/50 (.*?)"/g,
        'className="border border-border/30 bg-card/40 backdrop-blur-2xl shadow-xl rounded-3xl $1"'
      );

      fs.writeFileSync(fullPath, content);
      console.log(`Updated ${fullPath}`);
    }
  }
}

processDir(projectsDir);
