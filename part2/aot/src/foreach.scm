($array-maybe-foreach arr arr %this
   (#@stk#stack-lambda#/@stk# (el)
      (let ((con ($get %this "console" %this)))
	 (let ((log ($get con "log" %this)))
	    ($call1 log con el %this)))))
