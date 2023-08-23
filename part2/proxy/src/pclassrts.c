obj_t cacheReadMissProxy(obj_t o, struct cache *cache, rope_t *name) {
   if (#@isproxy#isProxy(o)#/@isproxy#) {
      obj_t getter = #@missing-cache#Get(o->handler, "get")#/@missing-cache#;
      if (isProcedure(getter)) {
	 return getter(t, "x");
      } else {
	 return 0L;
      }
   } else {
      val = cacheReadMiss(o, &caches, name); // cache miss
   }
}
