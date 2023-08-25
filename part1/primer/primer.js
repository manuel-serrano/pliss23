/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/primer/primer.js            */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 10:08:53 2023                          */
/*    Last change :  Fri Aug 25 08:16:03 2023 (serrano)                */
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
import { slide as beauty } from "./beauty.js";
import { slide as sugar } from "./sugar.js";
import { slide as apply } from "./apply.js";
import { slide as dsl } from "./dsl.js";
import { slide as macro } from "./macro.js";
import { slide as like } from "./like.js";

/*---------------------------------------------------------------------*/
/*    primer                                                           */
/*---------------------------------------------------------------------*/
export const primer = [
   <chapter number="1" title=${<span class="care">Primer</span>}>
      Primer
   </chapter>,
   implementations, syntax, church, expression, beauty, sugar, apply,
   dsl, macro, like
];
