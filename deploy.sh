#!/usr/bin/env sh

# abort on errors
set -e

yarn run build

cd dist

git add -A
git commit -m 'deploy'

git push -f git@github.com:scherbatsky-jr/scherbatsky-jr.github.io.git master

cd -
