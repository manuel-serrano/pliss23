/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/proxy/dynamic.js            */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Sat May 17 08:34:05 2025 (serrano)                */
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
/*    dynamic                                                          */
/*---------------------------------------------------------------------*/
export const dynamic = <impress.slide title="Dynamic Properties">
  <h1 class="markdown">Dynamic Properties</h1>
  <div class="js code" step="1-">
    <lstinputlisting language="javascript" src=${require.resolve("./src/dynprop.js")}/>
   </div>
   <div class="downarrow" step="2-">&#129175;</div>
   <div class="center es-scn" step="2-">
     <img class="es-scn" src=${require.resolve("./img/get.png")}/>
   </div>
   <span class="hidden" step="5"/>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
dynamic.css = <style>
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

h1 {
   margin-bottom: 0.5ex;
}

#js-access {
   margin-top: 0.5ex;
}

div[data-step="0"] #getexpr3,
div[data-step="1"] #getexpr3,
div[data-step="2"] #getexpr3,
div[data-step="4"] #getexpr3,
div[data-step="5"] #getexpr3,
div[data-step="0"] #getcomplexexpr3,
div[data-step="1"] #getcomplexexpr3,
div[data-step="2"] #getcomplexexpr3,
div[data-step="3"] #getcomplexexpr3,
div[data-step="5"] #getcomplexexpr3 {
   display: none;
}

div[data-step="0"] #getexpr4,
div[data-step="1"] #getexpr4,
div[data-step="3"] #getexpr4,
div[data-step="4"] #getexpr4,
div[data-step="0"] #getcomplexexpr4,
div[data-step="1"] #getcomplexexpr4,
div[data-step="2"] #getcomplexexpr4,
div[data-step="3"] #getcomplexexpr4,
div[data-step="4"] #getcomplexexpr4 {
   display: none;
}

#getexpr {
   margin-left: 0.5em;
}

div[data-step="5"] #get3,
div[data-step="4"] #get3 {
   display: none;
   padding: 2px;
}	

div[data-step="3"] #get3 {
   background: var(--greyalmostwhite);
   border: 2px solid var(--red);
   opacity: 0.9;
   padding: 2px;
}	

div[data-step="3"] #getexpr3:before {
   content: " \2263  ";
}
					 
 div.es-scn {			       
   position: absolute;
   bottom: 0.2ex;
   left: 0;
   width: 100%;
   margin-left: auto;
   margin-right: auto;
 }

.downarrow {
  color: var(--javascript-color);
  position: relative;
  left: 1em;
  line-height: 2ex;  
}

div.es-scn {			       
   position: absolute;
   bottom: 0.1ex;
   left: calc(2.5%);
   right: calc(2.5%);
   width: 95%;
   margin-left: auto;
   margin-right: auto;
}

img {
   border: 1px solid #ddd;
   width: 100%;
}
</style>
	
