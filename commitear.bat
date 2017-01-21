@echo off

set comentario=%1

git add *
git commit -m "%comentario%"
git push origin master