const fs = require('fs'); 
const path = require('path');

const root = path.join(__dirname, '..');
const previewsDir = path.join(root, 'public', 'previews');
const filesDir = path.join(root, 'public', 'files');
const outPath = path.join(root, 'data', 'items.json');

// 001〜040を配列で作成
const ids = Array.from({length: 40}, (_,i)=> String(i+1).padStart(3,'0'));

function exists(p){ try{ fs.accessSync(p); return true; } catch { return false; } }

const items = ids.map(n=>{
  const id = `sozai-${n}`;
  const title = Number(n) <= 21 
    ? `【文字あり】${id}` 
    : `【文字なし・編集可】${id}`;

  const webp = exists(path.join(previewsDir, `${id}.webp`));
  const pngPrev = exists(path.join(previewsDir, `${id}.png`));
  const pngFile = exists(path.join(filesDir, `${id}.png`));

  const previewSrc = webp 
    ? `/previews/${id}.webp` 
    : pngPrev 
      ? `/previews/${id}.png` 
      : (pngFile ? `/files/${id}.png` : `/previews/${id}.webp`);

  const fileKey = pngFile ? `/files/${id}.png` : previewSrc;

  return { 
    id, 
    title, 
    category: "upper", 
    posture: "sitting", 
    previewSrc, 
    fileKey, 
    free: true 
  };
});

fs.writeFileSync(outPath, JSON.stringify({items}, null, 2), 'utf8');
console.log('✅ data/items.json を更新:', items.length, '件');
