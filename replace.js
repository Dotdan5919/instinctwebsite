const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content.replace(/import (\w+) from ['"]@\/images\/([^'"]+)['"]/g, 'const $1 = "/images/$2"');
  newContent = newContent.replace(/bg-\[url\(['"]\.\.\/images\//g, "bg-[url('/images/");
  newContent = newContent.replace(/url\(['"]\.\.\/images\//g, "url('/images/");
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Replaced in ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.css')) {
      replaceInFile(filePath);
    }
  }
}

walkDir('./');