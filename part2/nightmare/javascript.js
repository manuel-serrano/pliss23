/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/nightmare/javascript.js     */
/*    -------------------------------------------------------------    */
/*    Author      :  manuel serrano                                    */
/*    Creation    :  Sat Aug 13 15:56:38 2022                          */
/*    Last change :  Tue Aug 22 10:18:34 2023 (serrano)                */
/*    Copyright   :  2022-23 manuel serrano                            */
/*    -------------------------------------------------------------    */
/*    JavaScript nightmare                                             */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import/export ...                                                */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../../listings.js";

import { loop } from "./loop.js";
import { oxC } from "./ox-c.js";
import { oxJS } from "./ox-js.js";
import { funcallC } from "./funcall-c.js";
import { funcallJS } from "./funcall-js.js";
import { miscJS } from "./misc.js";

export { javascript };

/*---------------------------------------------------------------------*/
/*    javascript                                                       */
/*---------------------------------------------------------------------*/
const javascript = [loop, oxC, oxJS, funcallC, funcallJS, miscJS ];
