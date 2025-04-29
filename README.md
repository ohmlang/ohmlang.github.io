# About

This repo hosts the generated (post-build) assets for [ohmjs.org][] in the `gh-pages` branch. The source for the site is now at [ohmjs/ohmjs.org][].

**NOTE**: Do NOT delete this repo! [ohmlang.github.io][] used to be the official Ohm site, and some published papers use that URL. As long as this repo is around, GitHub will 301 redirect to whatever is in the [CNAME file](https://github.com/ohmlang/ohmlang.github.io/blob/gh-pages/CNAME).

[ohmjs.org]: https://ohmjs.org
[ohmjs/ohmjs.org]: https://github.com/ohmjs/ohm
[ohmlang.github.io]: https://ohmlang.github.io

## Cloudflare SSL issues

On 2025-01-29 the site was down to an an SSL issue. Here's what happened & how I fixed it:

- I went to [Settings → Pages](https://github.com/ohmlang/ohmlang.github.io/settings/pages) for ohmlang.github.io and saw a Certificate Request Error:
  ![CleanShot 2025-01-29 at 19 08 29@2x](https://github.com/user-attachments/assets/e979ded4-4755-46ec-b069-d6d1f4b63269)
- On Cloudflare, under the site settings for ohmjs.org, I did _Pause Cloudflare_.
- On GitHub, I removed the custom domain name, and then added it back.
- I re-enabled the site on Cloudflare.

2025-04-29: Went down again. Did the same dance, except I _didn't_ re-enable Cloudflare.
