/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/aot/aotreally.js            */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Sat May 17 08:38:01 2025 (serrano)                */
/*    Copyright   :  2021-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    AOT really?                                                      */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";

/*---------------------------------------------------------------------*/
/*    AOT, really                                                      */
/*---------------------------------------------------------------------*/
export const aotreally = <impress.slide title="aot, really" class="aot">
   <span class="aotreally">AOT, really<span>?</span></span>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
aotreally.css = <style>
.body {
   text-align: center;
   margin-left: auto;
   margin-right: auto;
   padding-top: 4ex;
}
  
span.aotreally {
   color: var(--greydark);
   font-weight: bold;
   font-size: 250%;
}
  
span.aotreally span {
   color: var(--red);
}
</style>
