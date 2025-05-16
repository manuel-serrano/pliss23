/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/chapter.js                        */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Sun Oct 18 17:00:13 2015                          */
/*    Last change :  Thu May 15 16:47:50 2025 (serrano)                */
/*    Copyright   :  2015-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    chapter                                                          */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    imports                                                          */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import * as config from "./config.js";

export { CHAPTER };

/*---------------------------------------------------------------------*/
/*    chapter ...                                                      */
/*---------------------------------------------------------------------*/
function CHAPTER(attrs, ... nodes) {
   return <impress.slide title=${"== " + attrs.title + " =="} class="chapter">
     ${ attrs.number ? <div class="number">Chapter ${attrs.number}</div> : "" }
      <div class="title">${attrs.title}</div>
      <div class="legend">${ nodes }</div>
   </impress.slide>;
}
