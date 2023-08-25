/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/gc/gc.js                    */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 10:08:53 2023                          */
/*    Last change :  Fri Aug 25 15:24:34 2023 (serrano)                */
/*    Copyright   :  2023 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    Garbage Collection                                               */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    import/export                                                    */
/*---------------------------------------------------------------------*/
import { CHAPTER } from "../../chapter.js";
import { slide as intro } from "./intro.js";
import { slide as stopcopy } from "./stopcopy.js";
import { slide as marksweep } from "./marksweep.js";
import { slide as generation } from "./generation.js";
import { slide as ambiguous } from "./ambiguous.js";

/*---------------------------------------------------------------------*/
/*    gc                                                               */
/*---------------------------------------------------------------------*/
export const gc = [
   <chapter number="3" title=${<span class="care">GC</span>}/>,
   intro,
   stopcopy, marksweep, generation, ambiguous
];
