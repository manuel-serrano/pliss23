/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/scm2c/specialization.js     */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu May 15 16:51:43 2025 (serrano)                */
/*    Copyright   :  2015-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Pliss23, part 1 title                                            */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import/export ...                                                */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { MARKDOWN as MD } from "@hop/markdown";
import * as fontifier from "@hop/fontifier";

/*---------------------------------------------------------------------*/
/*    A slide ...                                                      */
/*---------------------------------------------------------------------*/
export const slide = <impress.slide title="Specialization" class="md">
   <MD>
   ${<div class="center">Arithmetic Specialization</div>}

   * unsafe, unbounded arithmetic
   * `+`, `+fx`, `+bx`, `+fl`, ..., `-`, `-fx`, `-bx`, `-fl`, ...
   * use C macros to avoid function calls
   * use tagging

<span step="4"/>
</MD>   
</impress.slide>

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
slide.css = <style>
.body {
}

.body * {
   transition: 1s all;
}

code {
   font-family: cmtt;
   color: var(--greyverydark);
   font-size: 80%;
}

   .center {
   font-weight: bold;
}

p {
   margin: 0;
   margin-top: 2ex;
}

ul {
   background-color: white;
   margin: 2ex;
   list-style: none;
   margin-top: 0;
   font-size: 90%;
}

li {
   opacity: 0;
}

[data-step="1"] li { opacity: 1; }
[data-step="1"] li + li { opacity: 0; }

[data-step="2"] li { opacity: 1; }
[data-step="2"] li + li { opacity: 1; }
[data-step="2"] li + li + li { opacity: 0; }

[data-step="3"] li { opacity: 1; }
[data-step="3"] li + li { opacity: 1; }
[data-step="3"] li + li + li { opacity: 1; }
[data-step="3"] li + li + li + li { opacity: 0; }

[data-step="4"] li { opacity: 1; }
[data-step="4"] li + li { opacity: 1; }
[data-step="4"] li + li + li { opacity: 1; }
[data-step="4"] li + li + li + li { opacity: 1; }
[data-step="4"] li + li + li + li + li { opacity: 0; }

[data-step="5"] li { opacity: 1; }

</style>   
