/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/proxy/proxy.js              */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:24:33 2023                          */
/*    Last change :  Wed Aug 23 09:42:04 2023 (serrano)                */
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

/*---------------------------------------------------------------------*/
/*    proxy                                                            */
/*---------------------------------------------------------------------*/
export const proxy = [
   <chapter number="4" title=${<span class="title">o[<span class="important">"x"</span>]</span>}>
      dynamic properties, proxy objects
      <div class="author">(with Robby Findler)</div>
   </chapter>,
   dynamic, icache, whocares
];
