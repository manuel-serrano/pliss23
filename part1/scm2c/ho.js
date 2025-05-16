/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/scm2c/ho.js                 */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu May 15 16:52:10 2025 (serrano)                */
/*    Copyright   :  2015-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Pliss23, Scheme compilation                                      */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import/export ...                                                */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { MARKDOWN as MD } from "@hop/markdown";
import * as fontifier from "@hop/fontifier";
import { LSTLISTING } from "../../listings.js";

/*---------------------------------------------------------------------*/
/*    A slide ...                                                      */
/*---------------------------------------------------------------------*/
export const slide = <impress.slide title="higher order" class="md">
   <MD fontifier=${fontifier}>
   ${<div class="center">How to compile?</div>}
   ${<div class="center"><code>(lambda (x) (lambda (y) (+ x y)))</code></div>}

```scheme
(define adder (lambda (x) (lambda (y) (+ x y))))
;; const adder = x => y => x + y

(define add5 (adder 5))
;; const add5 = adder(5)
```
${<div step="1">
<lstlisting language="c">
obj_t adder(obj_t x) {
   return #@important#???#/@important#;
}

add5 = adder(MAKE_FX(5));
   </lstlisting>
   </div>}
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

code {
  font-size: 95%;
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
   font-size: 110%;
   margin-bottom: 1ex;
}

.center code {
   font-size: 80%;
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
   font-size: 90%;
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
      
[data-step="0"] li { opacity: 0; }

[data-step="1"] li { opacity: 1;}
[data-step="1"] li + li { opacity: 0; }

[data-step="2"] li { opacity: 1; text-decoration: line-through; }
[data-step="2"] li + li { opacity: 1; text-decoration: none; }
[data-step="2"] li + li + li { opacity: 0; }

[data-step="3"] li { opacity: 1; text-decoration: line-through; }
[data-step="3"] li + li { opacity: 1; text-decoration: line-through; }
[data-step="3"] li + li + li { opacity: 1; text-decoration: none; }
[data-step="3"] li + li + li + li { opacity: 0; }

[data-step="4"] li { opacity: 1; text-decoration: line-through; }
</style>   
