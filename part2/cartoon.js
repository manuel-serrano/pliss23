/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/cartoon.js                  */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu Sep  7 09:40:27 2023 (serrano)                */
/*    Copyright   :  2015-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Pliss23 par 2 title                                              */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import/export ...                                                */
/*---------------------------------------------------------------------*/
import * as path from "path";
import { inriaSVG } from "../config.js";
import * as impress from "hopimpress-0.6.*.hz";
import { MARKDOWN as MD } from "hop:markdown";

export { slide };

/*---------------------------------------------------------------------*/
/*    slide ...                                                        */
/*---------------------------------------------------------------------*/
const slide = <impress.slide title="part 2">
   <div class="container">
     <div class="part-title">Part 2</div>
     <div><span class="title-src">JS</span> &#8594; <span class="title-tgt">Scheme</span></div>
   </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css                                                              */
/*---------------------------------------------------------------------*/
slide.css = <style>
.container {
   border: 16px solid var(--red);
   text-align: center;
   font-size: 200%;
   margin-top: 1ex;
   margin-left: 0.5em;
   margin-right: 0.5em;
}

.part-title {
   color: var(--grey);
   text-decoration: underline;
}

.title-src {
   color: var(--red);
}
</style>;
      
