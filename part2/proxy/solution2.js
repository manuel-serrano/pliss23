/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/proxy/solution2.js          */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Sat May 17 08:36:00 2025 (serrano)                */
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
/*    solution2                                                        */
/*---------------------------------------------------------------------*/
export const solution2 = <impress.slide title="Solution2">
<div class="slide-title">Problem <span class="important">2</span> - Solution</div>
   <div class="c code top" step="0-1">
      <lstinputlisting language="c" src=${require.resolve("./src/pclassrts2.c")}/>
   </div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
solution2.css = <style>
svg {
   margin-top: 0.5ex;
}

pre {
   font-size: 25%;
}

.isproxy {
   color: var(--red);
   font-weight: bold;
}

[data-step="1"] .proxy-cache {
   font-weight: bold;
   border-bottom: 4px solid var(--orange);
}
</style>

