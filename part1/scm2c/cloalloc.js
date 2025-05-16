/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/scm2c/cloalloc.js           */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu May 15 16:52:33 2025 (serrano)                */
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
export const slide = <impress.slide title="Closure Allocation">
<div class="center">Closure Allocation</div>

<lstlisting language="scheme">
(define (sum o)
  (define (sum-vec)
    (let loop ((i (-fx (vector-length o) 1))
               (s 0))
       (if (${"<"}fx i 0)
	   s
	   (loop (-fx i 1) (+fx (vector-ref o i) s)))))
  (define (sum-pair)
     (let loop ((o o)
	        (s 0))
       (if (null? o)
	   s
           (loop (cdr o) (+fx (car o) s)))))
  (if (vector? o)
      (sum-vec)
      (sum-pair)))
</lstlisting>

<div step="1-2">
   <lstlisting language="c">
obj_t sum(obj_t o) {
  if (VECTORP(o)) {
    goto sum_vec;
  } else {
    goto sum_pair;
  }
  
sum_vec: {
  long i = VECTOR_LENGTH(o);
  obj_t s = MAKE_FX(0);
sum_vec_loop:  
  if (LTFX(i, MAKE_FX(0))) {
    return s;
  } else {
    i = SUBFX(i, MAKE_FX(1));
    s = ADDFX(VECTOR_REF(o, i), s);
    goto sum_vec_loop;
  }

sum_pair:
  ...
}
   </lstlisting>
</div>
  
<div class="center" xstep="2">Only when used as a value...</div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
slide.css = <style>
.body {
   font-size: 65%;
   transition: 1s all;
}

div[data-step="1"] div[xstep="2"] {
   opacity: 0;
}
   
div[data-step="2"], div[data-step="1"] {
   top: -19ex;
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

.center[xstep="2"] {
   color: var(--red);
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
      
</style>   
