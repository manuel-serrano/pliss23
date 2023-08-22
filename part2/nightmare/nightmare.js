/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/nightmare/nightmare.js      */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 10:08:53 2023                          */
/*    Last change :  Tue Aug 22 11:39:35 2023 (serrano)                */
/*    Copyright   :  2023 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    JS a nightmare for compilers                                     */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    import/export                                                    */
/*---------------------------------------------------------------------*/
import { CHAPTER } from "../../chapter.js";
import { loop } from "./loop.js";
import { oxC } from "./ox-c.js";
import { oxJS } from "./ox-js.js";
import { funcallC } from "./funcall-c.js";
import { funcallJS } from "./funcall-js.js";
import { miscJS } from "./misc.js";

/*---------------------------------------------------------------------*/
/*    nightmare                                                        */
/*---------------------------------------------------------------------*/
export const nightmare = [
   <chapter number="1" title="JavaScript">
      A nightmare for compilers
   </chapter>,
   loop, oxC, oxJS, funcallC, funcallJS, miscJS
];
