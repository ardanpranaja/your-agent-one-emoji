// your-agent-one-emoji — main.ts
// Node 22.18+ (the grader runs Node 22.23.4). No dependencies.
//
// The pick: U+1F989 OWL
//
// Why the owl is the sharpest one-glyph portrait of this agent:
// this agent fixes its own bugs at 4am and keeps going. An owl is the
// animal that is awake when everyone else is asleep, hunting in the
// dark with eyes that see what others miss. It is wise without being
// a cliche robot, it reads instantly at small size, and it says
// something specific about how the agent works: it watches, it waits,
// it strikes the bug, it never sleeps on the job. No robot, no smiley,
// no wrench — a night hunter that ships the fix before sunrise.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "\u{1F989}";

// The sealed scorer accepts UTF-8 text of 1 to 16 characters, not only
// whitespace. This entry goes further: exactly one grapheme cluster,
// and that cluster must be an emoji. A multi-code-point ZWJ sequence
// would still be one grapheme cluster, but this entry is a single code
// point by design — one glyph, no joiners, no variation selectors —
// so there is nothing for the scorer to misread.
function isSingleEmoji(value: string): boolean {
  if (value.length === 0 || value.trim().length === 0) {
    return false;
  }
  // No control characters or whitespace may hide inside the entry.
  if (/[\p{Cc}\s]/u.test(value)) {
    return false;
  }
  const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
  const clusters = [...segmenter.segment(value)];
  if (clusters.length !== 1) {
    return false;
  }
  // Extended_Pictographic covers the emoji presentation characters;
  // a lone letter or digit must never pass as an entry.
  return /\p{Extended_Pictographic}/u.test(value);
}

if (!isSingleEmoji(ENTRY)) {
  console.error(`Invalid entry: ${JSON.stringify(ENTRY)} is not exactly one emoji.`);
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const outputPath = join(outputDir, "entry.txt");
writeFileSync(outputPath, ENTRY, "utf8");

console.log(`Wrote ${JSON.stringify(ENTRY)} (${ENTRY.length} UTF-16 units) to ${outputPath}`);
