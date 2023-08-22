/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/ox/oxscm.js                 */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Tue Aug 22 16:54:33 2023 (serrano)                */
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
/*    oxscm                                                            */
/*---------------------------------------------------------------------*/
export const oxscm = <impress.slide title="o.x (Scheme)">
  <div class="c code">
    <lstinputlisting language="scheme" src=${require.resolve("./src/class.scm")}/>
  </div>
  <div class="downarrow downarrow-scm" step="1-">&#129175;</div>
  <div class="C code" step="1-">
    <lstinputlisting language="c" src=${require.resolve("./src/class.c")}/>
  </div>
  <div class="downarrow downarrow-C" step="2">&#129175;</div>
  <div class="asm code" step="2">
    <lstinputlisting language="asm" src=${require.resolve("./src/class.s")}/>
  </div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
oxscm.css = <style>
.body * {
   transition: 1s all;
}

pre {
   font-size: 35%;
}

.listings {
  margin-top: 0;
  margin-bottom: 0;
}

div.c {
  margin-top: 0.5ex;
}

.downarrow-scm {
  position: relative;
  left: 1em;
  line-height: 2ex;  
  color: var(--scheme-color);
}

.downarrow-C {
  position: relative;
  left: 1em;
  line-height: 2ex;  
   color: var(--c-color);
   top: -1ex;
}

div.C {
   position: relative;
   top: -1ex;
}
   
div.asm {
   position: relative;
   top: -2ex;
}
</style>
	
