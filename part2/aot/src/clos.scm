(define (getCTOR)
  (let ((cnt 18)
        (base -4.1))
    (define #CTOR#CTOR#/CTOR#
      (lambda (v)
        (instantiate::obj
          (val (+ base v))
          (cnt (begin
                 (set! cnt (+ 1 cnt))
                 cnt)))))
    CTOR))
