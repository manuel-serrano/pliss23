struct {
   long hclass;
   #@newcode#long aclass;#/@newcode#
   long index;
} cache;

if (obj->hclass == cache.hclass) {
   val = obj->elements[cache.index];
#@newcode#} else if (obj->hclass == cache.aclass) {#/@newcode#
   #@newcode#val = obj->elements[cache.index](obj);#/@newcode#
} else {
   val = cacheReadMiss(obj, &cache);
}
