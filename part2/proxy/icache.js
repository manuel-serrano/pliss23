/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/proxy/icache.js             */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Wed Aug 23 09:31:36 2023 (serrano)                */
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
/*    icache                                                           */
/*---------------------------------------------------------------------*/
export const icache = <impress.slide title="o.x (dynamic)">
   <div class="slide-title">Dynamic Property Names</div>
   <div class="slide-title"><strong>vs</strong></div>
   <div class="slide-title">Inline Caches</div>

   <div class="c code" step="1-2">
    <lstinputlisting language="c" src=${require.resolve("./src/hclass.c")}/>
  </div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
icache.css = <style>
.body * {
   transition: 1s all;
}

pre {
   font-size: 30%;
}

div.slide-title {
   line-height: 100%;
}

strong {
   color: var(--red);
}

.listings {
  margin-top: 0;
  margin-bottom: 0;
}

div.c {
   margin-top: 1ex;
}

div[data-step="2"] .cache-miss {
   opacity: 0.2;
   transition: 0.5s all;
}
</style>
	
