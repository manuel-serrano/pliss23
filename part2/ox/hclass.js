/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/ox/hclass.js                */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Tue Aug 22 18:11:43 2023 (serrano)                */
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
/*    hclass                                                           */
/*---------------------------------------------------------------------*/
export const hclass = <impress.slide title="New Hidden Classes">
  <div class="javascript code">
    <lstinputlisting language="javascript" src=${require.resolve("./src/hclass.js")}/>
   </div>
   
  <div class="imgcontainer" step="1-">
    <svg:img width="100%" height="100%" id="hcache" src=${require.resolve( "./svg/hclass.svg" )}/>
   </div>

   <div id="invalidation" step="2-">
     <div class="slide-title"><span>Invalidations...</span></div>
  
     <ul class="markdown">
       <li class="markdown" step="3-"> any modification to any <strong>prototype</strong> object</li>
       <li class="markdown" step="4-"> any <strong>overriding</strong> of a prototype property</li>
       <li class="markdown" step="5-"> any property <strong>deletion</strong></li>
     </ul>
   </div>
   <div class="imgcontainerScroll" step="6">
     <div class="svgcontainerLarge">
       <svg:img id="mono2" width="100%" height="100%" src=${require.resolve( "./svg/cache-proto.svg" )}/>
     </div>
   </div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
hclass.css = <style>
.body,
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

.imgcontainer {
   margin-top: 1ex;
   width: 75%;
   margin-left: auto;
   margin-right: auto;
   text-align: center;
   border: 4px solid var(--c-color);
   background-color: var(--greyalmostwhite);
   padding: 16px;
}

.svgcontainerLarge {
   position: relative;
   border: 4px solid var(--grey);
   width: 68%;
   height: 90%;
   background-color: white;
   margin-left: auto;
   margin-right: auto;
   text-align: center;
}

div[data-step="6"] {
   top: -29ex;
}

div[data-step="5"],
div[data-step="4"],
div[data-step="3"],
div[data-step="2"] {
   top: -15ex;
}

#invalidation {
   margin-top: 2ex;
}

ul {
   font-weight: bold;
   font-size: 90%;
}

ul code {
   font-size: 85%;
}
</style>
	
