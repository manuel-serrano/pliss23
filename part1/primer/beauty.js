/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/primer/beauty.js            */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu May 15 16:48:56 2025 (serrano)                */
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
export const slide = <impress.slide title="Beauty" class="md">
   <MD>
   ${<div class="center">The (pure) beauty of Scheme</div>}

${<div class="head center">program &equiv; data</div>}

   * list is _the_ data structure 
   * empty list:
      * `(quote ())`,  ${<code>'()</code>}
      * ${<code>[]</code>}
   * constructor
      * `(cons 1 (cons 2 '())`, `'(1 2)`, `(list 1 2)`
      * ${<code>[].push(2).push(1)</code>}, ${<code>[1, 2]</code>}
   * head
      * `(car '(1 2))` ${<span>&rArr;</span>} `1`
      * ${<code>[1, 2][0]</code>}
   * tail
      * `(cdr '(1 2))` ${<span>&rArr;</span>} `(2)`
      * ${<span class="ov"><code>[1, 2].slice(1)</code></span>}
   * program as data
      * `'(lambda (x) x)`, `(list 'lambda (list 'x) 'x)`
</MD>   
</impress.slide>

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
slide.css = <style>
.body {
   font-size: 70%;
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
   font-size: 55%;
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

span.ov {
   text-decoration: line-through;
}
</style>   
