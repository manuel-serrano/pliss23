/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/primer/primer.js            */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 10:08:53 2023                          */
/*    Last change :  Thu Aug 24 16:05:29 2023 (serrano)                */
/*    Copyright   :  2023 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    Scheme primer                                                    */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    import/export                                                    */
/*---------------------------------------------------------------------*/
import { CHAPTER } from "../../chapter.js";
import { slide as implementations } from "./implementations.js";
import { slide as syntax } from "./syntax.js";
import { slide as church } from "./church.js";
import { slide as expression } from "./expression.js";

/*---------------------------------------------------------------------*/
/*    primer                                                           */
/*---------------------------------------------------------------------*/
export const primer = [
   <chapter number="1" title="Scheme">
      Primer
   </chapter>,
   implementations, syntax, church, expression
];
