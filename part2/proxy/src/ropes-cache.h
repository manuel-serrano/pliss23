typedef struct rope {
   uint32_t weight;
   union { char *string; struct rope *rope; } left;
   struct rope *right;
   #@ropes-name#struct rope *name#/@ropes-name#;
   #@ropes-cache#struct cache *cache;#/@ropes-cache#
} rope_t;
