/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/aot/aothow.js               */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Sat May 17 08:38:19 2025 (serrano)                */
/*    Copyright   :  2021-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    AOT how                                                          */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";

/*---------------------------------------------------------------------*/
/*    AOT, how                                                         */
/*---------------------------------------------------------------------*/
export const aothow = <impress.slide title="aot, how" class="aot">
  <div class="howto">How to attack the problem?</div>
  <ul>
    <li step="1-"><span>accomodate</span> JIT techniques</li>
    <li step="2-">a little bit of <span>typing</span></li>
    <li step="3-">a little bit of <span>data flow analysis</span></li>
    <li step="4-">a little bit of <span>control flow analysis</span></li>
    <li step="5-" class="important">a lot of <span class="important">optimistic heuristics</span></li>
  </ul>
</impress.slide>;

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
aothow.css = <style>
.body {
   text-align: center;
   margin-left: auto;
   margin-right: auto;
   padding-top: 0.5ex;
   color: var(--greydark);
   font-weight: bold;
}

.howto {
   font-size: 100%;
}

span {
  color: var(--greydark);
}
  
span.important {
  color: var(--red);
}
  
li {
  transition: 1s all;
}

li.important {
   margin-top: 1ex;
}

ul {
   list-style: none;
   font-size: 100%;
   margin-top: 0.5ex;
   color: var(--grey);
}
  
li:before {
   visibility: hidden;
   color: var(--green);
   content: "\25cf";
   display: inline-block;
   width: 1em;
   margin-left: -1.5em;
}
</style>
