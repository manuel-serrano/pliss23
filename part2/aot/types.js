/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/aot/types.js                */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Thu Aug 24 09:05:15 2023 (serrano)                */
/*    Copyright   :  2021-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Opportunistic typing                                             */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../../listings.js";

/*---------------------------------------------------------------------*/
/*    types ...                                                        */
/*---------------------------------------------------------------------*/
export const types = <impress.slide title="Opportunistic Typing" class="aot">
  <div class="center boldgrey"><span class="titlekey">Opportunistic</span> Typing</div>
  <div step="1-" class="javascript code dispatch">
    <lstinputlisting language="javascript" src=${require.resolve("./src/reverse-hinted.js")} linerange="12-14"/>
  </div>
  <div step="2-" class="javascript code hinted">
    <lstinputlisting language="javascript" src=${require.resolve("./src/reverse-hinted.js")} linerange="4-11"/>
  </div>
  <div step="3-" class="javascript code generic">
    <lstinputlisting language="javascript" src=${require.resolve("./src/reverse-hinted.js")} linerange="1-3"/>
  </div>
  <div step="4" class="javascript code common">
    <lstinputlisting language="javascript" src=${require.resolve("./src/reverse-hinted.js")} linerange="15-16"/>
  </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    Style                                                            */
/*---------------------------------------------------------------------*/
types.css = <style>
pre {
   font-size: 25%;
}

div.boldgrey {
  margin-bottom: 1ex;
}

.titlekey {
  color: var(--red);
}

.body[data-step="1"] .step0,
.body[data-step="2"] .step0,
.body[data-step="3"] .step0,
.body[data-step="4"] .step0 {
   display: none;
   opacity: 1;
}

.type {
   color: var(--type-color);
   font-weight: bold;
}

.arr {
   color: var(--type-color);
}

div.javascript {
   margin-bottom: 0.2ex;
}

pre {
   margin-top: 0;
   margin-bottom: 0;
}

.generic pre.listings {
   border-top-color: var(--orange);
}

.hinted pre.listings {
   border-top-color: var(--green);
}

.dispatch pre.listings {
   border-top-color: var(--javascript-color);
}
</style>
