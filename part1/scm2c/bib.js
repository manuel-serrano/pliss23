/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/scm2c/bib.js                */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Fri Aug 25 11:30:14 2023 (serrano)                */
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
export const slide = <impress.slide title="Bibliography" class="md">
  <MD>
   ${<div class="center">Further readings...</div>}

   * ${<span class="ref">POPL&rsquo;91</span>} Unboxed Objects and Polymorphic Typing. X. Leroy
   * ${<span class="ref">ICFP&rsquo;96</span>} Storage Use Analysis, M. Serrano & M. Feeley
   * Julia, ask Jan
</MD>   
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

.center {
   font-weight: bold;
}

p {
   margin: 0;
   margin-top: 2ex;
}

ul {
   background-color: white;
   margin: 2ex;
   list-style: none;
   margin-top: 0;
   font-size: 60%;
}

span.ref {
   color: var(--greydark);
   font-weight: bold;
   font-size: 90%;
}

span.ref:before {
   content: "[";
}
       
span.ref:after {
   content: "]";
}
</style>   
