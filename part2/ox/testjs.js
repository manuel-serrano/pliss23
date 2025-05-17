/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/ox/testjs.js                */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Sat May 17 08:32:37 2025 (serrano)                */
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
/*    testjs                                                           */
/*---------------------------------------------------------------------*/
export const testjs = <impress.slide title="o.x (JavaScript)">
  <div class="js code">
    <lstinputlisting language="javascript" src=${require.resolve("./src/cache-hit.js")}/>
   </div>
   
  <div class="imgcontainer" step="1-">
    <svg:img width="100%" height="100%" id="icache" src=${require.resolve( "./svg/icache.svg" )}/>
   </div>

   <span class="hidden" step="3">&nbps;</span>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
testjs.css = <style>
pre {
   font-size: 30%;
}

.imgcontainer {
   position: absolute;
   bottom: 0.4ex;
   right: 0.4em;
   border: 4px solid var(--c-color);
   width: 7em;
   background-color: var(--greyalmostwhite);
   padding: 16px;
}

.hidden {
   display: none;
}

[data-step="0"] #icache-arrow-hclass,
[data-step="1"] #icache-arrow-hclass,
[data-step="2"] #icache-arrow-hclass {
   display: none;
}

#icache-arrow-hclass {
   stroke: var(--blueverydark);
}

[data-step="3"] #icache-arrow-nil {
     display: none;				    
}

[data-step="2"] #icache-object,
[data-step="2"] #icache-call {
     background-color: var(--greyextralight);
     border: 1px solid var(--blueverydark);
}

[data-step="2"] #icache-call#:after {
     content: "\25c0";
     margin-left: 1em;
     color: var(--blueverydark);
}

[data-step="3"] #icache-cache {
     background-color: var(--greyextralight);
     border: 1px solid var(--blueverydark);
}

[data-step="3"] #icache-cache#:after {
     content: "\25c0";
     margin-left: 1em;
     color: var(--blueverydark);
}
</style>
	
