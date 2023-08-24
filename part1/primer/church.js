/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/primer/church.js            */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu Aug 24 16:54:26 2023 (serrano)                */
/*    Copyright   :  2015-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Pliss23, part 1 slide                                            */
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
export const slide = <impress.slide title="Church" class="md">
   <MD>
Church Numbers
==============

   * 0: ${<span class="math">&lambda;f.&lambda;x.x</span>}
      * `(lambda (f) (lambda (x) x))`
      * `f => x => x`
   * 1: ${<span class="math">&lambda;f.&lambda;x.f x</span>}
      * `(lambda (f) (lambda (x) (f x)))`
      * `f => x => f(x)`
   * 2: ${<span class="math">&lambda;f.&lambda;x.f(f x)</span>}
      * `(lambda (f) (lambda (x) (f (f x))))`
      * `f => x => f(f(x))`
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

ul li:before {
   color: var(--greydark);
}

ul ul li:before {
   color: var(--grey);
}

ul ul li code {
   color: var(--scheme-color);
}

ul ul li + li code {
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
