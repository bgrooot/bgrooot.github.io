#!/bin/bash

git add .
git commit -m 'publish new post'
git branch -D master
git checkout -b master 
git filter-branch --subdirectory-filter _site/ -f
git push -f --all
git checkout source
