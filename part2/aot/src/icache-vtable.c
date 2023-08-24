struct {
   long hclass;
   long aclass;
   long pclass;
   long index;
   #@newcode#long vindex;#/@newcode#
   #@newcode#long *vtable;#/@newcode#
} cache;

if (obj->hclass == cache.hclass) {
  val = obj->elements[cache.index];
} else if (obj->hclass == cache.aclass) {
  ... /* as before */ ...
#@newcode#} else {#/@newcode#
#@newcode#  if (obj->hclass->vtable[cache.vindex] >= 0) {#/@newcode#
#@newcode#    val = obj->elements[obj->hclass->vtable[cache.vindex]];#/@newcode#
  } else {
    val = cacheReadMiss(obj, &cache);
  }
}
