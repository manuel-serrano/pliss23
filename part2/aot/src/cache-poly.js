"use strict";

function readX(o) {
   return o.x;
}

function test(count, N) {
   let os = [#@newcode#{ x: 21, y: 31 }, { x: 12, y: 123, z: 45 }#/@newcode#];
   let s = 0;

   for (let i = 0; i < count; i++) {
      let o = os[i % N];
      s = readX(o);
   }

   return s;
}
