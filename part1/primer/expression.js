/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/primer/expression.js        */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu Aug 24 16:17:10 2023 (serrano)                */
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
export const slide = <impress.slide title="Expression based" class="md">
   <MD>
${<div class="center">Expression based, no statements, everything has a value</div>}

${<div class="head">5 essential forms:</div>}

   * variable
     * `x`, `y`, `=`, `reverse!`, `number?`
   * abstraction
      * `(lambda (x y) x)`
   * application
      * `((lambda (f x y) (f x y)) + 3 4)`
   * conditional 
      * `(if test then otherwise)`
   * quote
</MD>   
</impress.slide>

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
slide.css = <style>
.body {
   font-size: 80%;
}

p {
   margin: 0;
}

.center {
   font-weight: bold;
   color: var(--greydark);
   font-size: 105%;
   margin-bottom: 1ex;
}

div.head {
   text-decoration: underline;
   margin-left: 0.5em;
   color: var(--grey);
   font-weight: bold;
   font-size: 90%;
   margin-bottom: 1ex;
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
   margin: 2ex;
   list-style: none;
   margin-top: 0;
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

code {
   font-family: cmtt;
   color: var(--greyverydark);
}
   
</style>   
