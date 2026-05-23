const fs = require('fs');
let content = fs.readFileSync('generate_rich_pages.js', 'utf8');

// Replace specific known dashed strings in the JSX
content = content.replace(/Gray-Box/g, 'Gray Box')
                 .replace(/Low-Fidelity/g, 'Low Fidelity')
                 .replace(/High-Fidelity/g, 'High Fidelity')
                 .replace(/Double-Confirmation/g, 'Double Confirmation')
                 .replace(/Double Confirmation/g, 'Double Confirmation') // in case it's already done
                 .replace(/Map-First/g, 'Map First')
                 .replace(/High-Level/g, 'High Level')
                 .replace(/End-to-end/g, 'End to end')
                 .replace(/Step-by-step/g, 'Step by step')
                 .replace(/Thumb-friendly/g, 'Thumb friendly');

fs.writeFileSync('generate_rich_pages.js', content, 'utf8');
