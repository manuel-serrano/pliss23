/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/ox/mono.js                  */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Sat May 17 08:32:43 2025 (serrano)                */
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
/*    mono                                                             */
/*---------------------------------------------------------------------*/
export const mono = <impress.slide title="o.x (monomorphic)">
   <div class="imgcontainer">
     <div class="svgcontainer" step="0">
       <svg:img id="mono1" width="100%" height="100%" src=${require.resolve( "./svg/cache-remainder.svg" )}/>
     </div>
     <div class="svgcontainer" step="1">
       <svg:img id="mono2" width="100%" height="100%" src=${require.resolve( "./svg/cache-mono.svg" )}/>
     </div>
  </div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
mono.css = <style>
.imgcontainer {
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
</style>
	
