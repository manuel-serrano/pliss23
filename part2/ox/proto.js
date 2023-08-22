/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/ox/proto.js                 */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Tue Aug 22 17:46:26 2023 (serrano)                */
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
/*    proto                                                            */
/*---------------------------------------------------------------------*/
export const proto = <impress.slide title="protos">
  <div class="js code">
    <lstinputlisting language="javascript" src=${require.resolve("./src/proto.js")}/>
   </div>
  <div class="downarrow" step="1-">&#129175;</div>
   
  <div class="c code" step="1-">
    <lstinputlisting language="c" src=${require.resolve("./src/icache-proto.c")}/>
   </div>
   
  <div class="imgcontainer" step="3">
    <svg:img width="100%" height="100%" id="acache" src=${require.resolve( "./svg/pcache.svg" )}/>
   </div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
proto.css = <style>
.body * {
   transition: 1s all;
}

pre {
   margin-bottom: 0;
   font-size: 30%;
}
   
.downarrow {
  color: var(--javascript-color);
  position: relative;
  left: 1em;
  line-height: 2ex;  
}

div.c {
   position: relative;
   top: -1ex;
}

.imgcontainer {
   position: absolute;
   bottom: 0.4ex;
   right: 0.4em;
   border: 4px solid var(--c-color);
   width: 10em;
   background-color: var(--greyalmostwhite);
   padding: 16px;
}

[data-step="2"] .code pre code > .newcode,
[data-step="3"] .code pre code > .newcode {
   background-color: var(--greyextralight);
   border: 1px solid var(--blueverydark);
   color: black;
}
</style>
	
