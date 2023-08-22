"use strict";

function readX(o) {
   return o.x;
}

function test(count, N) {
   let os = [{ #@newcode#get x() { return 21 }#/@newcode#, y: 31 },
             { #@newcode#get x() { return 63 }#/@newcode#, y: 123 }, 
             ...];
   let s = 0;

   for (let i = 0; i < count; i++) {
      let o = os[i % N];
      s = readX(o);
   }

   return s;
}
