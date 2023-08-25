/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/ox/ox.js                    */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:24:33 2023                          */
/*    Last change :  Fri Aug 25 08:28:23 2023 (serrano)                */
/*    Copyright   :  2023 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    JavaScript O.X                                                   */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import/export ...                                                */
/*---------------------------------------------------------------------*/
import { CHAPTER } from "../../chapter.js";
import { oxc } from "./oxc.js";
import { oxscm } from "./oxscm.js";
import { oxjs } from "./oxjs.js";
import { testjs } from "./testjs.js";
import { mono } from "./mono.js";
import { getter } from "./getter.js";
import { proto } from "./proto.js";
import { hclass } from "./hclass.js";
import { poly } from "./poly.js";

/*---------------------------------------------------------------------*/
/*    ox                                                               */
/*---------------------------------------------------------------------*/
export const ox = [
   <chapter number="3" title=${<span class="care">o.x</span>}>
      hidden classes, inline caches
      <div class="author">(with Marc Feeley)</div>
   </chapter>,
   oxc, oxscm, oxjs, testjs, mono, getter, proto, hclass, poly
];

