/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/nightmare/ox-js.js          */
/*    -------------------------------------------------------------    */
/*    Author      :  manuel serrano                                    */
/*    Creation    :  Sat Aug 13 15:56:38 2022                          */
/*    Last change :  Thu Aug 24 07:46:49 2023 (serrano)                */
/*    Copyright   :  2022-23 manuel serrano                            */
/*    -------------------------------------------------------------    */
/*    JavaScript Property access                                       */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../../listings.js";

export { oxJS };

/*---------------------------------------------------------------------*/
/*    oxJS                                                             */
/*---------------------------------------------------------------------*/
const oxJS = <impress.slide title="o.x (JavaScript)" class="javascript">
  <div class="js code">
    <lstinputlisting language="javascript" src=${require.resolve("./src/class.js")}/>
  </div>
  <div class="downarrow" step="1-3">&#129175;</div>
  <div class="center es-scn" step="1">
    <img class="es-scn" src=${require.resolve("./img/get.png")}/>
  </div>
  <div class="center es-scn" step="2">
    <img class="es-scn" src=${require.resolve("./img/getprop.png")}/>
  </div>
  <div class="center es-scn" step="3">
    <img class="es-scn" src=${require.resolve("./img/getownprop.png")}/>
  </div>
  
  <div class="gettells problem center" step="4">
    Accessing a JavaScript object property involves many
    <em>complex semantics</em> steps
   </div>
</impress.slide>

oxJS.css = <style>
.body * {
   transition: 1s all;
}

em {
   font-style: normal;
   color: var(--greydark);
}

pre {
   font-size: 40%;
}

.listings {
  margin-top: 0;
  margin-bottom: 0;
}

.downarrow {
  color: var(--javascript-color);
  position: relative;
  left: 1em;
  line-height: 2ex;  
}

div.js {
   margin-top: 0.5ex;
}

div.es-scn {			       
   position: absolute;
   bottom: 0.1ex;
   left: 1em;
   right: 1em;
   width: calc(100% - 2em);
   margin-left: auto;
   margin-right: auto;
}

img {
   border: 1px solid #ddd;
   width: 100%;
}

.gettells {
   transition: 1s all;
   left: 2em;
   right: 2em;
   bottom: 4ex;
   position: absolute;
   color: var(--grey);
   font-weight: bold;
}

.problem {
   font-family: SpecialElite;
   border: 0.4ex solid var(--red);
   border-radius: 0.4ex;
   font-weight: bold;
   transform-origin: left bottom;
   -webkit-transform-origin: left bottom;
   font-size: 80%;
   padding: 0.8ex 0.8ex 0.4ex 0.8ex;
   background: var(--greydark);
   color: var(--greyverylight);
}

.problem em {
   color: white;
}

</style>
