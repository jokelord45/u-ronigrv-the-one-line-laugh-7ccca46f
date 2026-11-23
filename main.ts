import { mkdirSync, writeFileSync } from "node:fs";

// The One-Line Laugh — one funny line, a single sentence, at most 200 chars.
// Draft 2 (revision): sharper turn — "the moment" adds urgency, and
// "most attentive relationship I've had in years" lands the surprise
// harder than draft 1's "closest thing ... notices I'm gone".
const LINE =
  "My smart fridge texts me the moment the milk runs out, which makes it the most attentive relationship I've had in years.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
