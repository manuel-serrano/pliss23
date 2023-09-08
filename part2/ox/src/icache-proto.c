struct {
   long hclass;
   long aclass;
   #@newcode#long pclass;#/@newcode#
   #@newcode#obj_t owner;#/@newcode#
   long index;
} cache;

if (obj->hclass == cache.hclass) val = obj->elements[cache.index];
else if (obj->hclass == cache.aclass) val = obj->elements[cache.index](obj);
#@newcode#else if (obj->hclass == cache.pclass) val = cache->owner->elements[cache.index];#/@newcode#
else val = cacheReadMiss(obj, &cache, "x");

