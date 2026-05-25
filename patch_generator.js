const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'generate_clean_pages.js');
let content = fs.readFileSync(filePath, 'utf8');

const replacement = `  let rolesTabsHtml = '';
  if (data.rolesInRow) {
    rolesTabsHtml = \`
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h4 className="font-bold text-lg">\${data.role1Label || ''}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">\${data.role1Desc || ''}</p>
                \${data.role1Items ? \`<ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  \${data.role1Items.map(item => \`<li>\${item}</li>\`).join('\\n                  ')}
                </ul>\` : ''}
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h4 className="font-bold text-lg">\${data.role2Label || ''}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">\${data.role2Desc || ''}</p>
                \${data.role2Items ? \`<ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  \${data.role2Items.map(item => \`<li>\${item}</li>\`).join('\\n                  ')}
                </ul>\` : ''}
              </CardContent>
            </Card>
          </div>\`;
  } else if (data.role2Name) {`;

content = content.replace("  let rolesTabsHtml = '';\n  if (data.role2Name) {", replacement);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully patched generate_clean_pages.js');
