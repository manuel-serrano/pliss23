/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/proxy/solution1.js          */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Wed Aug 23 16:41:22 2023 (serrano)                */
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
/*    solution1                                                        */
/*---------------------------------------------------------------------*/
export const solution1 = <impress.slide title="Solution1">
<div class="slide-title">Problem <span class="important">1</span> - Solution</div>
  <div class="rts code" step="1-">
    <lstinputlisting language="c" src=${require.resolve("./src/ropes-cache.h")}/>
  </div>
  <div class="c code" step="2">
    <lstinputlisting language="c" src=${require.resolve("./src/str-cache.c")}/>
  </div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
solution1.css = <style>
svg {
   margin-top: 0.5ex;
}

pre {
   font-size: 30%;
}

.ropes-name {
   font-weight: bold;
}

.ropes-cache {
   color: var(--red);
   font-weight: bold;
}
</style>

