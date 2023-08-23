function find(o, v) {
   for (let k in o) {
      if (#@dyngetprop#o[k]#/@dyngetprop# === v) return k;
   }
   return undefined;
}

find([1, 2, 3, 4], 3);
find({a: 1, b: 2, c: 3, d: 4}, 2);
