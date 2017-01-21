
set comentario=%1

echo %comentario%

git add *
git commit -m %comentario%
rem git push origin master