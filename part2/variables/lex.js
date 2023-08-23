/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/variables/lex.js            */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Wed Aug 23 08:41:14 2023 (serrano)                */
/*    Copyright   :  2023 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    Let declaration                                                  */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import * as impress from "hopimpress-0.6.*.hz";
import { MARKDOWN as MD } from "hop:markdown";

/*---------------------------------------------------------------------*/
/*    Lexcical                                                         */
/*---------------------------------------------------------------------*/
export const lex = <impress.slide title="let">
   <md>
let binding
===========

   * cleaner semantics
     - visibility in the current block
   * deadzone access
     - dynamic tests
     - imprecise typing
   * weird interaction with the rest of the language
</md>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
lex.css = <style>
.body * {
   transition: 1s all;
}

pre {
   font-size: 40%;
}

.listings {
  margin-top: 0;
  margin-bottom: 0;
}

div.scheme {
  margin-top: 0.5ex;
}

.downarrow {
  color: var(--javascript-color);
  position: relative;
  left: 1em;
  line-height: 2ex;  
}

.arrowred {
  color: var(--red);
}

.note {
   border-radius: 0.2ex;
   border: 0.2ex solid var(--red);
   background-color: var(--greyextralight);
   font-size: 60%;
   position: absolute;
   right: 2em;
   padding: 0.4ex 0.4ex 0.2ex 0.4ex;
   top: 5ex;
   right: 3em;
   background-color: white;
   border-color: var(--javascript-color);
}

[data-step="0"] #lex-calls + .fontifier-prog-line-comment {
   visibility: hidden;
}

.scheme {
   position: relative;
   top: -1ex;
   font-size: 50%;
}


h1 {
   font-size: 120%;
}

ul {
   color: var(--greydark);
   font-size: 90%;
   font-weight: bold;
}

ul ul {
   color: var(--grey);
}
</style>
	

