/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/proxy/proxyperf.js          */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Wed Aug 23 17:07:05 2023 (serrano)                */
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
import { slideWidth } from "../../config.js"
import { LSTINPUTLISTING } from "../../listings.js";

/*---------------------------------------------------------------------*/
/*    proxyperf                                                        */
/*---------------------------------------------------------------------*/
export const proxyperf = <impress.slide title="Proxy Properties" data-x=${-slideWidth - 100} data-duration=500>
  <div class="slide-title">Proxy <span class="important">Performance</span> - Problem 1</div>
    <div class="js code" step="0-1">
    <lstinputlisting language="javascript" src=${require.resolve("./src/proxy.js")}/>
   </div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
proxyperf.css = <style>
.body * {
   transition: 0.1s all;
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

.important {
   color: var(--red);
}

div[data-step="0"] .proxyget {
   border: 8px solid transparent;
   background-color: transparent;
}

.proxyprop {
   border: 8px solid var(--red);
   background-color: var(--greyalmostwhite);
}

.proxyget {
   border: 8px solid var(--orange);
   background-color: var(--greyalmostwhite);
}

.proxyget {
   font-weight: bold;
   color: var(--red);
}
</style>

