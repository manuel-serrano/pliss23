if (o->hclass == caches.hclass #@nosol#&& prop == caches.prop#/nosol#) {
   val = o->elements[caches.index]; // cache hit
} else {
   val = cacheReadMiss(o, &caches, prop); // cache miss
}
