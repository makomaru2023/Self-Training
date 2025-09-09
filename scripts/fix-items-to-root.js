const fs = require('fs');
const p = 'data/items.json';
const j = JSON.parse(fs.readFileSync(p, 'utf8'));
j.items = j.items.map(x => ({
  ...x,
  previewSrc: `/${x.id}.png`,
  fileKey: `/${x.id}.png`,
}));
fs.writeFileSync(p, JSON.stringify(j, null, 2));
console.log('updated:', p);
