/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/aot/scmclo.js               */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Sat May 17 08:39:20 2025 (serrano)                */
/*    Copyright   :  2021-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Scheme closure                                                   */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { LSTINPUTLISTING } from "../../listings.js";

/*---------------------------------------------------------------------*/
/*    scmclo ...                                                       */
/*---------------------------------------------------------------------*/
export const scmclo = <impress.slide title="Scheme closures" class="aot">
   <div class="slide-title">
      Scheme <span class="important">vs</span> JavaScript -- <span class="what">Scheme Closures</span>
   </div>
   <div class="container">
     <div class="listing">
       <lstinputlisting language="scheme" src=${require.resolve("./src/clos.scm")}/>
     </div>
     <div step="1" class="closure">
       <svg:img prefix=${false} width="100%" src=${require.resolve( "./svg/clos.svg" )}/>
     </div>
   </div>
</impress.slide>;
	 
/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
scmclo.css = <style>
.body * {
   transition: 1s all;
}

pre {
   font-size: 40%;
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
   transition-delay: 0.5s;
}

canvas[data-hss-tag="hopimpress-arrow"] {
   color: var(--scheme-color);
}

</style>

