/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/scm2c/nontail.js            */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu May 15 16:52:42 2025 (serrano)                */
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
export const slide = <impress.slide title="Non tail calls">
<div class="center">What about this one?</div>

<lstlisting language="scheme">
(define (copy o)
   (define (copy-vec)
      (let ((r (make-vector (vector-length o))))
         (let loop ((i (-fx (vector-length o) 1)))
            (if (${"<"}fx i 0)
                r
                (begin
                   (vector-set! r i (vector-ref o i))
                   (loop (-f xi 1)))))))
   (define (copy-pair)
      (let loop ((o o))
         (if (null? o)
             o
             (cons (car o) (loop (cdr o))))))
   (if (vector? o)
       (copy-vec)
       (copy-pair)))
</lstlisting>

   <div class="center" step="1-">Non-tail calls</div>
   
<div step="2">
   <lstlisting language="c">
obj_t copy(obj_t o) {
  if (VECTORP(o)) {
    goto copy_vec;
  } else {
    goto copy_pair;
  }
  
copy_pair:  
  return copy_pair_loop(o);
}

obj_t copy_pair_loop(obj_t o) {
  if (nullp(o)) {
    return o;
  } else {
    return cons(CAR(o), copy_pair_loop(CDR(o)));
  }
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

div[data-step="2"] {
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

.center[step="1-"] {
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
