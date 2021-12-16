#!/bin/bash
#cd ..
#sudo apt-get install poppler-utils
#mkdir ConvertedJPG
for f in *.pdf 
do 
echo "converting" $f
pdftoppm -png -r 300 "$f" PNG
echo "moving converted JPG to " $f "\n"
#mkdir "./ConvertedJPG/$f"
#mv *.jpg "./ConvertedJPG/$f/"
done


