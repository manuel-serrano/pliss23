/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/arithmetic/allfloats.js     */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Thu Aug 24 07:59:55 2023 (serrano)                */
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
/*    allfloats ...                                                    */
/*---------------------------------------------------------------------*/
export const allfloats = <impress.slide title="All Floats" class="implementation">
  <div class="slide-title">All Floats</div>
  <div class="legend">Boxed floating point numbers</div>
  <div class="svgbg">
  <svg:img height="200px" width="900px" 
	   src=${require.resolve( "./svg/allfloats.svg" )}/>
  </div>
  <div class="bad" step="1-3">
    a <span class="important">bad</span> idea...
  </div>
  <div class="badex" step="2-3">
    <tt>a[<span class="important">1.000000000</span>] = a[<span class="important">"1"</span>]</tt>
  </div>
  <div class="badex" step="3">
    <tt>a <span class="important">&</span> 0x4 <span class="important">&lt;&lt</span> 2</tt>
  </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
allfloats.css = <style>
.body * {
   transition: 1s all;
}

.legend {
   margin-bottom: 1ex;
}

.bad {
   font-size: 95%;
}

.badex {
   font-size: 70%;
}

svg text tspan.tag {
   fill: var(--red);
}   
</style>
