/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/aot/jsclo.js                */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Thu Aug 24 08:46:23 2023 (serrano)                */
/*    Copyright   :  2021-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    JavaScript closure                                               */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../../listings.js";

/*---------------------------------------------------------------------*/
/*    jsclo ...                                                        */
/*---------------------------------------------------------------------*/
export const jsclo = <impress.slide title="JavaScript closures" class="aot">
   <div class="slide-title">
      JavaScript <span class="important">vs</span> Scheme -- <span class="what">JavaScript Closures</span>
   </div>
   <div class="container">
     <div class="listing">
       <lstinputlisting language="javascript" src=${require.resolve("./src/cloj.js")}/>
     </div>
     <div step="1-" class="closure">
       <svg:img prefix=${false} width="100%" src=${require.resolve( "./svg/cloj.svg" )}/>
     </div>
   </div>
</impress.slide>;
	 
/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
jsclo.css = <style>
.scm {
   transition: 1s all;
}

.slide-title {
   font-size: 85%;
}

.container {
   position: absolute;
   width: 100%;
   top: 3ex;
}
     
.important {
   color: var(--red);
  }
  
.what {
   color: var(--grey);
}
  
.listing {
   position: absolute;
   top: 0;
   left: 1em;
   right: 1em;
}

.listings {
   font-size: 50%;
}

.listing,
.body[data-step="1"] .listing {
   xwidth: calc(var(--slideWidth)/2.5);
   xleft: 1em;
   xright: auto;
   transform: scale(0.48, 0.5) translate(-1em, 0);
   transform-origin: top left;
}

.closure {
   width: 50%;
   right: 0.2em;
   background: white;
   border: 1px solid #ddd;
   position: absolute;
   top: 0;
   padding: 0.1em;
}
  
.body[data-step="0"] .closure {
   opacity: 1;
}

.body[data-step="0"] svg .js {
   opacity: 0;
}

.body[data-step="2"] svg *.scm,
.body[data-step="1"] svg *.scm {
   opacity: 0.5;
}
</style>

