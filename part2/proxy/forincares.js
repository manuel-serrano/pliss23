/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/proxy/forincares.js         */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Wed Aug 23 10:05:59 2023 (serrano)                */
/*    Copyright   :  2023 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    A slide                                                          */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../../listings.js";

/*---------------------------------------------------------------------*/
/*    forincares                                                       */
/*---------------------------------------------------------------------*/
export const forincares = <impress.slide title="Forin Properties">
  <div class="slide-title">for..in <strong>cares</strong></div>
  <div class="js code" step="0-1">
    <lstinputlisting language="javascript" src=${require.resolve("./src/forin.js")}/>
   </div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
forincares.css = <style>
.body * {
   transition: 1s all;
}

pre {
   font-size: 30%;
}

.listings {
  margin-top: 0;
  margin-bottom: 0;
}

.slide-title {
   margin-bottom: 0.5ex;
   color: var(--greydark);
}

strong {
   color: var(--greyverydark);
}

[data-step="0"] .dyngetprop {
     border: 4px solid transparent;
}

[data-step="1"] .dyngetprop {
   border: 4px solid var(--red);
   background-color: var(--greyalmostwhite);
}
</style>
	
