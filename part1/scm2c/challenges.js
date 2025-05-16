/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/scm2c/challenges.js         */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu May 15 16:50:47 2025 (serrano)                */
/*    Copyright   :  2015-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Pliss23, part 1 title                                            */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import/export ...                                                */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { LSTLISTING } from "../../listings.js";

/*---------------------------------------------------------------------*/
/*    A slide ...                                                      */
/*---------------------------------------------------------------------*/
export const slide = <impress.slide title="Challenges">
   <div class="center">Challenges</div>

   <ul>
     <li step="1-"> Polymorphism</li>

<lstlisting step="1-" language="scheme">
(lambda (x) x)
;; x => x
</lstlisting>
   
     <li step="2-"> Higher Order
<lstlisting step="2-" language="scheme">
(lambda (x) (lambda (y) (+ x y)))
;; x => y => x + y
</lstlisting>
     </li>
   
     <li step="3-"> Minimalism
<lstlisting step="3-" language="scheme">
(letrec ((for (lambda (i) (if (${"<"} i 10) (begin (print i) (for (+ 1 i)))))))
   (for 0))
(let for ((i 0))
   (if (${"<"} i 10) (begin (print i) (for (+ 1 i)))))
;; for (let i = 0; i ${"<"} 10; i++) { console.log(i); }
</lstlisting>
     </li>
   
     <li step="4-"> Garbage Collection </li>
   </ul>

</impress.slide>

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
slide.css = <style>
.body {
}

.body * {
   transition: 1s all;
}

pre {
   font-size: 50%;
}

.center {
   font-weight: bold;
}

ul {
   margin: 0;
   list-style: none;
   font-size: 45%;
   color: var(--grey);
}

li:before {
   content: "\25cf";
   width: 1em;
   margin-left: 1em;
   color: var(--red);
   display: inline-block;
   font-size: 80%;
}

.fontifier-prog .fontifier-prog-line-comment {
   font-weight: normal;
   color: var(--javascript-color);
   font-style: normal;
}
</style>   
