/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/aot/aotbecause.js           */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Sat May 17 08:38:11 2025 (serrano)                */
/*    Copyright   :  2021-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    AOT because                                                      */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";

/*---------------------------------------------------------------------*/
/*    AOT, because                                                     */
/*---------------------------------------------------------------------*/
export const aotbecause = <impress.slide title="aot, because" class="aot">
  <ul>
    <li><span class="important">W^X</span> platforms <span class="example">(read-only exec. mem.)</span></li>
    <li step="1-3"><span class="important">Limited</span> memory <span class="example">(micro-controllers)</span></li>
    <li step="2-3"><span class="important">Short</span> living executions  
        <li step="2-3" class="flushright"><span class="example">cloud services</span></li>
	<li step="2-3" class="flushright"><span class="example">shell commands</span></li>
    </li>
    <li step="3" class="important">An intriguing research question...</li>
    <li step="3" class="flushright"><span class="example">hardly studied</span></li>
    <li step="3" class="flushright"><span class="example">timely</span></li>
  </ul>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
aotbecause.css = <style>
.body {
   color: var(--greydark);
   text-align: left;
   padding-left: 1.5em;
}

span.important {
   color: var(--red);
}

span.example {
   color: var(--grey);
}

#fun {
   background-color: var(--red);
   color: white;
   border-radius: 8px;
   padding-left: 8px;
   padding-right: 8px;
   font-size: 90%;
}

li {
  transition: 1s all;
}

ul {
   list-style: none;
   font-size: 90%;
   margin-top: 10px;
}
  
li.nobullet:before {
   content: "";
}

li:before {
   visibility: hidden;
   color: var(--greydark);
   content: "\25cf";
   display: inline-block;
   width: 1em;
   margin-left: -1.5em;
   font-size: 75%;
}
  
li.important:before {
   color: $var(--red);
}

.flushright {
   font-size: 85%;
}

li.flushright:before {
   content: "\25d0";
   font-size: 45%;
   margin-left: -1em;
   color: var(--grey);
   vertical-align: middle;
}


.body[data-step="3"] li:before,
.body[data-step="2"] li:before,
.body[data-step="1"] li:before {
  visibility: visible;
}
</style>

