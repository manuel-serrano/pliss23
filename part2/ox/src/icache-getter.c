struct {
   long hclass;
   #@newcode#long aclass;#/@newcode#
   long index;
} cache;

if (obj->hclass == cache.hclass) val = obj->elements[cache.index];
else if (obj->hclass == cache.aclass) val = obj->elements[cache.index](obj);
else val = cacheReadMiss(obj, &cache);
