set terminal svg font "Verdana,12"
set output 'jetstream.svg'

set title 'JetStream benchmark suite'
set ylabel "execution time relative to V8" offset 0,0

set auto x

set style data histogram
set style histogram gap 1 errorbars lw 1
set errorbars lc rgb '#444444'
set xtics rotate by 45 right

set boxwidth 0.9
set style fill solid
set style line 5 linecolor rgb '#3264c8' linetype 1 linewidth 1
set style line 6 linecolor rgb '#d83812' linetype 1 linewidth 1
set style line 7 linecolor rgb '#fa9600' linetype 1 linewidth 1
set style line 8 linecolor rgb '#109318' linetype 1 linewidth 1
set style line 500 linecolor rgb '#000000' linetype 1 linewidth 1

set grid ytics
set xtics scale 0
set datafile separator ","

set lmargin 6
set rmargin 1
set key under nobox
set logscale y

plot \
  'jetstream.csv' u 2:3:4:xtic(1) title 'nodejs' ls 8, \
  'jetstream.csv' u 5:6:7:xtic(1) title 'js68' ls 5, \
  'jetstream.csv' u 8:9:10:xtic(1) title 'jsc' ls 6, \
  'jetstream.csv' u 11:12:13:xtic(1) title 'hop' ls 7

