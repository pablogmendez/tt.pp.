
set comentario=%1

echo %comentario%

git add *
git commit -m %comentario%
git push origin master