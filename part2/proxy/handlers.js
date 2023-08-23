/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/proxy/handlers.js           */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Wed Aug 23 10:59:00 2023 (serrano)                */
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
/*    handlers                                                         */
/*---------------------------------------------------------------------*/
export const handlers = <impress.slide title="Proxy Handlers">
   <table step="0-5">
    <tr>
      <td><div class="obj">o</div>.x</td><td class="semantics" step="4-">get</td>
    </tr>
    <tr step="1-">
      <td><div class="obj">o</div>.x = 3</td><td class="semantics" step="4-">set</td>
    </tr>
    <tr step="2-">
      <td><div class="obj">o</div>(1, 2)</td><td class="semantics" step="4-">apply</td>
    </tr>
    <tr step="3-">
      <td>new <div class="obj">o</div>(1, 2)</td><td class="semantics" step="4-">construct</td>
    </tr>
    <tr step="3-">
      <td> ...</td>
    </tr>
  </table>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
handlers.css = <style>
.body, .body * {
   transition: 1s all;
}

.body {
   font-size: 130%;
   color: var(--greydark);
}
  
table {
   margin-left: auto;
   margin-right: auto;
}

.semantics {
   color: var(--grey);
   font-size: 60%;
   padding-left: 2em;
}

.obj {
   display: inline-block;
}

.semantics:before {
   content: "\27e6";
   color: var(--grey);
}

.semantics:after {
   content: "\27e7";
   color: var(--grey);
}

div[data-step="5"] .semantics {
   color: var(--red);
}

.obj:after {
   content: "'";
   color: transparent;
}
				    
div[data-step="5"] .obj:after {
   content: "'";
   color: var(--red);
}

div[data-step="5"] .obj {
   color: var(--greyred);
}
</style>

