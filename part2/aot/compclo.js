/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/aot/compclo.js              */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Thu Aug 24 10:06:42 2023 (serrano)                */
/*    Copyright   :  2021-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    JavaScript closure                                               */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../../listings.js";

/*---------------------------------------------------------------------*/
/*    compclo ...                                                      */
/*---------------------------------------------------------------------*/
export const compclo = <impress.slide title="Closure compilation" class="aot">
   <div class="title">
     Optimistic Compilation at work...
   </div>
	 
  <div id="compclo-js" class="js code">
    <tt class="filename">./foreach.js</tt>
    <lstinputlisting language="javascript" src=${require.resolve("./src/foreach.js")}/>
  </div>

  <div class="downarrow" step="1-">&#129175;</div>
  
  <div step="1-" class="scheme code">
    <tt class="filename">./foreach.scm</tt>
    <lstinputlisting language="scheme" src=${require.resolve("./src/foreach.scm")}/>
  </div>
  
  <div step="3" class="scheme code rts">
    <tt class="filename">./rts.scm</tt>
    <lstinputlisting language="scheme" src=${require.resolve("./src/js-array-foreach.scm")}/>
  </div>
</impress.slide>  
	 
/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
compclo.css = <style>
pre {
   font-size: 25%;
}

.title {
   color: var(--greydark);
   font-size: 90%;
   font-weight: bold;
   text-align: left;
   margin-left: 0.5em;
   margin-top: 0.5ex;
   margin-bottom: 1ex;
}

.downarrow {
  color: var(--javascript-color);
  position: relative;
  top: 0.4ex;
  line-height: 1.5ex;  
}

.code {
  position: relative;
}

.code tt.filename { 
  position: absolute;
  background: var(--greyextralight);
  padding: 0.16em;
  top: 1.1ex; 
  right: 1.5em;
  border: 1px solid var(--grey);
  font-size: 20%;
  color: black;
  opacity: 0.9;
  font-weight: bold;
}

.listings {
  margin-top: 1ex;
  margin-bottom: 0;
}

.rts {
  margin-top: 1.3ex;
}

.rts pre.scheme {
  border-top-color: var(--blue);
}

.stk {
  font-weight: bold;
  border-radius: 0.2ex;
  padding-left: 0.1em;
  padding-right: 0.1em;
}

.body[data-step="3"] .stk,
.body[data-step="2"] .stk {
  background-color: var(--greydark);
  color: white;
}

.js tt.filename {
  border-color: var(--javascript-color);
}

.scheme tt.filename {
  border-color: var(--scheme-color);
}
</style>
