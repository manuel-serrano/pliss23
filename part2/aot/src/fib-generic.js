function #@genfib#fib$$#/@genfib#(i) {
   if (i #@genop#<js#/@genop# 2) {
      return 1;
   } else {
      return fib(i #@genop#-js#/@genop# 1) 
	 #@genop#+js#/@genop# fib(i #@genop#-js#/@genop# 2)
   }
}
