const fs = require('fs');
const transcript = fs.readFileSync('C:/Users/USER/.gemini/antigravity/brain/ea5f734d-b171-458c-b1e9-b0ed239473cd/.system_generated/logs/transcript_full.jsonl', 'utf8');
const lines = transcript.split('\n');

for (let i = lines.length - 1; i >= 0; i--) {
  if (lines[i].includes('align') || lines[i].includes('candle') || lines[i].includes('slot-c1') || lines[i].includes('flame')) {
    try {
      const obj = JSON.parse(lines[i]);
      if (obj.content && obj.content.includes('slot-c1')) {
        console.log(`Step ${i}:`);
        const m = obj.content.match(/\.slot-c1[\s\S]*?\.slot-c5[^\n]*/);
        if (m) console.log(m[0]);
      }
    } catch(e){}
  }
}
