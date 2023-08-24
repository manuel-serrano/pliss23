(js-array-maybe-foreach arr arr %this
   (#@stk#stack-lambda#/@stk# (el)
      (let ((con (js-get %this "console" %this)))
	 (let ((log (js-get con "log" %this)))
	    (js-invoke log el %this)))))
