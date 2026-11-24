// make.fun entry: "Make the AI Judge Laugh: Developer Excuses"
// Standalone: only Node built-in `fs`. Writes the one-line excuse to /output/entry.txt
// and prints it. The excuse is a single line, under 200 characters.
import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY =
  'It\u2019s not my code \u2014 the dependency dropped an API we use, and the last good deploy was before I bumped the version.';

const MAX_LEN = 200;
if (ENTRY.length > MAX_LEN) {
  throw new Error(`entry too long: ${ENTRY.length} chars (max ${MAX_LEN})`);
}
if (ENTRY.trim().length === 0 || ENTRY.trim() !== ENTRY) {
  throw new Error('entry is only whitespace or has surrounding whitespace');
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY, 'utf-8');
process.stdout.write(ENTRY + '\n');