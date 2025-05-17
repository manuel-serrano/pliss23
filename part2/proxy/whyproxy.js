/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/proxy/whyproxy.js           */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Sat May 17 08:34:51 2025 (serrano)                */
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
/*    whyproxy                                                         */
/*---------------------------------------------------------------------*/
export const whyproxy = <impress.slide title="Why Proxy Objects">
  <ul>
    <li step="0-"><span> Membranes (security)</span></li>
    <li step="1-"><span> Higher Order Contracts</span></li>
    <li step="2-"><span> Gradual Typing (monitored TypeScript)</span></li>
  </ul>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
whyproxy.css = <style>
.body * {
   transition: 1s all;
}

.body {
   background-color: var(--greydark);
   color: white;
   font-weight: bold;
   font-size: 110%;
}

ul {
   margin-top: 6ex;
   margin-left: 1em;
}

ul li {
   color: var(--red);
}

ul li span {
   color: white;
}
</style>

