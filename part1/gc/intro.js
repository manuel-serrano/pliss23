/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/gc/intro.js                 */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Fri Aug 25 14:33:14 2023 (serrano)                */
/*    Copyright   :  2015-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Pliss23, part 1 title                                            */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import/export ...                                                */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import { MARKDOWN as MD } from "hop:markdown";

/*---------------------------------------------------------------------*/
/*    A slide ...                                                      */
/*---------------------------------------------------------------------*/
export const slide = <impress.slide title="Introduction">
   <MD>
   <div class="center">Implicit allocations &rarr; Garbage Collection</div>

   * stop & copy
   * mark & sweep
   * generation
   * convervative gc

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
