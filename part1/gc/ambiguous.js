/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/gc/ambiguous.js             */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu May 15 16:44:48 2025 (serrano)                */
/*    Copyright   :  2015-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Pliss23, part 1 title                                            */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import/export ...                                                */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";

/*---------------------------------------------------------------------*/
/*    A slide ...                                                      */
/*---------------------------------------------------------------------*/
export const slide = <impress.slide title="Ambiguous">
   <div class="center">Conservative & Ambiguous Roots</div>

   <ul>
   <li step="1-"> The Roots
      <ul>
        <li> global variables</li>
        <li> Registers </li>
        <li> Stack </li>
      </ul>
   </li>
   <li step="2-"> How to distinguish integers from pointers
      <ul>
        <li step="3-"> we cannot</li>
        <li step="4-"> ambiguous roots</li>
        <li step="5-"> alignment</li>
        <li step="6-"> bit patterns</li>
        <li step="7-"> free lists ranges</li>
      </ul>
   </li>
   <li step="8-"> Conservativeness
      <ul>
   <li step="9-"> no copy (mark&sweep)</li>
        <li step="10-"> may retain memory too long </li>
        <li step="11"> dependend of C compiler optimizations</li>
      </ul>
   </li>
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
   font-size: 50%;
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
