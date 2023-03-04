#! /bin/bash

cp -r ../ohm/doc/* docs
rm docs/README.md # Only used on GitHub
rm -rf static/img/docs
mv docs/images static/img/docs
node scripts/escapeMdx.mjs docs/*
