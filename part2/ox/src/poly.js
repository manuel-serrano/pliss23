function readX(o) {
   return o.x;
}

function test(count, N) {
   let os = [#@newcode#{ x: 12345, y: 8 }, { y: -1, x: 543, z: 22 }#/@newcode#];
   let s = 0;

   for (let i = 0; i < count; i++) {
      let o = os[i % N];
      s = readX(o);
   }

   return s;
}
