function #@fxfib#fib$fx#/@fxfib#(i) {
   if (i #@fxop#<fx#/@fxop# 2) {
      return 1;
   } else {
      return #@fxfib#fib$fx#/@fxfib#(i #@fxop#-fx#/@fxop# 1) 
	 #@fxop#+fxov#/@fxop# #@fxfib#fib$fx#/@fxfib#(i #@fxop#-fx#/@fxop# 2)
   }
}
