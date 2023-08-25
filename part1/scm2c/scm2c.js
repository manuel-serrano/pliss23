/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/scm2c/scm2c.js              */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 10:08:53 2023                          */
/*    Last change :  Fri Aug 25 11:49:41 2023 (serrano)                */
/*    Copyright   :  2023 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    Scheme primer                                                    */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    import/export                                                    */
/*---------------------------------------------------------------------*/
import { CHAPTER } from "../../chapter.js";
import { slide as challenges } from "./challenges.js";
import { slide as polymorphism } from "./polymorphism.js";
import { slide as boxing } from "./boxing.js";
import { slide as fixnum } from "./fixnum.js";
import { slide as slowfixnum } from "./slowfixnum.js";
import { slide as specialization } from "./specialization.js";
import { slide as fx } from "./fx.js";
import { slide as bib } from "./bib.js";
import { slide as ho } from "./ho.js";

/*---------------------------------------------------------------------*/
/*    scm2c                                                            */
/*---------------------------------------------------------------------*/
export const scm2c = [
   <chapter number="2" title=${<span class="care">Scheme->C</span>}/>,
   challenges,
   polymorphism, boxing, fixnum, slowfixnum, specialization, fx, bib
   ho
];
