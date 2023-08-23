/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/proxy/candidate.js          */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Wed Aug 23 14:43:39 2023 (serrano)                */
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
/*    candidate                                                        */
/*---------------------------------------------------------------------*/
export const candidate = <impress.slide title="Why Proxy Objects">
   <div class="slide-title" step="0-2">a <span id="candidate">Candidate</span><span id="nosol">NO</span> Solution</div>
  <div class="c code">
    <lstinputlisting language="c" linerange="6-10" src=${require.resolve("./src/hclass.c")}/>
  </div>
  <div class="downarrow" step="0-1">&#129175;</div>
  <div class="c code" id="dyn-solution">
    <lstinputlisting language="c" src=${require.resolve("./src/noclass.c")}/>
   </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
candidate.css = <style>
.body * {
   transition: 1s all;
}

pre {
   margin-bottom: 0;
}

#nosol {
   color: var(--red);
}

div[data-step="1"] #nosol,
div[data-step="0"] #nosol {
   display: none;
}

div[data-step="2"] #candidate {
   display: none;
}

div[data-step="1"] #candidate,
div[data-step="0"] #candidate {
   display: inlne-block;
}

div[data-step="1"] .nosol {
   border-radius: 8px;
   background-color: var(--green);
   color: white;
   font-weight: bold;
   padding: 0 8px 2px 8px;
}

div[data-step="2"] .nosol {
   border-radius: 8px;
   background-color: var(--red);
   color: white;
   font-weight: bold;
   padding: 0 8px 2px 8px;
  }

.downarrow {
  color: var(--c-color);
  position: relative;
  left: 1em;
  line-height: 2ex;  
}

#dyn-solution {
   position: relative;
   top: -1ex;
}
</style>

