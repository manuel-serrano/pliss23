/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/nightmare/ox-c.js           */
/*    -------------------------------------------------------------    */
/*    Author      :  manuel serrano                                    */
/*    Creation    :  Sat Aug 13 15:56:38 2022                          */
/*    Last change :  Sat May 17 08:27:27 2025 (serrano)                */
/*    Copyright   :  2022-25 manuel serrano                            */
/*    -------------------------------------------------------------    */
/*    C Property access                                                */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { LSTINPUTLISTING } from "../../listings.js";

/*---------------------------------------------------------------------*/
/*    oxC                                                              */
/*---------------------------------------------------------------------*/
export const oxC = <impress.slide title="o.x (C)" class="javascript">
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
oxC.css = <style>
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
	
