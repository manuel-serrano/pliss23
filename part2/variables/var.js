/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/variables/var.js            */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Sat May 17 08:28:21 2025 (serrano)                */
/*    Copyright   :  2023-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Var declaration                                                  */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import * as impress from "@hop/hopimpress";
import { LSTINPUTLISTING } from "../../listings.js";

/*---------------------------------------------------------------------*/
/*    varJS                                                            */
/*---------------------------------------------------------------------*/
export const varJS = <impress.slide title="var">
  <div class="js code">
    <lstinputlisting language="javascript" src=${require.resolve("./src/var.js")}/>
   </div>
   
  <div class="downarrow" step="1">&#129175;</div>
   
  <div class="scheme code" step="1-2">
    <lstinputlisting language="scheme" src=${require.resolve("./src/var.scm")}/>
  </div>
   
  <div step="2" class="note" id="varJS-balloon">
   Not a unique type for "<code>l</code>"
  </div>
  <impress.arrow class="arrowred" step="2" src="varJS-balloon" dst="var-assig" srcanchor="bc" dstanchor="tc"/>
   
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
varJS.css = <style>
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

</style>
	

