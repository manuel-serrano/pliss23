/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/benchmark/memory.js               */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Mon Sep 19 13:43:16 2022                          */
/*    Last change :  Sat May 17 08:41:04 2025 (serrano)                */
/*    Copyright   :  2022-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Memory footprint                                                 */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { gnuplot } from "../utils.js";

export { memory };

/*---------------------------------------------------------------------*/
/*    memory ...                                                       */
/*---------------------------------------------------------------------*/
const memory = <impress.slide title="Memory footprint" class="benchmark">
   <div class="bench-title">
     memory
   </div>
	 
   <div class="svgbg">
     <div class="viewport">
       <svg:img height="80%" width="80%" step="0-" 
 	  src=${gnuplot(require.resolve("./vsz.plot"))}/>
       <svg:img height="80%" width="80%" step="1"
 	  src=${gnuplot(require.resolve("./rss.plot"))}/>
     </div>
   </div>
</impress.slide>
 
/*---------------------------------------------------------------------*/
/*    css                                                              */
/*---------------------------------------------------------------------*/
memory.css = <style>
.bench-title {
   transition: 1s all;
   bottom: 1ex;
   left: 1em;
   position: absolute;
   font-size: 250%;
}

.bench-title {
   transform: rotate(-90deg);
   transform-origin: bottom left;
   color: var(--greydark);
   font-weight: bold;
   position: absolute;
   bottom: 0;
   left: 1em;
   text-align: center;
   letter-spacing: 0.1em;
   width: var(--slideHeight);
   font-size: 140%;
}
  
.svgbg {
   transition: 1s all;
   transition-delay: 1s;
   position: absolute;
   top: 0.5ex;
   bottom: 0.5ex;
   left: 2em;
   right: 0.5em;
   background: white;
   border: 1px solid #ddd;
}

.viewport {
   transition: 1s all;
   position: relative;
   top: 0;
}

.body[data-step="1"] .viewport {
   top: -8.3em;
}

</style>
