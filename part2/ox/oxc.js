/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/ox/oxc.js                   */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Tue Aug 22 15:14:32 2023 (serrano)                */
/*    Copyright   :  2023 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    A slide                                                          */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../../listings.js";

/*---------------------------------------------------------------------*/
/*    oxc                                                              */
/*---------------------------------------------------------------------*/
export const oxc = <impress.slide title="o.x (C)">
  <div class="c code">
    <lstinputlisting language="c" src=${require.resolve("./src/struct.c")}/>
  </div>
  <div class="downarrow" step="1">&#129175;</div>
  <div class="asm code" step="1">
    <lstinputlisting language="asm" src=${require.resolve("./src/struct.s")}/>
  </div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
oxc.css = <style>
.body * {
   transition: 1s all;
}

pre {
   font-size: 40%;
}

.listings {
  margin-top: 0;
  margin-bottom: 0;
}

div.c {
  margin-top: 0.5ex;
}

.downarrow {
  color: var(--c-color);
  position: relative;
  left: 1em;
  line-height: 2ex;  
}
</style>
	
