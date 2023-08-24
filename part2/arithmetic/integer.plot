set terminal svg font "Verdana,12"

set ylabel "execution time (in sec)" offset 0,0

set auto x

set style data histogram
set style histogram gap 1 errorbars lw 1
set errorbars lc rgb '#444444'
set xtics rotate by 45 right

set boxwidth 0.9
set style fill solid
set style line 1 linecolor rgb '#3264c8' linetype 1 linewidth 1
set style line 2 linecolor rgb '#d83812' linetype 1 linewidth 1
set style line 3 linecolor rgb '#fa9600' linetype 1 linewidth 1
set style line 100 linecolor rgb '#000000' linetype 1 linewidth 1

set grid ytics
set xtics scale 0
set datafile separator ","

set lmargin 6
set rmargin 1
set key under nobox

plot \
  'integer.csv' u 2:3:4:xtic(1) title 'hop.int53' ls 1, \
  'integer.csv' u 5:6:7:xtic(1) title 'hop.smi' ls 2, \
  'integer.csv' u 8:9:10:xtic(1) title 'hop.nan' ls 3

