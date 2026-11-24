// SPDX-License-Identifier: MIT
// Worst App Idea Ever Pitched — entry program.
// Writes the one-line pitch to entry.txt in the output directory
// given by MAKEFUN_OUTPUT_DIR (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Ping: an app that alerts you the instant someone, somewhere, almost texts you, so you'll never miss a message that was never sent, and you'll always feel needed by people who forgot you exist.";

// The gate: one line, 1–240 characters, not only whitespace.
if (!line.trim() || line.length > 240 || line.includes("\n")) {
  throw new Error("entry line violates the one-line / 240-char gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
