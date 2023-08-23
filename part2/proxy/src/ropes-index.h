typedef struct rope_index {
   uint32_t weight;
   union { char *string; struct rope *rope; } left;
   struct rope *right;
   #@value#uint32_t value;#/@value#
} rope_index_t;
