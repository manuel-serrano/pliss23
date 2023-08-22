/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/variables/for.js            */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Tue Aug 22 12:22:53 2023 (serrano)                */
/*    Copyright   :  2023 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    For declaration                                                  */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../../listings.js";

/*---------------------------------------------------------------------*/
/*    Lexcical and For                                                 */
/*---------------------------------------------------------------------*/
export const forJS = <impress.slide title="lexical">
  <div class="js code">
    <lstinputlisting language="javascript" src=${require.resolve("./src/for.js")}/>
  </div>
   
  <span step="1" class="hidden">&nbsp;</span>
  <div class="downarrow" step="2">&#129175;</div>
   
  <div class="scheme code" step="2">
    <lstinputlisting language="scheme" src=${require.resolve("./src/for.scm")}/>
  </div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
forJS.css = <style>
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

.hidden {
   display: none;
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
</style>
	

