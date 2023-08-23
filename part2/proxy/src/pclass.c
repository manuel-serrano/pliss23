#@the-proxy#o = newProxy(t, h);#/@the-proxy#
if (o->hclass == caches.hclass) {
   val = o->elements[caches.index]; // cache hit
} else {
   val = cacheReadMiss(o, &caches, "x"); // cache miss
}
