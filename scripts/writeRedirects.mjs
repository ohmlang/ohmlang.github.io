#! /usr/bin/env node

import assert from 'assert';
import dedent from 'tiny-dedent';
import fs, { rmSync } from 'fs';
import path from 'path';

/*
The following git.io URLs were in use in Ohm code:
https://git.io/J0gPJ - https://github.com/harc/ohm/blob/master/doc/syntax-reference.md#special-characters
https://git.io/JiYgP - https://github.com/harc/ohm/blob/master/doc/syntax-reference.md#syntactic-vs-lexical-rules
https://git.io/Jwow5 - https://github.com/harc/ohm/blob/master/doc/releases/ohm-js-16.0.md#grammarfromscriptelement--grammarsfromscriptelements
https://git.io/Jz4CI - https://github.com/harc/ohm/blob/master/doc/releases/ohm-js-16.0.md#args-to-_iter-and-_nonterminal-actions
https://git.io/JRwtG - https://github.com/harc/ohm/blob/master/doc/releases/ohm-js-16.0.md#default-semantic-actions
 */

/*
  Thoughts about short URLs:
  - 3 chars should be enough for now
  - Use mnemonic codes, but avoid collisions.
  - /d/ is short for "docs". Maybe introduce /e/ or /err/ for errors in the future?
 */

// prettier-ignore
const shortUrls = [
  ['/d/sc', '/docs/syntax-reference#special-characters'],
  ['/d/svl', '/docs/syntax-reference#syntactic-vs-lexical-rules'],
  ['/d/gfs', '/docs/releases/ohm-js-16.0#grammarfromscriptelement--grammarsfromscriptelements'],
  ['/d/ati', '/docs/releases/ohm-js-16.0#args-to-_iter-and-_nonterminal-actions'],
  ['/d/dsa', '/docs/releases/ohm-js-16.0#default-semantic-actions'],
];

function writeRedirect(srcDir, destUrl) {
  fs.mkdirSync(srcDir);
  return fs.writeFileSync(
    path.join(srcDir, 'index.html'),
    dedent(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="refresh" content="0; url=${destUrl}" />
          <link rel="canonical" href="${destUrl}" />
        </head>
        <script>
          window.location.href = '${destUrl}';
        </script>
      </html>
    `),
    'utf-8'
  );
}

fs.rmSync('static/d', { recursive: true });
fs.mkdirSync('static/d');

const redirectedUrls = new Set();
for (const [src, dest] of shortUrls) {
  assert.equal(src[0], '/', '`src` should be an absolute path');
  assert.equal(dest[0], '/', '`dest` should be an absolute path');

  // Make sure there are no duplicate short URLs.
  assert.equal(redirectedUrls.has(src), false, `Duplicate redirect: ${src}`);
  redirectedUrls.add(src);

  writeRedirect(path.join('static', src), dest);
  console.log(src, '->', dest);
}
