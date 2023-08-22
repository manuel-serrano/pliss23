/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/nightmare/loop.js           */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Tue Aug 22 10:40:28 2023 (serrano)                */
/*    Copyright   :  2015-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Loop compilation comparison                                      */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../../listings.js";

export { loop };

/*---------------------------------------------------------------------*/
/*    loop ...                                                         */
/*---------------------------------------------------------------------*/
const loop = <impress.slide title="loop" class="javascript">
  
   <div class="loop-src">
     <div class="loop" step="5">
       <lstinputlisting language="javascript" src=${require.resolve("./src/jsarray.js")}/>
     </div>
     <div class="loop" step="6">
       <lstinputlisting language="javascript" src=${require.resolve("./src/jsproto.js")}/>
     </div>
     <div class="loop" step="7">
       <lstinputlisting language="javascript" src=${require.resolve("./src/jsobject.js")}/>
     </div>
     <div class="loop" step="8-9">
       <lstinputlisting language="javascript" src=${require.resolve("./src/jscast.js")}/>
     </div>
     <div class="loop" step="0-3">
       <lstinputlisting language="c" src=${require.resolve("./src/loop.js")}/>
     </div>
     <div class="loop" step="4">
       <lstinputlisting language="javascript" src=${require.resolve("./src/loop.js")}/>
     </div>
   </div>
  
   <div class="pretend">
     <div class="letspretend" step="1-3">
      let&#39;s pretend ...
       <div class="nightmare" step="1">
	 <div class="C">
        that we are
	   <div><span>C</span> or <span>Java</span></div>
        programmers
	 </div>
       </div>
     </div>
     <div class="asm" step="2">
       <lstinputlisting language="asm" src=${require.resolve("./src/loop.s")}/>
     </div>
     <div class="nightmare" step="3">
       <div class="C">
        that we are
	 <div><span>JavaScript</span></div>
        programmers
       </div>
     </div>
   </div>
  
   <div class="syntaxtells problem center" step="9">
    The JavaScript syntax tells <em>very little</em> about the data structures
   </div>
  
   <div step="5" class="note" id="note1">a : <span class="type">array</span></div>
   <div step="6" class="note" id="note3">a : <span class="type">holey array</span></div>
   <div step="7" class="note" id="note2">a : <span class="type">object</span></div>
   <div step="8-9" class="note" id="note4">i : <span class="type">string</span></div>
</impress.slide>;

/*---------------------------------------------------------------------*/
/*    css                                                              */
/*---------------------------------------------------------------------*/
loop.css = <style>
.body {
   text-align: center;
   padding-top: 120px;
   margin: 0;
   margin-left: auto;
   margin-right: auto;
   color: var(--greydark);
   font-weight: bold;
}

em {
   font-style: normal;
   color: var(--greydark);
}

pre {
   font-size: 60%;
   color: black;
   padding: 4px;
   background: white;
}

div.asm pre {
   font-size: 55%;
}

div.asm {
   width: 100%;
   height: 4ex;
   top: 3ex;
   left: 0;
   right: 0;
   transition: 1s all;
   position: absolute;
}

.nightmare,
.reality {
   color: var(--greydark);
}

.C span {
   color: var(--red);
}

.nightmare,
.reality {
   width: 100%;
   top: 2ex;
   left: 0;
   right: 0;
   transition: 1s all;
   position: absolute;
}

.body[data-step="1"] .nightmare {
   transition-delay: 1s;
}

.pretend {  
   color: var(--grey);
   margin-top: 1ex;
   position: relative;
}

.letspretend {
   transition: 1s all;
}

.loop-src {
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   height: var(--slideHeight);
   width: var(--slideWidth);
}

.loop {
   transition: 1s;
   position: absolute;
   bottom: calc(var(--slideHeight) - 4ex);
   width: 100%;
}

.body[data-step="4"] .loop,
.body[data-step="5"] .loop,
.body[data-step="6"] .loop,
.body[data-step="7"] .loop,
.body[data-step="8"] .loop,
.body[data-step="9"] .loop {
   bottom: calc(var(--slideHeight) - 8ex);
}

.jsinc:before {
   content: "++";
}

.body[data-step="9"] .jsinc:before,
.body[data-step="8"] .jsinc:before {
   content: "+=1";
   color: var(--red);
}

.syntaxtells {
   transition: 1s all;
   left: 2em;
   right: 2em;
   bottom: 4ex;
   position: absolute;
   color: var(--grey);
}

.problem {
   width: 80%;
   position: absolute;
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

.note .type {
  color: var(--red);
}
</style>

