/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/scm2c/lifting.js            */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu May 15 16:52:50 2025 (serrano)                */
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
import { LSTLISTING } from "../../listings.js";

/*---------------------------------------------------------------------*/
/*    A slide ...                                                      */
/*---------------------------------------------------------------------*/
export const slide = <impress.slide title="Lambda Lifting">
<div class="center">Lambda lifting</div>

<lstlisting language="scheme">
(define (F n m)
   (define (A)
      n)
  (define (B)
      (+fx (A) m))
  (G B))
</lstlisting>
<div class="downarrow" step="1">&#129175;</div>

<div step="1">
   <lstlisting language="c">
obj_t F(obj_t n, obj_t m) {
  obj_t B = make_closure(&lambdaB, 0, 2);
  CLOSURE_ENV(b, 0) = n;
  CLOSURE_ENV(b, 1) = m;
  return G(B);
}

obj_t lambdaB(obj_t env) {
  return functionA(CLOSURE_ENV(env, 0)) + CLOSURE_ENV(env, 1);
}

obj_t functionA(obj_t n) {
  return n;
}
</lstlisting>
   </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
slide.css = <style>
.body {
   font-size: 65%;
   transition: 1s all;
}

pre {
   font-size: 45%;
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

code {
   font-family: cmtt;
   color: var(--greyverydark);
}

.fontifier-prog .fontifier-prog-line-comment {
   font-weight: normal;
   color: var(--javascript-color);
   font-style: normal;
}
      
.downarrow {
   position: relative;
   left: 1em;
   top: -0.9ex;
   line-height: 2ex;  
   color: var(--scheme-color);
}

pre.c {
   position: relative;
   top: -4ex;
}
</style>   
