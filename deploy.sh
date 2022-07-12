#!/usr/bin/env sh

# abort on errors
set -e

yarn run build

cd dist

git init
git checkout -b master
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:scherbatsky-jr/scherbatsky=jr.github.io.git master

cd -
