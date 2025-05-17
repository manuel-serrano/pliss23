/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/proxy/proxyperf2.js         */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Sat May 17 08:35:52 2025 (serrano)                */
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
import { slideWidth } from "../../config.js"
import { LSTINPUTLISTING } from "../../listings.js";

/*---------------------------------------------------------------------*/
/*    proxyperf2                                                       */
/*---------------------------------------------------------------------*/
export const proxyperf2 = <impress.slide title="Proxy Properties">
  <div class="slide-title">Proxy <span class="important">Performance</span> - Problem 2</div>
    <div class="c code top" step="0-1">
    <lstinputlisting language="c" src=${require.resolve("./src/pclass.c")}/>
   </div>
    <div class="c code top" step="2">
    <lstinputlisting language="c" src=${require.resolve("./src/pclass2.c")}/>
   </div>
    <div class="c code top" step="3-4">
    <lstinputlisting language="c" src=${require.resolve("./src/pclass3.c")}/>
    <lstinputlisting language="c" src=${require.resolve("./src/pclassrts.c")}/>
   </div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
proxyperf2.css = <style>
.body * {
   transition: 0.1s all;
}

pre {
   font-size: 25%;
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

[data-step="0"] .the-proxy {
   visibility: hidden;
}

.the-proxy {
   transition: 1s all;
   border: 2px solid var(--bluedark);
   border-radius: 4px;
   background-color: var(--greyalmostwhite);
}

.top {
   position: absolute;
   top: 3ex;
   width: 100%;
}

.isproxy {
   color: var(--red);
   font-weight: bold;
}

.step3 .c + .c {
   margin-top: 2ex;
}

.missing-cache {
   border: 2px solid transparent;
   border-radius: 4px;
}

[data-step="4"] .missing-cache {
   border-color: var(--red);
   background-color: var(--greyalmostwhite);
   color: black;
}
</style>

