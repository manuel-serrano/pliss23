/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/benchmark/jetstream.js            */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Sat May 17 08:40:22 2025 (serrano)                */
/*    Copyright   :  2021-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    JavaScript jetstream benchmark                                   */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { gnuplot } from "../utils.js";

export { jetstream };

/*---------------------------------------------------------------------*/
/*    jetstream ...                                                    */
/*---------------------------------------------------------------------*/
const jetstream = <impress.slide title="Jetstream" class="benchmark">
   <div class="bench-title">
     jetstream
   </div>
	 
   <div class="svgbg" step="1">
     <svg:img height="100%" width="100%" 
 	src=${gnuplot(require.resolve("./jetstream.plot"))}/>
   </div>
</impress.slide>
 
/*---------------------------------------------------------------------*/
/*    css                                                              */
/*---------------------------------------------------------------------*/
jetstream.css = <style>
.bench-title {
   transition: 1s all;
   bottom: 1ex;
   left: 1em;
   position: absolute;
   font-size: 250%;
}

.body[data-step="1"] .bench-title {
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
   top: 1ex;
   bottom: 1ex;
   left: 2em;
   right: 2em;
   background: white;
   border: 1px solid #ddd;
}

.viewport {
  transition: 1s all;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.body[data-step="1"] .viewport {
  top: -10em;
}

</style>
