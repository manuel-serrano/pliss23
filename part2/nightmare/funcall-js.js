/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/nightmare/funcall-js.js     */
/*    -------------------------------------------------------------    */
/*    Author      :  manuel serrano                                    */
/*    Creation    :  Sat Aug 13 15:56:38 2022                          */
/*    Last change :  Sat May 17 08:27:52 2025 (serrano)                */
/*    Copyright   :  2022-25 manuel serrano                            */
/*    -------------------------------------------------------------    */
/*    JavaScript Property access                                       */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import * as impress from "@hop/hopimpress";
import { LSTINPUTLISTING } from "../../listings.js";

export { funcallJS };

/*---------------------------------------------------------------------*/
/*    funcallJS                                                        */
/*---------------------------------------------------------------------*/
const funcallJS = <impress.slide title="f(1, 2) (JavaScript)" class="javascript">
  <div class="js code">
    <lstinputlisting language="javascript" src=${require.resolve("./src/funcall.js")}/>
  </div>
  <div class="downarrow" step="1-6">&#129175;</div>
  <div class="compile" step="1-6">
    <ol>
      <li> if <code>f</code> is a not function, then <span class="kwd">throw</span> an exception</li>
      <li step="2-"> if <code>f</code> has less than 2 arguments, then <span class="kwd">ignore</span> extras</li>
      <li step="3-"> if <code>f</code> has more than 2 arguments, then <span class="kwd">complement</span> missings</li>
      <li step="4-"> if <code>f</code> uses <code>arguments</code>, then <span class="kwd">allocate</span> in the heap</li>
      <li step="5-"> assign <span class="kwd">this</span> value</li>
      <li step="6"> <span class="kwd">call</span> <code>f</code></li>
    </ol>
  </div>
  
  <div class="calltells problem center" step="7">
    Calling a JavaScript function requires <em>dynamic checks</em>,
    <em>object manipulations</em>, and possibly <em>heap allocations</em>
   </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css                                                              */
/*---------------------------------------------------------------------*/
funcallJS.css = <style>
.body * {
   transition: 1s all;
}

.compile code {
   font-size: 90%;
}

pre {
   font-size: 40%;
}

em {
   font-style: normal;
   color: var(--greydark);
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

div.js {
   margin-top: 0.5ex;
}

div.compile {			       
   width: 96%;
   margin-left: auto;
   margin-right: auto;
   background-color: white;
   border: 1px solid #ddd;
   font-size: 40%;
   color: var(--greydark);
   position: relative;
   top: -1.2ex;
}

div.compile code { 
   color: var(--greyverydark);
}

div.compile .kwd { 
   color: var(--red);
}

ol {
  font-size: 120%;
  margin-top: 0.3ex;
  margin-bottom: 0.3ex;
}

li {
   margin-left: 1em;
}

li::marker {
   color: black;
}

.calltells {
   transition: 1s all;
   left: 2em;
   right: 2em;
   bottom: 1ex;
   position: absolute;
   color: var(--grey);
   font-weight: bold;
}

.problem {
   font-family: SpecialElite;
   border: 0.4ex solid var(--red);
   border-radius: 0.4ex;
   font-weight: bold;
   transform-origin: left bottom;
   -webkit-transform-origin: left bottom;
   font-size: 80%;
   padding: 0.8ex 0.8ex 0.4ex 0.8ex;
   background: var(--greydark);
   color: var(--greyverylight);
}

.problem em {
   color: white;
}
</style>
