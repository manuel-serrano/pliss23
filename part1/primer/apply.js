/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/primer/apply.js             */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Wed Sep  6 08:21:49 2023 (serrano)                */
/*    Copyright   :  2015-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Pliss23, part 1 title                                            */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import/export ...                                                */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import * as fontifier from "hop:fontifier";
import { MARKDOWN as MD } from "hop:markdown";

/*---------------------------------------------------------------------*/
/*    A slide ...                                                      */
/*---------------------------------------------------------------------*/
export const slide = <impress.slide title="Apply" class="md">
   <MD fontifier=${fontifier}>
   ${<div class="center">Function invocations</div>}


   * uncurry
```scheme
(let ((f (lambda (x y z) (+ x y z))))
   (f 1 2 3))
;; { let f = (x, y, z) => x + y + z;
;;   f(1, 2, 3); }
```
   * apply
```scheme
(let ((f (lambda (x y z) (+ x y z))))
   (apply f (list 1 2 3)))
;; { let f = (x, y, z) => x + y + z;
;;   f.apply(undefined, new Array(1, 2, 3)); }

(let ((f (lambda (x y z) (+ x y z))))
   (apply f '(1 2 3)))
;; { let f = (x, y, z) => x + y + z;
;;   f.apply(undefined, [1, 2, 3]); } // ! heap allocation
```
</MD>   
</impress.slide>

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
slide.css = <style>
.body {
   font-size: 80%;
   transition: 1s all;
}

div[data-step="1"] {
   top: -17ex;
}

pre {
   font-size: 40%;
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
