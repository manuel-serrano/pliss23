function readY(o, prop) {
   return #scache-cache#o[prop];#/scache-cache#
}
function test(count, N) {
   let os = [#scache-object#{ x: 12, y: 123, z: 45 }#/scache-object#, { x: 21, y: 31 } ], s = 0;
   for (let i = 0; i < count; i++) {
      let o = os[i % N];
      #scache-call#s = readY(o, "y");#/scache-call#
   }
   return s;
}
