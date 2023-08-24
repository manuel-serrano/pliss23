/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/primer/syntax.js            */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu Aug 24 15:54:10 2023 (serrano)                */
/*    Copyright   :  2015-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Pliss23, part 1 title                                            */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import/export ...                                                */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import { MARKDOWN as MD } from "hop:markdown";

/*---------------------------------------------------------------------*/
/*    A slide ...                                                      */
/*---------------------------------------------------------------------*/
export const slide = <impress.slide title="Syntax" class="md">
   <MD>
A weird syntax (but it is only syntax)
======================================

${<div class="center">As close as possible to the untyped ${<span>&lambda;</span>}-calculus</div>}

   * abstraction: ${<span class="math">&lambda;x.M</span>}
      * `(lambda (x) M)`
      * `x => M`
   * application: ${<span class="math">(M N)</span>}
      * `(M N)`
      * `M(N)`
   * alpha-conversion: ${<span class="math">&lambda;x.M[x] &equiv; &lambda;y.M[y]</span>}
   * beta-reduction: ${<span class="math">((&lambda;x.M) E) &equiv; (M[x := E])</span>}
   * eta-conversion: ${<span class="math">((&lambda;x.M x) E) &equiv; M if x free in M</span>}
</MD>   
</impress.slide>

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
slide.css = <style>
.body {
   font-size: 80%;
}

h2 {
   text-align: center;
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
   font-size: 70%;
}

ul ul {
   margin: 0;
   font-size: 80%;
}

ul ul li:before {
   color: var(--scheme-color);
}

ul ul li + li:before {
   color: var(--javascript-color);
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

.math {
   font-family: cms;
   font-size: 85%;
   color: var(--greyverydark);
}

code {
   font-family: cmtt;
   color: var(--greyverydark);
}
   
</style>   
