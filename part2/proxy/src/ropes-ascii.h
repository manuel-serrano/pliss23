typedef struct rope_ascii {
   uint32_t weight;
   union { char *string; struct rope *rope_t } left;
   struct rope *right;
} rope_ascii_t;
