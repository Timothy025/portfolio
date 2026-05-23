const fs = require('fs');
const file = 'generate_rich_pages.js';
let content = fs.readFileSync(file, 'utf8');

// We want to replace word-dash-word with word-space-word in text.
// To do this safely without breaking CSS classes (like `bg-red-500` or `text-sm`),
// we'll only do the replacement inside specific fields.

const targetFields = [
  'tagline', 'overview1', 'overview2', 'challengeTitle', 'challengeDesc',
  'roleSubtitle', 'roleDesc', 'role1Label', 'role1Archetype', 'role1Desc',
  'role1ScreenTitle', 'role1ScreenFilter', 'role2Label', 'role2Archetype',
  'role2Desc', 'role2ScreenTitle', 'role2ScreenFilter', 'designEvolutionDesc',
  'wireframeDesc', 'designSystemDesc', 'designMove1Title', 'designMove1Sub',
  'designMove1Desc', 'designMove2Title', 'designMove2Sub', 'designMove2Desc',
  'designMove3Title', 'designMove3Sub', 'designMove3Desc', 'learningQuote',
  'learningDesc', 'label', 'desc', 'name', 'slot', 'rate', 'info', 'title',
  'role1Items', 'role2Items'
];

// Instead of parsing AST, let's just use a careful regex on the whole file 
// but avoid any string that looks like a CSS class or HTML tag.
// Actually, it's safer to just replace specific words we know are dashed in the text, OR
// do a regex replace but only on lines that do NOT contain `className=` or `<`

// A safer regex: find all strings wrapped in quotes that follow a field name.
let newContent = content;
targetFields.forEach(field => {
  const regex = new RegExp(`(${field}\\s*:\\s*)(["'\`])(.*?)(["'\`])`, 'g');
  newContent = newContent.replace(regex, (match, prefix, q1, text, q2) => {
    // replace dash between letters
    const unDashed = text.replace(/([a-zA-Z])-([a-zA-Z])/g, '$1 $2');
    return `${prefix}${q1}${unDashed}${q2}`;
  });
});

// Also handle arrays of strings like role1Items: [ "...", "..." ]
const arrayFields = ['role1Items', 'role2Items'];
arrayFields.forEach(field => {
  const regex = new RegExp(`(${field}\\s*:\\s*\\[)([^\\]]+)(\\])`, 'g');
  newContent = newContent.replace(regex, (match, prefix, items, suffix) => {
    const unDashedItems = items.replace(/([a-zA-Z])-([a-zA-Z])/g, '$1 $2');
    return `${prefix}${unDashedItems}${suffix}`;
  });
});

// Let's also do a global replace for "R-One", "R-one", "R-Score", "R-score", "E-Commerce", "e-commerce" just to be completely sure.
newContent = newContent.replace(/R-One/g, 'R One')
                       .replace(/R-one/g, 'R one')
                       .replace(/R-Score/g, 'R Score')
                       .replace(/R-score/g, 'R score')
                       .replace(/E-Commerce/g, 'E Commerce')
                       .replace(/e-commerce/g, 'e Commerce');

// Also check page.tsx
let pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');
pageContent = pageContent.replace(/R-One/g, 'R One')
                         .replace(/R-one/g, 'R one')
                         .replace(/E-Commerce/g, 'E Commerce')
                         .replace(/e-commerce/g, 'e Commerce');

fs.writeFileSync('generate_rich_pages.js', newContent, 'utf8');
fs.writeFileSync('src/app/page.tsx', pageContent, 'utf8');
console.log('Dashes removed from text fields!');
