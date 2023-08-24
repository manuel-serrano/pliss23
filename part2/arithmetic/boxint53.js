/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/arithmetic/boxint53.js      */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Thu Aug 24 08:00:42 2023 (serrano)                */
/*    Copyright   :  2021-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Integers                                                         */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../../listings.js";

/*---------------------------------------------------------------------*/
/*    boxint53                                                         */
/*---------------------------------------------------------------------*/
export const boxint53 = <impress.slide title="Box/INT53" class="implementation">
  <div class="slide-title">Box/Int53</div>
  <div class="legend">[-2<sup>53</sup>...2<sup>53</sup>]</div>
  <div class="svgbg" id="boxi">
  <svg:img height="200px" width="900px" 
	   src=${require.resolve( "./svg/boxint53.svg" )}/>
  </div>
  <div class="proscons" step="3-4">
    <span class="plus">+</span> type check, 
    <span class="plus">+</span> overflow, 
    <span class="plus">+</span> int range,
    <span class="minus">-</span> floats
  </div>

  <div class="implementation" step="4">
    Hop
  </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
boxint53.css = <style>
.body * {
   transition: 0.5s all;
}

#boxi {
   margin-top: 1ex;
}

.body[data-step="1"] #boxi {
   transform: scale(1.5) translate(-1.8em, 1ex);
}

.body[data-step="2"] #boxi {
   transform: scale(1.5) translate(1.0em, 1ex);
}
</style>
