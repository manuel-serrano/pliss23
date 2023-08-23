obj_t cacheMissRead(obj_t o, struct cache *cache, rope_t *name) {
   // [[getProperty]]
   obj_t p;
   for (p = o; p != null; p = p->__proto__) {
      // [[getOwnPropertyDescriptor]]
      long i;
      for (i = 0; i < p.size; i++) {
	 if (!#ropecmp#ropecmp(p->properties[i]->name, name)#/ropecmp#) {
	    if (p == o) {
	       cache->index = i;
	       cache->hclass = o->hclass;
	    }
	    return p->properties[i];
	 }
      }
      return undefined;
   }
}
