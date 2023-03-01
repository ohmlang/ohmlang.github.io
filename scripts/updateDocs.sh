#! /bin/bash

cp -r ../ohm/doc/* docs
node scripts/escapeMdx.mjs
