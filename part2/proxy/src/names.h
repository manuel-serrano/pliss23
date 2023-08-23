typedef struct rope {
   uint32_t weight;
   union { char *string; struct rope *rope; } left;
   struct rope *right;
   #@name#struct rope *name;#/@name#
} rope_t;
