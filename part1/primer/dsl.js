/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/primer/dsl.js               */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Fri Aug 25 08:52:32 2023 (serrano)                */
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
export const slide = <impress.slide title="Compiler DSL" class="md">
   <MD fontifier=${fontifier}>
   ${<div class="center">Scheme, a DSL for compilers</div>}

```scheme
(define (comp n)
   (list 'lambda '(x) (list '+ 'x n)))

(define (comp n)
   `(lambda (x) (+ x ,n)))
;; const comp = n => `x => x ${"$"}{n}`
```

Eval evil...
------------

```scheme
(define add5 (eval (comp 5)))
;; const add5 = eval(comp(5))
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

.dollar:before {
   content: "$";
}

h2 {
   font-size: 80%;
   color: var(--greydark);
   margin-left: 1em;
   margin-bottom: 0;
}
</style>   
