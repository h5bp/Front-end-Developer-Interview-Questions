#!/bin/sh

if [ `git branch --list gh-pages` ]
then
  git branch -D gh-pages
  git checkout -b gh-pages
else
  git checkout -b gh-pages
fi
rm -f .gitignore
npm run build
git add _site
git commit -m 'Update Website'
git push upstream `git subtree split --prefix _site gh-pages`:gh-pages -f
git checkout -f
git checkout master
