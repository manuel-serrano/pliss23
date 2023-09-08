struct {
   long hclass;
   long aclass;
   long pclass;
   obj_t owner;
   long index;
   #@newcode#long vindex;#/@newcode#
   #@newcode#long *vtable;#/@newcode#
} cache;

if (obj->hclass == cache.hclass) val = obj->elements[cache.index];
else if(obj->hclass == cache.aclass) ... // same as before
#@newcode#else if (obj->hclass->vtable[cache.vindex] >= 0) val = obj->elements[obj->hclass->vtable[cache.vindex]];#/@newcode#
else val = cacheReadMiss(obj, &cache, "x");

