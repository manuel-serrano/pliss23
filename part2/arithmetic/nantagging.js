/*=====================================================================*/
/*    .../diffusion/talk/pliss23/part2/arithmetic/nantagging.js        */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Sat May 17 08:36:49 2025 (serrano)                */
/*    Copyright   :  2021-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Integers                                                         */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { LSTINPUTLISTING } from "../../listings.js";

/*---------------------------------------------------------------------*/
/*    nantagging                                                       */
/*---------------------------------------------------------------------*/
export const nantagging = <impress.slide title="NaN Tagging" class="implementation">
  <div class="slide-title">NaN Tagging</div>
  <div class="legend">2<sup>52</sup>-1 Not-a-Number, 2<sup>48</sup> addr space</div>
  <div class="svgbg" id="nant">
  <svg:img height="200px" width="900px" src=${require.resolve("./svg/nantagging.svg")}/>
  </div>
  
  <div class="proscons" step="2-3">
    <span class="minus">-</span> type check, 
    <span class="plusplus">+</span> overflow, 
    <span class="minus">-</span> int range,
    <span class="plusplus">+</span> floats
  </div>
  
  <div class="implementation" step="3">
    SpiderMonkey (Firefox), WebKit (Safari)
  </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
nantagging.css = <style>
#nant {
   transition: 0.5s all;
}

#nant {
   margin-top: 1ex;
}

.body[data-step="1"] #nant {
   transform: scale(2) translate(0.2em, 2ex);
}

.body .step2 {
   margin-top: 1ex;
}
</style>
