#! /bin/bash

cp -r ../ohm/doc/* docs
mv docs/images static/img/docs
node scripts/escapeMdx.mjs docs/*
