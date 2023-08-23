rope_t *name = stringToName( prop );
if (obj->hclass == #@ropes-cache#name->cache#/@ropes-cache#->hclass) {
   val = obj->elements[#@ropes-cache#name->cache#/@ropes-cache#->index]; // hit
} else {
   val = cacheReadMiss(obj, #@ropes-cache#name->cache#/@ropes-cache#, name); // miss
}
