/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/primer/expression.js        */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu Aug 24 16:13:39 2023 (serrano)                */
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

code {
   font-family: cmtt;
   color: var(--greyverydark);
}
   
</style>   
