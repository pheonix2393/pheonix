#!/bin/bash

git checkout master
echo -en '\n' >> file.txt

git add -A
git commit -m "update"

git checkout PH-88
git merge master

git checkout PH-89
git merge master

git checkout PH-90 
git merge master

git checkout PH-91 
git merge master

git checkout master

git remote | xargs -L1 git push --all
