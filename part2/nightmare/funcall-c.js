/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/nightmare/funcall-c.js      */
/*    -------------------------------------------------------------    */
/*    Author      :  manuel serrano                                    */
/*    Creation    :  Sat Aug 13 15:56:38 2022                          */
/*    Last change :  Sat May 17 08:27:41 2025 (serrano)                */
/*    Copyright   :  2022-25 manuel serrano                            */
/*    -------------------------------------------------------------    */
/*    C funcall                                                        */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import * as impress from "@hop/hopimpress";
import { LSTINPUTLISTING } from "../../listings.js";

export { funcallC };

/*---------------------------------------------------------------------*/
/*    funcallC                                                         */
/*---------------------------------------------------------------------*/
const funcallC = <impress.slide title="f(1, 2) (C)" class="javascript">
  <div class="c code">
    <lstinputlisting language="c" src=${require.resolve("./src/funcall.c")}/>
  </div>
  <div class="downarrow" step="1">&#129175;</div>
  <div class="asm code" step="1">
    <lstinputlisting language="asm" src=${require.resolve("./src/funcall.s")}/>
  </div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    css                                                              */
/*---------------------------------------------------------------------*/
funcallC.css = <style>
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

div.asm {
   position: relative;
   top: -1ex;
}
</style>
	
