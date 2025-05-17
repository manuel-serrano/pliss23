/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/arithmetic/boxsmi.js        */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Sat May 17 08:36:58 2025 (serrano)                */
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
/*    boxsmi                                                           */
/*---------------------------------------------------------------------*/
export const boxsmi = <impress.slide title="Box/SMI" class="implementation">
  <div class="slide-title">Box/Smi</div>
  <div class="legend">[-2<sup>32</sup>...2<sup>32</sup>-1]</div>
  <div class="svgbg" id="boxs">
  <svg:img height="200px" width="900px" 
	   src=${require.resolve( "./svg/boxsmi.svg" )}/>
  </div>
  <div class="proscons" step="3-4">
    <span class="plus">+</span> type check, 
    <span class="plus">+</span> overflow, 
    <span class="minus">-</span> int range,
    <span class="minus">-</span> floats
  </div>

  <div class="implementation" step="4">
    V8 (Chrome, Chromium, Nodejs)
  </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
boxsmi.css = <style>
.body * {
   transition: 0.5s all;
}

#boxs {
   margin-top: 1ex;
}

.body[data-step="1"] #boxs {
   transform: scale(1.5) translate(-1.8em, 1ex);
}

.body[data-step="2"] #boxs {
   transform: scale(1.5) translate(1.0em, 1ex);
}

.proscons {
   margin-top: 1ex;
}
</style>
