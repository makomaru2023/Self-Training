// 使い方: node scripts/switch-free-set.js a
const fs = require("fs");
const path = require("path");
const key = process.argv[2];
if (!key) { console.error("usage: node scripts/switch-free-set.js <a|b|c|d>"); process.exit(1); }

const catalog = JSON.parse(fs.readFileSync("data/catalog.json", "utf8"));
const set = JSON.parse(fs.readFileSync(path.join("data/patterns", `${key}.json`), "utf8"));

const map = new Map(catalog.items.map(it => [it.id, it]));
const picked = set.ids.map(id => {
  const it = map.get(id);
  if (!it) throw new Error(`id not found in catalog: ${id}`);
  return it;
});

fs.writeFileSync("data/items.json", JSON.stringify({ items: picked }, null, 2));
console.log(`✔ generated data/items.json from pattern "${key}" (${picked.length} items)`);
