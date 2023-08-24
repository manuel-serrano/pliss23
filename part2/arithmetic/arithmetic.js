/*=====================================================================*/
/*    .../diffusion/talk/pliss23/part2/arithmetic/arithmetic.js        */
/*    -------------------------------------------------------------    */
/*    Author      :  manuel serrano                                    */
/*    Creation    :  Sat Aug 13 15:56:38 2022                          */
/*    Last change :  Thu Aug 24 08:12:35 2023 (serrano)                */
/*    Copyright   :  2022-23 manuel serrano                            */
/*    -------------------------------------------------------------    */
/*    JavaScript Arithmetic                                            */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import { CHAPTER } from "../../chapter.js";
import { numbers } from "./numbers.js";
import { ieee754 } from "./ieee.js";
import { allfloats } from "./allfloats.js";
import { nantagging } from "./nantagging.js";
import { boxsmi } from "./boxsmi.js";
import { boxint53 } from "./boxint53.js";
import { quiz1 } from "./quiz1.js";
import { quiz2 } from "./quiz2.js";
import { benchnum } from "./benchnum.js";

/*---------------------------------------------------------------------*/
/*    style ...                                                        */
/*---------------------------------------------------------------------*/
const style = <style>
.implementation {   
   text-align: center;
   font-weight: bold;
   margin-left: auto;
   margin-right: auto;
   color: var(--greydark);
}

.implementation .legend {
   font-size: 90%;
   color: var(--grey);
}
   
.implementation .important {
  color: var(--red);
}

.implementation .minus {
   color: var(--red);
}

.implementation .plus {
   color: var(--green);
}

.implementation .plusplus {
   color: var(--citron);
   text-shadow: 4px 4px var(--green);
}

.implementation .important {
   color: var(--red)
}
  
.implementation .proscons {
   font-size: 100%;
}

.implementation .implementation {
   color: var(--grey);
   font-size: 100%;
}

.implementation svg text tspan.tag {
   fill: var(--red);
}   

.implementation svg text tspan.unused {
   fill: var(--grey);
}   

.implementation svg text tspan.used {
   fill: var(--greendark);
}   

.implementation .svgbg {
   background: white;
   width: 95%;
   margin-left: auto;
   margin-right: auto;
}

.implementation tt {
   color: var(--greydark);
   font-family: SpecialElite;
}
</style>;
   
/*---------------------------------------------------------------------*/
/*    implementation ...                                               */
/*---------------------------------------------------------------------*/
export const arithmetic = [
   <chapter number="5" title="Arithmetic"></chapter>,
   style, numbers, ieee754, allfloats, nantagging, boxsmi, boxint53, 
   benchnum, quiz2, quiz1
];
