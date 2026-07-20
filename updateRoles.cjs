const fs = require('fs');
const path = 'e:/2026/PortFolioNEW/src/data/projects.js';
let content = fs.readFileSync(path, 'utf8');

// Add role to all projects
content = content.replace(/(company:\s*".*?",)/g, '$1\n    role: "Full Stack Developer",');

// Special case for Aarambh Web
content = content.replace(
  /(id:\s*"aarambh-web",[\s\S]*?company:\s*".*?",\n\s*role:\s*)"Full Stack Developer"(,)/g,
  '$1"Frontend Developer"$2'
);

fs.writeFileSync(path, content, 'utf8');
console.log('Done!');
