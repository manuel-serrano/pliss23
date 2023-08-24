(define (js-array-maybe-foreach this thisarg %this stkproc)
   (if (js-plain-array? this)
       (js-array-foreach this stkproc thisarg %this)
       (js-call2 %this (js-get this "forEach" %this)
	  this (scm-stack-procedure->js-function stkproc) thisarg)))

