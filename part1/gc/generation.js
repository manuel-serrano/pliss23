/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/gc/generation.js            */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Fri Aug 25 15:25:01 2023 (serrano)                */
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
export const slide = <impress.slide title="Generation">
   <div class="center">Generation: objects die fast</div>

   <ul>
   <li step="1-"> a small space (cache size) + a large main heap </li>
   <li step="2-"> bump allocation on the small space </li> 
   <li step="3-"> when the generation is full
      <ul>
        <li>stop the world object</li>
        <li> copy the live objects into the main heap </li>
      </ul>
   </li>
   <li step="4-"> when the main heap is full
      <ul>
        <li> mark & sweep the main heap</li>
      </ul>
   </li>
   <li step="5-" class="good">git the cache</li>
   <li step="6-" class="good">complexity proportional to live objects</li>
   <li step="7-" class="good">use the whole space</li>
   <li step="8-" class="bad">back pointers</li>
 </ul>
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
   margin-bottom: 0.5ex;
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
   font-size: 55%;
}

ul ul {
   font-size: 80%;
   margin-bottom: 0;
}
   
li:before {
    content: "\25cf  ";
    font-size: 90%;
    color: var(--grey);
}

li li:before {
   content: "\25d0  ";
   font-size: 80%;
}

li.good:before {
   content: "\2295  ";
   color: var(--green);
   font-size: 60%;
}

li.bad:before {
   content: "\2296  ";
   color: var(--red);
   font-size: 60%;
}
</style>   
