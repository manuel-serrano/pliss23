(module mod
   (export (class point x::long y::long)
	   (refY::long ::point)))

(define (refY o) (with-access::point o (y) y))
