(define ($array-maybe-foreach this thisarg %this stkproc)
   (if ($plain-array? this)
       ($array-foreach this stkproc thisarg %this)
       ($call2 %this ($get this "forEach" %this)
	  this ($stack-procedure->js-function stkproc) thisarg)))

