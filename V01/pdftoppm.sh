nix-shell -p poppler_utils --run 'PDF="./Dr.PrateekRajGautam_Resume_2024_V01.pdf" && echo "Converting "$PDF" to image" && pdftoppm -png -r 300 $PDF PNG && echo "\n Command Completed"'

sudo apt install poppler-utils -y
nix-shell -p poppler_utils
PDF="./Dr.PrateekRajGautam_Resume_2023_V01.pdf"
echo "Converting "$PDF" to image"
pdftoppm -png -r 300 $PDF PNG
echo "\n Command Completed"
