/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/arithmetic/benchnum.js      */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Thu Aug 24 08:03:00 2023 (serrano)                */
/*    Copyright   :  2021-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Integers                                                         */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../../listings.js";
import { gnuplot } from "../../utils.js";

export { benchnum };

/*---------------------------------------------------------------------*/
/*    benchnum                                                         */
/*---------------------------------------------------------------------*/
const benchnum = <impress.slide title="Integers benchmark" class="implementation">
  <div class="svgbg" id="benchnum">
    <svg:img class="svg" width="100%" src=${gnuplot(require.resolve("./integer.plot"))}/>
  </div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
benchnum.css = <style>
#benchnum {
   margin-top: 0.3ex;
}

div.svgbg {
  height: 95%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 0.2ex 0.1em 0ex 0.1em;
  border: 1px solid var(--greylight);
}
</style>

