/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/variables/comp.js           */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Sat May 17 08:31:27 2025 (serrano)                */
/*    Copyright   :  2023-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Compiling variables                                              */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import * as impress from "@hop/hopimpress";
import { MARKDOWN as MD } from "@hop/markdown";

/*---------------------------------------------------------------------*/
/*    Compiler                                                         */
/*---------------------------------------------------------------------*/
export const comp = <impress.slide title="compiler">
   <h1 class="markdown">Compiling variable declarations</h1>

   <ol class="markdown">
     <li step="1-">symbol resolution</li>
     <li step="2-">multiple variable</li>
     <li step="3-">scope narrowing</li>
     <li step="4-">let fusion</li>
     <li step="5-">let fun</li>
     <li step="6-">let opt</li>
     <li step="7-">var -> let</li>
     <li step="8-">uninitialized variables</li>
   </ol>

<h2 step="9"><strong>5</strong> KLOC ~ <strong>7%</strong> of the compiler</h2>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
comp.css = <style>
.body * {
   transition: 1s all;
}

pre {
   font-size: 40%;
}

strong {
   color: var(--red);
}

h1 {
   font-size: 120%;
}

h2 {
   font-size: 80%;
   text-align: center;
}

ol {
   color: var(--greydark);
   font-size: 80%;
   font-weight: bold;
   margin-left: 1em;
   margin-top: 2ex;
   column-count: 2;
}
</style>
	

