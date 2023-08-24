set terminal svg font "Verdana,12"

set title 'Virtual Memory Size (VSZ)'
set ylabel "Memory size in MB" offset 0,0

set auto x

set style data histogram
set style histogram gap 1
set xtics rotate by 45 right

set boxwidth 0.9
set style fill solid
set style line 1 linecolor rgb '#fa9600' linetype 1 linewidth 2 pointsize 1 pointtype 7
set style line 2 linecolor rgb '#109318' linetype 1 linewidth 2 pointsize 1 pointtype 7
set style line 3 linecolor rgb '#3264c8' linetype 1 linewidth 2 pointsize 1 pointtype 7
set style line 4 linecolor rgb '#d83812' linetype 1 linewidth 2 pointsize 1 pointtype 7
set style line 100 linecolor rgb '#000000' linetype 1 linewidth 1

set grid ytics
set xtics scale 0
set datafile separator ","

set logscale y
set format y "10^{%L}"

set lmargin 6
set rmargin 1
set key under nobox

plot \
  'vsz.csv' u 2 title 'hopc' ls 1, \
  'vsz.csv' u 3 title 'nodejs' ls 2, \
  'vsz.csv' u 4 title 'js68' ls 3, \
  'vsz.csv' u 5:xtic(1) title 'jsc' ls 4, \

