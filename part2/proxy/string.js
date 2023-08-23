/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/proxy/string.js             */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:24:33 2023                          */
/*    Last change :  Wed Aug 23 16:30:42 2023 (serrano)                */
/*    Copyright   :  2023 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    JavaScript O["X"]                                                */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import/export ...                                                */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import { slideWidth } from "../../config.js"

/*---------------------------------------------------------------------*/
/*    stringjs                                                         */
/*---------------------------------------------------------------------*/
export const stringjs = <impress.slide class="chapter" title="string" data-x=${slideWidth + 100} data-duration=500>
   <div class="chapter-title">
      <span class="important">"</span>x<span class="important">"</span>
   </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
stringjs.css = <style>
.body {
   font-size: 300%;
   background-color: var(--greydark);
   color: var(--greyalmostwhite);
}

.chapter-title {
   margin-top: 1ex;
   font-weight: bold;
}
</style>

