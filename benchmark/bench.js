/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/benchmark/bench.js                */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Sat May 17 08:40:08 2025 (serrano)                */
/*    Copyright   :  2021-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    JavaScript benchmark                                             */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";

export { bench };

/*---------------------------------------------------------------------*/
/*    bench ...                                                        */
/*---------------------------------------------------------------------*/
const bench = <impress.slide title=${<span class="important">Benchmark</span>} class="benchmark">
   <div class="benchmark">
     <div class="hr" id="line1">&nbsp;</div>
     <div class="hr" id="line2">&nbsp;</div>
     <div class="hr" id="line3">&nbsp;</div>
     <div class="hr" id="line4">&nbsp;</div>
     <div class="text">
        BENCHMARK
     </div>
   </div>
</impress.slide>;
 
/*---------------------------------------------------------------------*/
/*    css                                                              */
/*---------------------------------------------------------------------*/
bench.css = <style>
.benchmark {
     font-size: 200%;
     border-top: 0;
     border-right: 0;
     border: 3px solid var(--greydark);
     width: 70%;
     margin-left: auto;
     margin-right: auto;
     margin-top: 2ex;
     position: relative;
     height: 5ex;
}

.benchmark div.text {
     z-index: 2;
     position: absolute;
     bottom: 0.2ex;
     left: 0.4em;
     font-size: 120%;
     font-weight: bold;
     color: var(--greydark);
}

.benchmark div.hr {
     position: absolute;
     border-bottom: 2px dashed var(--greylight);
     z-index: 1;
     line-height: 0.16em;
     left: 0;
     right: 0;
     width: 100%;
}

.benchmark #line1 {
     bottom: 1ex;
}

.benchmark #line2 {
     bottom: 2ex;
}

.benchmark #line3 {
     bottom: 3ex;
}

.benchmark #line4 {
     bottom: 4ex;
}
</style>
