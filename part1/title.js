/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/title.js                    */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Tue Aug 22 09:40:27 2023 (serrano)                */
/*    Copyright   :  2015-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Pliss23, part 1 title                                            */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import/export ...                                                */
/*---------------------------------------------------------------------*/
import * as path from "path";
import { inriaSVG } from "../config.js";
import * as impress from "hopimpress-0.6.*.hz";
import { MARKDOWN as MD } from "hop:markdown";

export { title };

/*---------------------------------------------------------------------*/
/*    title ...                                                        */
/*---------------------------------------------------------------------*/
const title = <impress.slide title="part1" id="part1-title" class="md">
   <MD>
Scheme
======

   * Created @Mozilla in 10 days in 1995 
   * JS = Scheme + Self + C Syntax
   * ECMAScript
   * (in)formal specification
   * One new version per year
</MD>   
</impress.slide>
