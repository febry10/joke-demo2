// Entry for make.fun bounty the-joke-about-the-demo-20261123-0112.
// Writes one one-line joke about a product demo going wrong beside an
// AI coding agent to entry.txt in the output directory
// (MAKEFUN_OUTPUT_DIR, default /output).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke text, without its trailing newline (added on write).
// Final (pass 3): reworked to the judge's criterion 1 — the joke must be
// funny about something that CRASHED. The pass-2 "bulletproof screenshot"
// draft never crashed anything, so it risked losing on the first
// criterion. This version: promise, live crash, apology, absurd fix.
const JOKE =
  "My AI agent swore the demo couldn't crash — then crashed it live, apologised to the audience, and fixed it by deleting the feature.";

function validate(text: string): void {
  // The full file content, trailing newline included, must be
  // 1..280 Unicode code points and not only whitespace.
  const codePoints = [...text].length;
  if (codePoints < 1 || codePoints > 280) {
    throw new Error(`entry must be 1..280 code points, got ${codePoints}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  // UTF-8 round-trip: encoding then strictly decoding must return
  // exactly the same string.
  const bytes = new TextEncoder().encode(text);
  const back = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  if (back !== text) {
    throw new Error("entry is not valid UTF-8 round-trippable text");
  }
}

function main(): void {
  const entry = JOKE + "\n";
  validate(entry);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const file = join(outDir, "entry.txt");
  writeFileSync(file, entry, "utf8");
  // Read back what actually landed on disk: it must decode as strict
  // UTF-8 and match the intended entry exactly, byte for byte.
  const onDisk = new TextDecoder("utf-8", { fatal: true }).decode(
    readFileSync(file),
  );
  if (onDisk !== entry) {
    throw new Error("written entry.txt does not match the intended entry");
  }
}

main();
