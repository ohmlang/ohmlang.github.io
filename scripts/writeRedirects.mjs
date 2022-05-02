#! /usr/bin/env node

import assert from 'assert';
import dedent from 'tiny-dedent';
import fs from 'fs';
import path from 'path';

/*
The following git.io URLs were in use in Ohm code:
https://git.io/J0gPJ - https://github.com/harc/ohm/blob/master/doc/syntax-reference.md#special-characters
https://git.io/JiYgP - https://github.com/harc/ohm/blob/master/doc/syntax-reference.md#syntactic-vs-lexical-rules
https://git.io/Jwow5 - https://github.com/harc/ohm/blob/master/doc/releases/ohm-js-16.0.md#grammarfromscriptelement--grammarsfromscriptelements
https://git.io/Jz4CI - https://github.com/harc/ohm/blob/master/doc/releases/ohm-js-16.0.md#args-to-_iter-and-_nonterminal-actions
https://git.io/JRwtG - https://github.com/harc/ohm/blob/master/doc/releases/ohm-js-16.0.md#default-semantic-actions
 */

// prettier-ignore
const shortUrls = [
  ['/d/sc', '/docs/syntax-reference#special-characters'],
  ['/d/svl', '/docs/syntax-reference#syntactic-vs-lexical-rules'],
  ['/d/gfs', '/docs/releases/ohm-js-16.0#grammarfromscriptelement--grammarsfromscriptelements'],
  ['/d/ati', '/docs/releases/ohm-js-16.0#args-to-_iter-and-_nonterminal-actions'],
  ['/d/dsa', '/docs/releases/ohm-js-16.0#default-semantic-actions'],
];

function writeRedirect(src, dest) {
  return fs.writeFileSync(
    src,
    dedent(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="refresh" content="0; url=${dest}" />
          <link rel="canonical" href="${dest}" />
        </head>
        <script>
          window.location.href = '${dest}';
        </script>
      </html>
    `),
    'utf-8'
  );
}

fs.rmSync('static/d', { recursive: true });
fs.mkdirSync('static/d');

for (const [src, dest] of shortUrls) {
  assert.equal(src[0], '/', '`src` should be an absolute path');
  assert.equal(dest[0], '/', '`dest` should be an absolute path');
  writeRedirect(path.join('static', src), dest);
  console.log(src, '->', dest);
}
