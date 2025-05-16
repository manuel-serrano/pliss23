/*=====================================================================*/
/*    .../diffusion/talk/pliss23/part1/primer/implementations.js       */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu May 15 16:48:18 2025 (serrano)                */
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

/*---------------------------------------------------------------------*/
/*    A slide ...                                                      */
/*---------------------------------------------------------------------*/
export const slide = <impress.slide title="Implementations" class="md">
   <MD>
Implementations
===============

   * Guile [https://www.gnu.org/software/guile](https://www.gnu.org/software/guile/)
   * Racket [https://racket-lang.org](https://racket-lang.org)
   * Gambit [http://gambitscheme.org](http://gambitscheme.org/)
   * Bigloo [http://www-sop.inria.fr/indes/fp/Bigloo](http://www-sop.inria.fr/indes/fp/Bigloo/)
   * ...
</MD>   
</impress.slide>

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
slide.css = <style>
.body {
   font-size: 80%;
}

strong {
   font-style: normal;
   color: var(--greydark);
}

em {
   font-style: normal;
   color: var(--greydark);
}

ul {
   background-color: white;
   margin: 1ex;
   list-style: none;
   margin-top: 2ex;
   font-size: 95%;
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
</style>   
