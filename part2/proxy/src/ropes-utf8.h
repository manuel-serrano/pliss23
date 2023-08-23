typedef struct rope_utf8 {
   uint32_t weight;
   union { char *string; struct rope *rope; } left;
   struct rope *right;
   uint32_t utfidx;
   uint32_t utflen;
} rope_utf8_t;
