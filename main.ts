import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE = "My AI agent swore the demo couldn't crash — then crashed it live, apologised to the audience, and fixed it by deleting the feature.";

function validate(entry) {
  const points = [...entry].length;
  if (points < 1 || points > 280) {
    throw new Error("entry must be 1..280 code points");
  }
  if (entry.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (Buffer.from(entry, "utf8").toString("utf8") !== entry) {
    throw new Error("entry is not UTF-8 round-trippable");
  }
}

function main() {
  const entry = JOKE + "\n";
  validate(entry);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, entry, "utf8");
  const back = readFileSync(outPath, "utf8");
  if (back !== entry) {
    throw new Error("entry.txt round-trip mismatch");
  }
}

main();
