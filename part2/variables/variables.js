/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/variables/variables.js      */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:24:33 2023                          */
/*    Last change :  Tue Aug 22 13:42:39 2023 (serrano)                */
/*    Copyright   :  2023 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    JavaScript variables                                             */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import/export ...                                                */
/*---------------------------------------------------------------------*/
import { CHAPTER } from "../../chapter.js";
import { varJS } from "./var.js";
import { lex } from "./lex.js";
import { forJS } from "./for.js";
import { comp } from "./comp.js";

/*---------------------------------------------------------------------*/
/*    variables                                                        */
/*---------------------------------------------------------------------*/
export const variables = [
   <chapter number="2" title="Local Variables">
      Obfuscated lexical binding
   </chapter>,
   varJS, lex, forJS, comp
];

