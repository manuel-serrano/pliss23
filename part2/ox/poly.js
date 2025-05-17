/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/ox/poly.js                  */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Sat May 17 08:33:15 2025 (serrano)                */
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
/*    poly                                                             */
/*---------------------------------------------------------------------*/
export const poly = <impress.slide title="polys" class="scroll">
  <div class="js code">
    <lstinputlisting language="javascript" src=${require.resolve("./src/poly.js")}/>
   </div>
  <div class="downarrow" step="4">&#129175;</div>
   
  <div class="imgcontainer" step="2">
    <svg:img width="100%" height="100%" src=${require.resolve( "./svg/vtable-sans.svg" )}/>
  </div>
  <div class="imgcontainer" step="3">
    <svg:img width="100%" height="100%" src=${require.resolve( "./svg/vtable-avec.svg" )}/>
  </div>
  <div class="c code" step="4-">
    <lstinputlisting language="c" src=${require.resolve("./src/icache-poly.c")}/>
    <span class="rule" step="5">&nbsp;</span>
  </div>
   
  <div class="imgcontainerLarge" step="6">
    <div class="svgcontainer">
      <svg:img width="100%" src=${require.resolve( "./svg/vtable-bench.svg" )}/>
    </div>
  </div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
poly.css = <style>
.body, .body * {
   transition: 1s all;
}

.rule {
   line-height: 1ex;
}

div[data-step="5"],
div[data-step="4"] {
   top: -5ex;
}

div[data-step="6"] {
   top: -24ex;
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
   width: 11em;
   background-color: var(--greyalmostwhite);
   padding: 16px;
}

.imgcontainer[step="2"] {
   border: 4px solid var(--greydark);
}

.imgcontainerLarge {
   position: relative;
   border: 4px solid var(--grey);
   width: 65%;
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

div[step="4-"] {
   position: relative;
   top: -1ex;
}

[data-step="5"] .code pre code > .newcode,
[data-step="3"] .code pre code > .newcode,
[data-step="2"] .code pre code > .newcode,
[data-step="1"] .code pre code > .newcode {
   background-color: var(--greyextralight);
   border: 1px solid var(--blueverydark);
   color: black;
}
</style>
	
