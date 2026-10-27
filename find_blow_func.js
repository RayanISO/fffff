const fs = require('fs');
const transcript = fs.readFileSync('C:/Users/USER/.gemini/antigravity/brain/ea5f734d-b171-458c-b1e9-b0ed239473cd/.system_generated/logs/transcript_full.jsonl', 'utf8');
const lines = transcript.split('\n');

for (let i = lines.length - 1; i >= 0; i--) {
  if (lines[i].includes('blowSingleCandle')) {
    try {
      const o = JSON.parse(lines[i]);
      if (o.content && o.content.includes('function blowSingleCandle')) {
        console.log(`Step ${i}:`);
        const m = o.content.match(/function blowSingleCandle[\s\S]*?function onAllCandlesBlown/);
        if (m) console.log(m[0]);
      }
    }catch(e){}
  }
}
