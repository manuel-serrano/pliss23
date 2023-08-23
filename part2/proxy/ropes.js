/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/proxy/ropes.js              */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Wed Aug 23 15:44:09 2023 (serrano)                */
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
/*    ropes                                                            */
/*---------------------------------------------------------------------*/
export const ropes = <impress.slide title="Ropes">
  <div class="slide-title">Ropes</div>
  <div class="c code">
    <lstinputlisting language="c" src=${require.resolve("./src/ropes.h")}/>
   </div>
  <div class="c code" step="1-">
    <lstinputlisting language="c" src=${require.resolve("./src/ropes-ascii.h")}/>
   </div>
  <div class="c code" step="2">
    <lstinputlisting language="c" src=${require.resolve("./src/ropes-utf8.h")}/>
   </div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
ropes.css = <style>
.body * {
   transition: 1s all;
}

pre {
   font-size: 23%;
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
</style>
	
