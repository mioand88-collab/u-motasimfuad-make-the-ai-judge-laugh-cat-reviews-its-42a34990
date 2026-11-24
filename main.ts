// Make the AI Judge Laugh: Cat Reviews Its Human
// Writes one funny single-line one-star review, written by a house cat
// about its human, to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// The line must be 1-200 characters, a single line, and not only whitespace.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One star. The bowl was empty for six whole minutes, so I screamed into his sleeping face at 4 a.m. He called me dramatic.";

function main(): void {
  // Count code points, not UTF-16 units, so the gate's character count matches.
  const charCount = [...REVIEW].length;
  if (charCount < 1 || charCount > 200) {
    throw new Error(`review must be 1-200 characters, got ${charCount}`);
  }
  if (REVIEW.trim().length === 0) {
    throw new Error("review must not be only whitespace");
  }
  if (/[\r\n]/.test(REVIEW)) {
    throw new Error("review must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, REVIEW, "utf8");
  // Verify the file round-trips exactly: what the judge reads is what we wrote.
  if (readFileSync(outPath, "utf8") !== REVIEW) {
    throw new Error("entry.txt does not match the review line");
  }
}

main();
