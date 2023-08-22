function f(v) {
   var fs = []; var l = v.length;
   for (let i = 0; i < l; i++) { fs.push(() => i + v[i]); }
   return fs.map(g => g());
}
#lex-calls#f([1,1,1])#/lex-calls# // => [1, 2, 3]; 
