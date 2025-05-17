/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/aot/introduction.js         */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Sat May 17 08:37:51 2025 (serrano)                */
/*    Copyright   :  2015-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Introduction                                                     */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";

/*---------------------------------------------------------------------*/
/*    introduction ...                                                 */
/*---------------------------------------------------------------------*/
export const introduction = <impress.slide title="introduction" class="introduction">
   <div id="intro-container">
     <div id="intro-scale1" class="scale"><span>&nbsp;</span></div>
     <div id="intro-scale2" class="scale"><span>&nbsp;</span></div>
     <div id="intro-scale3" class="scale"><span>&nbsp;</span></div>
     <div id="intro-scale4" class="scale"><span>&nbsp;</span></div>
     <div id="intro-engines">
       <div id="intro-interpreter" class="engine">interpreter</div>
       <div step="1-" id="intro-interpreter-ex" class="example">
          <table><tr><td>cpython</td></tr></table>
       </div>
       <div step="6-" id="intro-bytecode" class="engine">bytecode</div>
       <div step="7-" id="intro-bytecode-ex" class="example">
          <table><tr><td>javac</td></tr></table>
       </div>
       <div step="8-" id="intro-jit" class="engine">jit</div>
       <div step="9-" id="intro-jit-ex" class="example">
          <table>
             <tr><td>pypy</td></tr>
             <tr><td>spidermonkey</td></tr>
             <tr><td>v8</td></tr>
          </table>
       </div>
       <div step="3-" id="intro-aot" class="engine">aot</div>
       <div step="4-" id="intro-aot-ex" class="example">
          <table>
             <tr step="11"><td><span class="important">hop</span></td></tr>
             <tr><td>ocaml</td></tr>
             <tr><td>gcc</td></tr>
          </table>
       </div>
     </div>
   </div>
   <table id="intro-specs">
      <tr> 
         <td step="2-"> 
	    <span class="th">interpreter</span>
	    <ul>
               <li> fast dev. cycle</li>
               <li> easy implementation</li>
               <li> slow executions</li>
            </ul>
         </td>
         <td step="10-"> 
	   <span class="th">jit</span>
            <ul>
               <li> fast dev. cycle</li>
               <li> super complex implementation</li>
               <li> fast executions... even for <span class="important">dynamic</span> languages</li>
           </ul>
         </td>
         <td step="5-">
	    <span class="th">aot</span>
            <ul>
               <li> slow dev. cycle</li>
               <li> complex implementation</li>
               <li> fast executions... for <span class="important">static</span> languages</li>
            </ul>
         </td>
      </tr>
   </table>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
introduction.css = <style>
#intro-container {
   position: absolute;
   bottom: 1ex;
   left: 0.5em;
   right: 0.5em;
   height: 7ex;
   background-color: white;
}

#intro-engines {
   position: absolute;
   bottom: 1ex;
   left: 0;
   right: 0;
   color: var(--grey);
}

.scale {
   font-size: 20%;
   position: absolute;
   bottom: 1ex;
   height: 1em;
   border: 1ex solid var(--grey);
   border-top: 0;
}

#intro-scale1 {
   left: 2em;
   width: 20em;
   border-right: 0;
}

#intro-scale2 {
   left: 22em;
   width: 19em;
   border-right: 0;
}

#intro-scale3 {
   left: 41em;
   width: 16em;
   border-right: 0;
}

#intro-scale4 {
   left: 57em;
   right: 1em;
   border-left: 0;
}

.engine {
   position: absolute;
   bottom: 0ex;
   font-size: 70%;
   width: 4em;
   font-weight: bold;
}

.example {
   font-size: 70%;
   width: 4em;
   position: absolute;
   bottom: 2.5ex;
   color: var(--greydark);
   text-align: left;
}

.example table {
   width: 100%;
   font-size: 90%;
   line-height: 2ex;
   border-collapse: collapse;
   border-bottom: 1px solid var(--greydark);
}

#intro-interpreter {
   left: 0.2em;
}

#intro-interpreter-ex {
   left: 0.2em;
}

#intro-bytecode {
   left: 5em;
}

#intro-bytecode-ex {
   left: 5em;
}

#intro-jit {
   left: 11.5em;
}

#intro-jit-ex {
   left: 11.5em;
}

#intro-aot {
   left: 18.8em;
}

#intro-aot-ex {
   left: 17.8em;
}

.hop {
   color: var(--red);
   font-weight: bold;
}

#intro-aot-ex table {
   width: 1em;
}

#intro-specs {
   width: 95%;
   font-size: 40%;
   margin-left: auto;
   margin-right: auto;
   margin-top: 1ex;
   color: var(--grey);
}

#intro-specs td {
   width: 30%;
   vertical-align: top;
   text-align: left;
   background-color: white;
   padding-left: 0.5em;
}

#intro-specs td span.th {
   margin-left: 1em;
   font-size: 120%;
   font-weight: bold;
   color: var(--greydark);
}

#intro-specs td span.important {
   color: var(--red);
   font-weight: bold;
}

#intro-container td span.important {
   color: var(--greydark);
   color: #7196A0;
   font-weight: bold;
}
</style>;

