/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/ox/oxjs.js                  */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:36:34 2023                          */
/*    Last change :  Tue Aug 22 15:44:46 2023 (serrano)                */
/*    Copyright   :  2023 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    A slide                                                          */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../../listings.js";

/*---------------------------------------------------------------------*/
/*    oxjs                                                             */
/*---------------------------------------------------------------------*/
export const oxjs = <impress.slide title="o.x (JavaScript)">
  <div class="js code">
    <lstinputlisting language="javascript" src=${require.resolve("./src/class.js")}/>
  </div>
  <div class="downarrow" step="2">&#129175;</div>
  <div class="center" step="1">
    <div class="citation">
C. Chambers and D. Ungar, and E. Lee. 1989, <strong>An Efficient
Implementation of SELF a Dynamically-typed Object-Oriented
Programming Language.</strong> In <em>Conference Pro&shy;ceedings on Programming
Language Design and Impl&shy;ementation (PLDI&rsquo;89)</em>. ACM, USA, 49-70
    </div>
   </div>
  <div class="c code" step="2">
    <lstinputlisting language="c" src=${require.resolve("./src/hclass.c")}/>
  </div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
oxjs.css = <style>
.body * {
   transition: 1s all;
}

pre {
   font-size: 35%;
}

.listings {
  margin-top: 0;
  margin-bottom: 0;
}

.downarrow {
  color: var(--javascript-color);
  position: relative;
  left: 1em;
  line-height: 2ex;  
}

div.c {
   top: 5ex;
   position: absolute;
   left: 0;
   right: 0;
}

.citation {
   margin-top: 3ex;
   color: var(--greydark);
   background-color: white;
   width: 90%;
   margin-left: auto;
   margin-right: auto;
   font-size: 70%;
}
</style>
	
