const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'generate_rich_pages.js');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Replace the .map loops and SVG conditionals to be evaluated inside node string interpolation
content = content.replace(
  /\{data\.stats\.map\(\(stat,\s*i\)\s*=>\s*\([\s\S]*?className="p-6 rounded-2xl bg-card\/30[\s\S]*?<\/motion\.div>\s*\}\)\}/g,
  `\\\${data.stats.map((stat, i) => \\\`
              <motion.div 
                key={\\\${i}} 
                variants={fadeInUp} 
                className="p-6 rounded-2xl bg-card/30 border border-border/30 flex flex-col justify-between hover:border-foreground/20 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[\\\${data.color}]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <div className="text-4xl font-black font-space-grotesk bg-gradient-to-r from-[\\\${data.color}] to-foreground bg-clip-text text-transparent">
                    \\\${stat.metric}
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-space-grotesk tracking-wide text-foreground mb-1">
                      \\\${stat.label}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      \\\${stat.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            \\\`).join('\\n')}`
);

content = content.replace(
  /\{data\.breakdowns\.map\(\(item,\s*idx\)\s*=>\s*\([\s\S]*?className="p-6 rounded-2xl bg-card\/30 border border-border\/30[\s\S]*?<\/div>\s*\}\)\}/g,
  `\\\${data.breakdowns.map((item, idx) => \\\`
                <div key={\\\${idx}} className="p-6 rounded-2xl bg-card/30 border border-border/30 backdrop-blur-md space-y-3">
                  <span className="text-xs font-mono text-[\\\${data.color}]">\\\${item.num}</span>
                  <p className="text-sm text-muted-foreground/90 leading-relaxed text-justify">
                    \\\${item.desc}
                  </p>
                </div>
              \\\`).join('\\n')}`
);

content = content.replace(
  /\{data\.role1Items\.map\(\(item,\s*idx\)\s*=>\s*\([\s\S]*?CheckCircle2[\s\S]*?<\/li>\s*\}\)\}/g,
  `\\\${data.role1Items.map((item, idx) => \\\`
                      <li key={\\\${idx}} className="flex gap-3 text-sm text-muted-foreground text-justify">
                        <CheckCircle2 className="w-4 h-4 text-[\\\${data.color}] flex-shrink-0 mt-0.5" />
                        <span>\\\${item}</span>
                      </li>
                    \\\`).join('\\n')}`
);

content = content.replace(
  /\{data\.role1ScreenItems\.map\(\(item,\s*idx\)\s*=>\s*\([\s\S]*?font-bold text-foreground[\s\S]*?<\/div>\s*\}\)\}/g,
  `\\\${data.role1ScreenItems.map((item, idx) => \\\`
                      <div key={\\\${idx}} className="p-3 rounded-lg bg-card/60 border border-border/40 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-foreground">\\\${item.name}</div>
                          <div className="text-[10px]">\\\${item.slot}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-[\\\${data.color}] text-xs">\\\${item.rate}</div>
                          <div>\\\${item.info}</div>
                        </div>
                      </div>
                    \\\`).join('\\n')}`
);

content = content.replace(
  /\{data\.role2Items\.map\(\(item,\s*idx\)\s*=>\s*\([\s\S]*?CheckCircle2[\s\S]*?<\/li>\s*\}\)\}/g,
  `\\\${data.role2Items.map((item, idx) => \\\`
                      <li key={\\\${idx}} className="flex gap-3 text-sm text-muted-foreground text-justify">
                        <CheckCircle2 className="w-4 h-4 text-[\\\${data.color}] flex-shrink-0 mt-0.5" />
                        <span>\\\${item}</span>
                      </li>
                    \\\`).join('\\n')}`
);

content = content.replace(
  /\{data\.role2ScreenItems\.map\(\(item,\s*idx\)\s*=>\s*\([\s\S]*?bg-card\/60 border border-border\/30[\s\S]*?<\/div>\s*\}\)\}/g,
  `\\\${data.role2ScreenItems.map((item, idx) => \\\`
                      <div key={\\\${idx}} className="p-2.5 rounded-lg bg-card/60 border border-border/30 text-[10px]">
                        <span className="font-bold text-foreground block mb-0.5">\\\${item.name}</span>
                        \\\${item.slot} • \\\${item.rate}
                      </div>
                    \\\`).join('\\n')}`
);

content = content.replace(
  /\{data\.checkpoints\.map\(\(item,\s*idx\)\s*=>\s*\([\s\S]*?font-bold text-foreground font-space-grotesk[\s\S]*?<\/div>\s*\}\)\}/g,
  `\\\${data.checkpoints.map((item, idx) => \\\`
                <div key={\\\${idx}} className="space-y-2 text-justify">
                  <h4 className="font-bold text-foreground font-space-grotesk uppercase tracking-wider text-xs">0{\\\${idx+1}} / \\\${item.title}</h4>
                  <p className="text-sm text-justify">\\\${item.desc}</p>
                </div>
              \\\`).join('\\n')}`
);

content = content.replace(
  /\{data\.designMove1Svg\s*&&\s*\([\s\S]*?dangerouslySetInnerHTML=\{\{\s*__html:\s*data\.designMove1Svg\s*\}\}[\s\S]*?\)\}/g,
  `\\\${data.designMove1Svg ? \\\`
                    <div dangerouslySetInnerHTML={{ __html: \\\`\\\$\\\${data.designMove1Svg}\\\` }} className="w-full" />
                  \\\` : ''}`
);

content = content.replace(
  /\{data\.designMove3GraphSvg\s*&&\s*\([\s\S]*?dangerouslySetInnerHTML=\{\{\s*__html:\s*data\.designMove3GraphSvg\s*\}\}[\s\S]*?\)\}/g,
  `\\\${data.designMove3GraphSvg ? \\\`
                  <div dangerouslySetInnerHTML={{ __html: \\\`\\\$\\\${data.designMove3GraphSvg}\\\` }} />
                \\\` : ''}`
);

// 2. Unescape all backslash-escaped data. expressions
content = content.replace(/\\+\$\{data\./g, '${data.');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated generate_rich_pages.js with correct template literals and unescaped properties!');
