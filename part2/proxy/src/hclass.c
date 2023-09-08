struct {
   long hclass;
   long index;
} cache;

if (o->hclass == cache.hclass) {
   val = o->elements[cache.index]; // cache hit
} else {
   #@cache-miss#val = cacheReadMiss(o, &cache, "x");#/@cache-miss# // cache miss
}
