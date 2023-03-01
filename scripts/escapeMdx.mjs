import assert from 'assert';
import fs from 'fs';
import path from 'path';

/*
  This is an unfortunate hack. Docusaurus supports MDX v1, which seems to have
  some incompatibilities with GitHub-flavored Markdown. These replacements fix
  up the valid GFM, so that it's acceptable to Docusaurus.
 */
const replacements = new Map();
replacements.set('api-reference.md', [
  [
    'e.g. `_iter(...children) { ... }`',
    "e.g. `_iter(...children) {'{'} ... {'}'}`",
  ],
]);
replacements.set('syntax-reference.md', [
  ['ListOf<letter, ",">', `ListOf{'<'}letter, ","{'>'}`],
  ['caseInsensitive<"ohm">', `caseInsensitive{'<'}"ohm"{'>'}`],
  ['ListOf<elem, sep>', `ListOf{'<'}elem, sep{'>'}`],
  ['supergrammarName</i> { ... }', "supergrammarName</i> {'{'} ... {'}'}"],
]);

for (const filename of process.argv.slice(2)) {
  const basename = path.basename(filename);
  if (!replacements.has(basename)) continue;

  let contents = fs.readFileSync(filename, 'utf8');
  for (const [oldStr, newStr] of replacements.get(basename)) {
    const newContents = contents.replace(oldStr, newStr);
    //    assert(newContents !== contents, `${basename}: Could not match '${oldStr}'`);
    contents = newContents;
  }
  console.log(basename);
  fs.writeFileSync(filename, contents, 'utf8');
}
