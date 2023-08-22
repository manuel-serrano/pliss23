function hoistExample() {
   var y = undefined;
   console.log(y);
   #deadzone#throw new ReferenceError("K is not defined");#/deadzone#
   const K = 25;
   y = 3;
   ...
}
