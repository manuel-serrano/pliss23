/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/proxy/proxycares.js         */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Wed Aug 23 10:08:21 2023 (serrano)                */
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
/*    proxycares                                                       */
/*---------------------------------------------------------------------*/
export const proxycares = <impress.slide title="Proxy Properties">
  <div class="slide-title">Proxies care a lot <span class="important">!</span></div>
    <div class="js code" step="0-1">
    <lstinputlisting language="javascript" src=${require.resolve("./src/proxy.js")}/>
   </div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
proxycares.css = <style>
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

.important {
   color: var(--red);
}

[data-step="0"] .proxyprop,
[data-step="0"] .proxyget,
[data-step="1"] .proxyget {
   border: 4px solid transparent;
}
#dynproxy .fontifier-prog-define {
   color: black;
}
#dynproxy .proxyget {
   font-weight: bold;
   color: var(--red);
}
[data-step="1"] .proxyprop {
   border: 4px solid var(--red);
   background-color: var(-greyalmostwhite);
}
</style>

