/*=====================================================================*/
/*    serrano/diffusion/talk/mplr22/benchmark/evil.js                  */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Tue Sep 13 08:20:14 2022 (serrano)                */
/*    Copyright   :  2021-22 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    JavaScript benchmark evil                                        */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";

export { evil };

/*---------------------------------------------------------------------*/
/*    evil ...                                                         */
/*---------------------------------------------------------------------*/
const evil = <impress.slide title="Evil" class="benchmark">
   <div class="center title">
    <div class="boldgrey"><span>JavaScript Benchmarks,</span></div>
    <div class="boldgrey">a necessary <span class="titlekey">evil</span>?</div>
  </div>
  
  <div id="evil-language" step="1-">The language is...
  too <span class="emph">big</span>,
       too <span class="emph">dynamic</span>,
       too <span class="emph">intricated</span>
  </div>
  
  <div id="evil-compiler" step="2-">Compiler are highly <span class="titlekey">heuristics</span> dependent</div>
  <div id="evil-benchmark" step="3"><span class="titlekey">heuristics</span> are highly benchmarks dependent<span class="titlekey">!</span></div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    css                                                              */
/*---------------------------------------------------------------------*/
evil.css = <style>
.title {
   color: var(--greydark);
   font-size: 160%;
}

.titlekey {
   color: var(--red);
}

.emph {
   color: var(--greydark);
}
   
.body {
   color: var(--grey);
   font-size: 90%;
}

#evil-language {
   margin-top: 2ex;
   font-size: 80%;
}

#evil-compiler {
   margin-top: 2ex;
}
</style>
