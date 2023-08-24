function readY(o) {
   return #icache-cache#o.y;#/icache-cache#
}
function test(count, N) {
   let os = [#icache-object#{x: 12, y: 123, z: 45}#/icache-object#, {x: 21, y: 31, z: 23} ], s = 0;
   for (let i = 0; i < count; i++) {
      let o = os[i % N];
      #icache-call#s = readY(o);#/icache-call#
   }
   return s;
}
