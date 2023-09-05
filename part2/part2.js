/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/part2.js                    */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 08:46:35 2023                          */
/*    Last change :  Tue Sep  5 22:36:26 2023 (serrano)                */
/*    Copyright   :  2023 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    PLISS23, Part 2                                                  */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import { slide as cartoon } from "./cartoon.js";
import { title } from "./title.js";
import { nightmare } from "./nightmare/nightmare.js";
import { variables } from "./variables/variables.js";
import { ox } from "./ox/ox.js";
import { proxy } from "./proxy/proxy.js";
import { arithmetic } from "./arithmetic/arithmetic.js";
import { aot } from "./aot/aot.js";

/*---------------------------------------------------------------------*/
/*    part2                                                            */
/*---------------------------------------------------------------------*/
export const part2 = [
   cartoon, part2, title, nightmare, variables, ox, proxy,
   arithmetic, aot
];
