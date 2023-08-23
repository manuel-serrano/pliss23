const handler = {
  #@proxyget#get#/@proxyget#: function(obj, prop) {
    return prop in obj ? #@proxyprop#obj[prop]#/@proxyprop# : 37;
  }
};

const p = new Proxy({ a: 1 }, handler);
p.b = undefined;

console.log(p.a, p.b); 
//  1, undefined

console.log('c' in p, p.c); 
//  false, 37
