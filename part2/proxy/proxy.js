/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/proxy/proxy.js              */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:24:33 2023                          */
/*    Last change :  Fri Aug 25 08:29:23 2023 (serrano)                */
/*    Copyright   :  2023 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    JavaScript O["X"]                                                */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import/export ...                                                */
/*---------------------------------------------------------------------*/
import { CHAPTER } from "../../chapter.js";
import { dynamic } from "./dynamic.js";
import { icache } from "./icache.js";
import { whocares } from "./whocares.js";
import { forincares } from "./forincares.js";
import { proxycares } from "./proxycares.js";
import { handlers } from "./handlers.js";
import { whyproxy } from "./whyproxy.js";
import { candidate } from "./candidate.js";
import { stringjs } from "./string.js";
import { mdn } from "./mdn.js";
import { ropes } from "./ropes.js";
import { ropecmp } from "./ropecmp.js";
import { names } from "./names.js";
import { namecmp } from "./namecmp.js";
import { proxyperf } from "./proxyperf.js";
import { solution1 } from "./solution1.js";
import { dynamic1 } from "./dynamic1.js";
import { proxyperf2 } from "./proxyperf2.js";
import { solution2 } from "./solution2.js";
import { benchmark } from "./benchmark.js";

/*---------------------------------------------------------------------*/
/*    proxy                                                            */
/*---------------------------------------------------------------------*/
export const proxy = [
   <chapter number="4" title=${<span class="care">proxy</span>}>
      dynamic properties, proxy objects
      <div class="author">(with Robby Findler)</div>
   </chapter>,
   dynamic, icache, whocares, forincares, proxycares, proxy, handlers,
   whyproxy, candidate,
   stringjs, mdn, ropes, ropecmp, names, namecmp,
   proxyperf, solution1, dynamic1, proxyperf2, solution2, benchmark
];
