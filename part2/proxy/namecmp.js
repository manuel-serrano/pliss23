/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/proxy/namecmp.js            */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Wed Aug 23 16:06:02 2023 (serrano)                */
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
/*    namecmp                                                          */
/*---------------------------------------------------------------------*/
export const namecmp = <impress.slide title="Namecmp">
   <div id="strcmp-all">
     <div class="slide-title">Property Names Equality</div>
     <div class="c code" step="0-1">
       <lstinputlisting language="c" src=${require.resolve("./src/cache-miss2.c")}/>
     </div>
   </div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
namecmp.css = <style>
.body * {
   transition: 1s all;
}

pre {
   font-size: 23%;
}

div.c {
   margin-bottom: 0.5ex;
}

.listings {
  margin-top: 0;
  margin-bottom: 0;
}

.slide-title {
   margin-bottom: 0.5ex;
   color: var(--greydark);
}

div[data-step="1"] #ropeeq {
   border: 4px solid var(--green);
   border-radius: 8px;
   background: var(--greyextralight);
   font-weight: bold;
   opacity: 1;
}

div[data-step="1"] #strcmp-container pre code > * {
   transition: 1s all;
}

div[data-step="1"] #strcmp-container pre code > * {
   opacity: 0.9;
}

div #strcmp-container pre code #namecmp {
   transition: 1s -webkit-filter;
   opacity: 1;
}

#strcmp-all {
   transition: 1s all;
}

div[data-step="1"] #strcmp-all  {
   transform: translate(3.3em, -1ex ) scale( 1.8 );
}
</style>
	
