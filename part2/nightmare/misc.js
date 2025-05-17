/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/nightmare/misc.js           */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Sat Aug 26 11:04:48 2017                          */
/*    Last change :  Sat May 17 08:27:58 2025 (serrano)                */
/*    Copyright   :  2017-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Compilation preliminary                                          */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import * as impress from "@hop/hopimpress";
import { LSTINPUTLISTING } from "../../listings.js";

export { miscJS };

/*---------------------------------------------------------------------*/
/*    miscJS ...                                                       */
/*---------------------------------------------------------------------*/
const miscJS = <impress.slide title="All the rest" class="javascript">
  <div class="center slidetitle">and all the rest...</div>
  <ul>
    <li step="1-"><span>Polymorphism</span>, <span>Introspection</span>, and <span>Closures</span></li>
    <li step="2-"><span>Hoisting</span> and <span>Temporal Dead-Zones</span></li>
    <lstinputlisting step="3-5" language="javascript" src=${require.resolve("./src/hoisting.js")}/>
    <div class="downarrow" step="4-5">&#129175;</div>
    <lstinputlisting step="4-5" language="javascript" src=${require.resolve("./src/hoisting2.js")}/>
    <lstinputlisting step="6" language="javascript" src=${require.resolve("./src/hoisting3.js")}/>
    
    <li step="7-"><span>Implicit</span> object creations</li>
    <lstinputlisting step="7-8" language="javascript" src=${require.resolve("./src/implicit-cast.js")}/>
    <div class="downarrow" step="8">&#129175;</div>
    <lstinputlisting step="8" language="javascript" src=${require.resolve("./src/implicit-cast2.js")}/>
    
    <li step="9-"><span>Arithmetic</span> (no fixnums)</li>
    
    <li step="10-"><span>Booleans</span> values</li>
    <div step="10">
      <ul>
	<li><tt>false</tt>, <tt>null</tt>, <tt>undefined</tt>, <tt>""</tt>, and <tt>0</tt> are all false</li>
	<li><tt>null==undefined</tt> but <tt>null!==undefined</tt></li>
      </ul>
    </div>

    <li step="11-"><span>Ropes</span>, <span>Unicode</span>, and <span>RegExp</span></li>
    <lstinputlisting step="12" language="javascript" src=${require.resolve("./src/ropes.js")}/>
    
    <li step="13-"><span>Proxy</span>, <span>Generator</span>, <span>Async</span></li>
    
    <li step="14-">...</li>
  </ul>
  
  <div step="5" class="note" id="miscJS-balloon">
    What if the compiler cannot<br/>
    prove "K" initialized or not?
  </div>
  <impress.arrow class="arrowred" step="5" src="miscJS-balloon" dst="deadzone" srcanchor="bc" dstanchor="tc"/>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css                                                              */
/*---------------------------------------------------------------------*/
miscJS.css = <style>
.body * {
   transition: 1s all;
}

.slidetitle {
   font-weight: bold;
   color: var(--greydark);
}

tt {
   font-family: CourierMono;
}

ul {
   list-style: none;
   font-size: 70%;
   margin-top: 0.1ex;
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
  line-height: 1.1ex;  
  top: 0.4ex;
}

.arrowred {
  color: var(--red);
}

.note {
   border-radius: 0.2ex;
   border: 0.2ex solid var(--red);
   background-color: var(--greyextralight);
   font-size: 60%;
   position: absolute;
   right: 2em;
   padding: 0.4ex 0.4ex 0.2ex 0.4ex;
   top: 1ex;
   right: 3em;
   background-color: white;
   border-color: var(--javascript-color);
}

em {  
   font-style: normal;
   color: var(--red);
}

ul {
   color: var(--grey);
}

li { 
  margin-left: 0.3em;
}
  
li > span {
  color: var(--greydark);
}

li tt {
   font-size: 90%;
}
  
li .javascript {
  transition: 1s all;
}

ul ul {
   margin-top: 0;
   padding-top: 0;
   font-size: 40px;
   background: white;
   color: var(--greydark);
   width: 95%;
}

ul ul li:before {
   content: "\25d0";
   font-size: 100%;
   margin-right: 0.2em;
}
  
li:before {
   content: "\25cf";
   width: 1em;
   margin-left: -.5em;
   color: var(--red);
   display: inline-block;
   font-size: 80%;
}

.note {
   position: absolute;
   right: 1em;
   top: 11ex;
}

.body[data-step="6"] [step] {
   display: none;
}
.body[data-step="6"] [class*="step6"] {
   display: block;
}

.body[data-step="7"] [step] {
   display: none;
}
.body[data-step="7"] [class*="step7"] {
   display: block;
}

.body[data-step="8"] [step] {
   display: none;
}
.body[data-step="8"] [class*="step8"] {
   display: block;
}

.body[data-step="9"] [step] {
   display: none;
}
.body[data-step="9"] [class*="step9"] {
   display: block;
}

.body[data-step="10"] [step] {
   display: none;
}
.body[data-step="10"] [class*="step10"] {
   display: block;
}

.body[data-step="11"] [step] {
   display: none;
}
.body[data-step="11"] [class*="step11"] {
   display: block;
}

.body[data-step="12"] [step] {
   display: none;
}
.body[data-step="12"] [class*="step12"] {
   display: block;
}

.body[data-step="13"] [step] {
   display: none;
}
.body[data-step="13"] [class*="step13"] {
   display: block;
}

.body[data-step="14"] [step] {
   display: none;
}
.body[data-step="14"] [class*="step14"] {
   display: block;
}

.body[data-step="15"] [step] {
   display: none;
}
.body[data-step="15"] [class*="step15"] {
   display: block;
}
</style>
