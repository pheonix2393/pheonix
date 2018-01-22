#!/bin/bash

git checkout master
echo -en '\n' >> file.txt

git add -A
git commit -m "update"
git push $1 master

git checkout PH-88
git merge master
git push $1 PH-88

git checkout PH-89
git merge master
git push $1 PH-89 

git checkout PH-90 
git merge master
git push $1 PH-90 

git checkout PH-91 
git merge master
git push $1 PH-91 

git checkout master
