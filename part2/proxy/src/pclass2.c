#@the-proxy#o = newProxy(t, h);#/@the-proxy#
if (o->hclass == caches.hclass) {
   val = o->elements[ caches.index ]; // cache hit
} else if (#@isproxy#isProxy(o)#/@isproxy#) {
   obj_t getter = Get(o->handler, "get");
   if (isProcedure(getter)) {
      val = getter(t, "x");
   } else {
      val = 0L;
   }
} else {
   val = cacheReadMiss(o, &caches, "x"); // cache miss
}
