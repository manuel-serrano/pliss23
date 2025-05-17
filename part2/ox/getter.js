/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/ox/getter.js                */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Sat May 17 08:32:50 2025 (serrano)                */
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
/*    getter                                                           */
/*---------------------------------------------------------------------*/
export const getter = <impress.slide title="getters" class="scroll">
  <div class="js code">
    <lstinputlisting language="javascript" src=${require.resolve("./src/getters.js")}/>
   </div>
  <div class="downarrow" step="2">&#129175;</div>
   
  <div class="imgcontainer" step="1">
    <svg:img width="100%" height="100%" id="acache" src=${require.resolve( "./svg/acache.svg" )}/>
   </div>
  <div class="c code" step="2-">
    <lstinputlisting language="c" src=${require.resolve("./src/icache-getter.c")}/>
   <span class="rule" step="3">&nbsp;</span>
   
   <div class="imgcontainerLarge" step="4">
     <div class="svgcontainer">
       <svg:img id="mono1" width="100%" height="100%" src=${require.resolve( "./svg/cache-getter-mono.svg" )}/>
     </div>
  </div>
  </div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
getter.css = <style>
.body {
   transition: 1s all;
}

.rule {
   line-height: 1ex;
}

div[data-step="3"],
div[data-step="2"] {
   top: -10ex;
}

div[data-step="4"] {
   top: -25ex;
}

pre {
   font-size: 25%;
   margin-bottom: 0;
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

.imgcontainerLarge {
   position: relative;
   border: 4px solid var(--grey);
   width: 70%;
   height: 95%;
   background-color: white;
   margin-left: auto;
   margin-right: auto;
   text-align: center;
}

.imgcontainer .svgcontainer {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
}		 

.downarrow {
  color: var(--javascript-color);
  position: relative;
  left: 1em;
  line-height: 2ex;  
}

[data-step="3"] .code pre code > .newcode {
   background-color: var(--greyextralight);
   border: 1px solid var(--blueverydark);
   color: black;
}

[data-step="3"] .code pre code {
   color: #444;
}

</style>
	
