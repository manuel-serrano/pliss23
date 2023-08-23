rope_t *stringToName(rope_t *prop) {
   if (#@name#prop->name#/@name#) {
      return #@name#prop->name#/@name#;
   } else {
      long hash = ropeHash(prop);
      rope *name = globalNameTableGet(hash, prop);
      if (!name) name = globalNameTablePut(hash, prop);
      #@name#prop->name#/@name# = name;
      return name;
   }
}
