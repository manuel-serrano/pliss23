obj_t cacheReadMissProxy(obj_t o, struct cache *cache, rope_t *name) {
   if (#@isproxy#isProxy(o)#/@isproxy#) {
      obj getter;
      if (o->handler->hclass == #@proxy-cache#o->cache#/@proxy-cache#.hclass) {
	 getter = o->handler->elements[#@proxy-cache#o->cache#/@proxy-cache#.index];
      } else {
	 getter = cacheReadMiss(o->handler, #@proxy-cache#o->cache#/@proxy-cache#, "get");
      }
      if (isProcecure(getter)) {
	 return getter(t, "x");
      } else {
	 return 0L;
      }
   } else {
      val = cacheReadMiss(o, &caches, name); // cache miss
   }
}
