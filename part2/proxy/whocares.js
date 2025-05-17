/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/proxy/whocares.js           */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Sat May 17 08:34:22 2025 (serrano)                */
/*    Copyright   :  2023-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    A slide                                                          */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import * as impress from "@hop/hopimpress";

/*---------------------------------------------------------------------*/
/*    whocares                                                         */
/*---------------------------------------------------------------------*/
export const whocares = <impress.slide title="Who cares?"
				       class="important"
				       data-duration=0>
  <div class="bottom">
    who cares<span class="important">?</span>
  </div>
</impress.slide>

whocares.css = <style>
  div.bottom {
     font-size: 200%;
     position: absolute;
     bottom: 1ex;
     right: 0.5em;
  }
</style>

