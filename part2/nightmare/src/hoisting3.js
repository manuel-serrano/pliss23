function hoistExample() {
   console.log(y);
   foo(bar);
   const K = 25;
   var y = 3;
   function foo(f) { return f() };
   function bar() { return K; }
   ...
}
