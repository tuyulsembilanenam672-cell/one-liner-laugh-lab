import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One-Liner Laugh Lab: the robot vacuum's excuse after eating a sock.
// Deadpan machine voice: the sock attacked first, and the sensor logs prove it.
const LINE =
  "The sock attacked first. I have the sensor logs to prove it.";

const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 code points, got ${codePoints}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
console.log(`Wrote ${codePoints} code points to ${outPath}`);

// Keep the module path import used so the entrypoint stays self-contained.
void dirname(fileURLToPath(import.meta.url));
