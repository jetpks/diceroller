cd src
jade *.jade
lessc style.less > style.css
pakmanager build
mv pakmanaged.js ../public/
mv *.html ../public/
mv style.css ../public/
cd -
