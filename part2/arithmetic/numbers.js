/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/arithmetic/numbers.js       */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Sat May 17 08:36:28 2025 (serrano)                */
/*    Copyright   :  2021-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Integers                                                         */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { LSTINPUTLISTING } from "../../listings.js";

/*---------------------------------------------------------------------*/
/*    numbers                                                          */
/*---------------------------------------------------------------------*/
export const numbers = <impress.slide title="numbers" class="implementation">
   <div class="center big">
    NUMBERS
  </div>
   <div class="center small">
    (no fixnums<span>!</span>)
  </div>
</impress.slide>;

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
numbers.css = <style>
.body {
   background-color: var(--greyverydark);
}

.body div {
   margin-top: 1.4ex;
}

.big {
   color: white;
   font-size: 400%;
   font-weight: bold;
   letter-spacing: 0.05em;
   line-height: 1ex;
}

.small {
  font-weight: bold;
  font-size: 200%;
  letter-spacing: 0.05em;
  transform: scale(1.3, 1);
  line-height: 1ex;
   color: var(--greylight);
}

span {
  color: var(--red);
}
</style>



 
