cd ./dist
echo "" > .nojekyll
git init
git checkout -B master
git add -A 
git commit -m "latest site deloy"
git push -f https://github.com/Tasya2000/open-layers-app.git master:www_dist
cd ..
