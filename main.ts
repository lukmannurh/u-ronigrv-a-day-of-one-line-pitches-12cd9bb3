// One-line pitch entry for "A Day of One-Line Pitches".
// Writes exactly one sentence to /output/entry.txt.
//
// The sentence was written fresh for this competition: it speaks to a
// friend who has never coded, and it makes handing over their first app
// idea feel easy and low-risk — describe it in plain words, watch it
// being built, and keep the idea if the result is not what they imagined.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// One sentence, plain words, no jargon, no promise beyond what is true:
// describing the idea costs nothing, and the idea stays theirs.
const PITCH =
  "You just describe your idea in plain words, the AI builds the app while you watch, and if you don't like it, you keep your idea and walk away — nothing to lose but an afternoon's curiosity.";

function main(): void {
  // Deterministic by construction: a constant string, no clock, no
  // randomness, no network. Every run writes the exact same bytes.
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, PITCH, "utf8");
}

main();
