/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/title.js                    */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Fri Aug 25 08:25:50 2023 (serrano)                */
/*    Copyright   :  2015-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Pliss23 par 2 title                                              */
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
const title = <impress.slide title=${<span class="important">part 2: JavaScript</span>} id="part2-title" class="md">
   <MD>
JavaScript
==========

   * Created @Mozilla in *10 days* in 1995 
   * JS = __Scheme__ + Self + C Syntax
   * ECMAScript
   * (in)formal *specification*
   * One new version per year
</MD>   
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css                                                              */
/*---------------------------------------------------------------------*/
title.css = <style>
ul {
   font-weight: bold;
}

em {
   font-style: normal;
   color: var(--greydark);
}

strong { 
   color: var(--red);
}
</style>;
      
