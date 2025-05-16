/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/primer/sugar.js             */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu May 15 16:49:11 2025 (serrano)                */
/*    Copyright   :  2015-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Pliss23, part 1 title                                            */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import/export ...                                                */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { MARKDOWN as MD } from "@hop/markdown";
import * as fontifier from "@hop/fontifier";

/*---------------------------------------------------------------------*/
/*    A slide ...                                                      */
/*---------------------------------------------------------------------*/
export const slide = <impress.slide title="Syntactic sugar" class="md">
   <MD fontifier=${fontifier}>
   ${<div class="center">Syntactic <strong>Sugar</strong></div>}


  * let-binding
```scheme
((lambda (tmp) (+ tmp tmp)) (* 3 4))
;; (tmp => tmp + tmp)(3 * 4);
==>
(let ((tmp (* 3 4))) (+ tmp tmp))
;; { let tmp = 3 * 4; tmp + tmp; }
```
   * sequence
```scheme
((lambda (_) (print "end")) (print "begin"))
;; (_ -> console.log("end"))(console.log("begin"));
==>
(begin (print "begin") (print "end"))
;; (console.log("begin"), console.log("end"));
```

   * binders
```scheme
(define f (lambda (tmp) (+ tmp tmp)))
;; let f = tmp => tmp + tmp;
==>
(define (f tmp) (+ tmp tmp))
;; function f(tmp) { return tmp + tmp };
```

   * conditionnal
```scheme
(if x (print "x") (if y (print "y") (print "z")))
;; if (x) {
;;    console.log(x);
;; } else if (y) {
;;    console.log(y);
;; } else {
;;    console.log(z);
;; }
==>
(cond
   (x (print "x"))
   (y (print "y"))
   (else (print "z"))
```

<span step="1"/>
</MD>   
</impress.slide>

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
slide.css = <style>
.body {
   font-size: 65%;
   transition: 1s all;
}

div[data-step="1"] {
   top: -19ex;
}

pre {
   font-size: 50%;
}

p {
   margin: 0;
}

.center {
   font-weight: bold;
   color: var(--greydark);
   font-size: 105%;
   margin-bottom: 0.5ex;
}

div.head {
   text-decoration: underline;
   margin-left: 0.5em;
   color: var(--grey);
   font-weight: bold;
   font-size: 80%;
   margin-bottom: 1ex;
}

strong {
   font-style: normal;
   color: var(--red);
}

em {
   font-style: normal;
   color: var(--greydark);
}

ul {
   margin: 1ex;
   list-style: none;
   margin-top: 0;
   font-size: 70%;
}

ul ul {
   margin: 0;
   font-size: 80%;
}

a {
   text-decoration: none;
   color: var(--greydark);
   font-size: 60%;
   font-family: monospace;
}
	       
a:before {
   content: "(";
}

a:after {
   content: ")";
}

code {
   font-family: cmtt;
   color: var(--greyverydark);
}

.fontifier-prog .fontifier-prog-line-comment {
   font-weight: normal;
   color: var(--javascript-color);
   font-style: normal;
}
      
</style>   
