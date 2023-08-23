/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/proxy/dynamic1.js           */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Wed Aug 23 17:00:19 2023 (serrano)                */
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
/*    dynamic1                                                         */
/*---------------------------------------------------------------------*/
export const dynamic1 = <impress.slide title="Dynamic1 Properties">
  <h1 class="markdown">Dynamic Inline Cache</h1>
  <div class="js code">
    <lstinputlisting language="javascript" src=${require.resolve("./src/cache-hit.js")}/>
   </div>
   
  <div class="imgcontainer" step="1-3">
    <svg:img width="100%" height="100%" id="scache" src=${require.resolve( "./svg/icache.svg" )}/>
  </div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
dynamic1.css = <style>
.body, .body * {
   transition: 1s all;
}

pre {
   font-size: 23%;
   margin-bottom: 0;
}

.imgcontainer {
   position: absolute;
   bottom: 0.4ex;
   right: 0.4em;
   border: 4px solid var(--c-color);
   width: 9em;
   background-color: var(--greyalmostwhite);
   padding: 16px;
}

.imgcontainer .svgcontainer {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
}		 

div[data-step="1"] #scache-the-cache,
div[data-step="2"] #scache-the-cache,
div[data-step="1"] #scache-arrow-hclass,
div[data-step="2"] #scache-arrow-hclass,
div[data-step="1"] #scache-name-to-cache,
div[data-step="2"] #scache-name-to-cache,
div[data-step="1"] #scache-object-layout,
div[data-step="1"] #scache-arrow-object,
div[data-step="1"] #scache-index,
div[data-step="1"] #scache-hclass,
div[data-step="2"] #scache-arrow-hclass,
div[data-step="2"] #scache-index {
   display: none;				    
}

#scache-arrow-hclass {
   stroke: var(--blueverydark);
}
div[data-step="3"] #scache-arrow-nil {
   display: none;				    
}

div[data-step="2"] #scache-object#,
div[data-step="2"] #scache-call# {
   background-color: var(--greyextralight);
   border: 1px solid var(--blueverydark);
}

div[data-step="2"] #scache-call#:after {
   content: "\25c0";
   margin-left: 1em;
   color: var(--blueverydark);
}

div[data-step="3"] #scache-cache# {
   background-color: var(--greyextralight);
   border: 1px solid var(--blueverydark);
}

div[data-step="3"] #scache-cache#:after {
   content: "\25c0";
   margin-left: 1em;
   color: var(--blueverydark);
}
</style>
