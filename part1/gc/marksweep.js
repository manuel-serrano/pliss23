/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/gc/marksweep.js             */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Fri Aug 25 15:25:25 2023 (serrano)                */
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
export const slide = <impress.slide title="Mark & Sweep">
   <div class="center">Mark & Sweep</div>

   <ul>
   <li step="1-"> free lists (2, 4, 8, 16, ..., big) </li>
   <li step="2-"> when one free list is empty 
      <ul>
        <li>mark the live object</li>
        <li>sweep the unmarked objects and move them into their free list</li>
      </ul>
   </li>
   <li step="3-" class="good">use the whole space</li>
   <li step="4-" class="bad">complexity proportional to the allocated objects</li>
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
   font-size: 65%;
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
