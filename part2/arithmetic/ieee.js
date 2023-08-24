/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/arithmetic/ieee.js          */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Thu Aug 24 07:59:39 2023 (serrano)                */
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
/*    ieee754 ...                                                      */
/*---------------------------------------------------------------------*/
export const ieee754 = <impress.slide title="ieee" class="implementation">
  <div class="slide-title">64-bit format IEEE-754</div>
  <div class="legend" step="1-2">How to implement integers<span class="important">?</span></div>
  <ul step="2">
    <li>all <span>floats</span></li>
    <li><span>NaN</span> tagging</li>
    <li><span>box/smi</span></li>
    <li><span>box/int53</span></li>
  </ul>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css                                                              */
/*---------------------------------------------------------------------*/
ieee754.css = <style>
.body * {
   transition: 1s all;
}

ul {
   padding-top: 1ex;
}
  
li {
  transition: 1s all;
}

li span {
   color: var(--grey);
}
  
ul {
   list-style: none;
   font-size: 100%;
   margin-top: 1ex;
}
  
li:before {
   content: "\25cf";
   display: none;
   width: 1em;
   margin-left: -1.5em;
}
</style>

