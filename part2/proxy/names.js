/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/proxy/names.js              */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Sat May 17 08:35:34 2025 (serrano)                */
/*    Copyright   :  2023-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    A slide                                                          */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import * as impress from "@hop/hopimpress";
import { LSTINPUTLISTING } from "../../listings.js";

/*---------------------------------------------------------------------*/
/*    names                                                            */
/*---------------------------------------------------------------------*/
export const names = <impress.slide title="Names">
  <div class="slide-title">From Strings To Names</div>
  <div class="c code">
    <lstinputlisting language="c" src=${require.resolve("./src/names.h")}/>
   </div>
  <div class="c code" step="2-">
    <lstinputlisting language="c" src=${require.resolve("./src/names.c")}/>
   </div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
names.css = <style>
pre {
   font-size: 25%;
}

div.c {
   margin-bottom: 0.5ex;
}

.listings {
  margin-top: 0;
  margin-bottom: 0;
}

.slide-title {
   margin-bottom: 0.5ex;
   color: var(--greydark);
}

div[data-step="1"] .name,
div[data-step="2"] .name,
div[data-step="3"] .name {
   transition: 1s all;
   color: var(--red);
   font-weight: bold;
}

.rts + .rts {				 
    margin-top: 1ex;
}
</style>
	
