/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/aot/hint.js                 */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Thu Aug 24 08:43:53 2023 (serrano)                */
/*    Copyright   :  2021-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Opportunistic compilation                                        */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";

/*---------------------------------------------------------------------*/
/*    hint ...                                                         */
/*---------------------------------------------------------------------*/
export const hint = <impress.slide title="Opportunism" class="aot">
  <div class="title">Opportunistic Compilation</div>
  <div id="assumption" step="1">
    <table id="assumption-title">
      <tr><td/><th>Assumption</th><td/></tr>
    </table>
    <div id="assumption-body">
 The most likely data structure a program will use is the one
for which the compiler is able to produce its best code.
    </div>
  </div>
</impress.slide>
	 
/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
hint.css = <style>
.body {
   text-align: center;
   margin-left: auto;
   margin-right: auto;
   color: var(--greydark);
}
  
div.title {
   font-size: 120%;
   font-weight: bold;
   padding-top: 1ex;
}
  
#assumption {
   font-family: FjalloaOne;
   font-family: ParkAvenue;
   font-weight: normal;
   font-style: italic;
   font-size: 76%;
   margin-left: auto;
   margin-right: auto;
   width: 85%;
   margin-top: 4ex;
   color: black;
   transition: 1s all;
   background-color: white;
   border: 1px solid #ddd;
   padding: 2ex;
}

#assumption-title {
   width: 100%;
   color: var(--greydark);
}
  
#assumption-title td {
   border-bottom: 1px solid var(--greydark);
}
  
#assumption-title th {
   font-weight: normal;
   width: 4em;
}
  
#assumption-body {
   border-bottom: 1px solid var(--greydark);
}
</style>
