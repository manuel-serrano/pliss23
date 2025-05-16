/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/gc/stopcopy.js              */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu May 15 16:53:40 2025 (serrano)                */
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

/*---------------------------------------------------------------------*/
/*    A slide ...                                                      */
/*---------------------------------------------------------------------*/
export const slide = <impress.slide title="Stop & Copy">
   <div class="center">Stop & Copy</div>

   <ul>
   <li step="1-"> two semi-spaces </li>
   <li step="2-"> bump allocation </li>
   <li step="3-"> when the first semi-space is full
      <ul>
        <li>stop the word</li>
        <li>copy the live objects into the second semi-space</li>
        <li>swap the spaces</li>
      </ul>
   </li>
   <li step="4-" class="good">complexity proportional to the life objects</li>
   <li step="5-" class="good">compacting</li>
   <li step="6-" class="bad">waste half of the memory</li>
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
