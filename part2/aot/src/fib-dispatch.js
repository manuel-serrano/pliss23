function fib(i) {
   if (isFixnum(i)) {
      return #@fxfib#fib$fx#/@fxfib#(i)
   } else {
      return #@genfib#fib$$#/@genfib#(i)
   }
}


export fib;
