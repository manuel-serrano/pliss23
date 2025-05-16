/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/primer/like.js              */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu May 15 16:49:59 2025 (serrano)                */
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
export const slide = <impress.slide title="Like" class="md">
   <MD>
   ${<div class="center">Why do I like Scheme?</div>}

   * syntax
   * minimalist core language
   * beauty of the core concepts
   * clean semantics
   * untypedness

<span step="5"/>
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
