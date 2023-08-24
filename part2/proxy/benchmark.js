/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/proxy/benchmark.js          */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Wed Aug 23 17:57:36 2023 (serrano)                */
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
/*    benchmark                                                        */
/*---------------------------------------------------------------------*/
export const benchmark = <impress.slide title="Benchmark">
  <div class="slide-title">Proxy <span class="important">Benchmarks</span></div>
  <div class="imgcontainer center">
     <svg:img width="80%" height="80%" src=${require.resolve( "./svg/proxy-ratio.svg" )}/>
  </div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
benchmark.css = <style>
.imgcontainer {
   width: 70%;
   text-align: center;
   background: white;
}

</style>

