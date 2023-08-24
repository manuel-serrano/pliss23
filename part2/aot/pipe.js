/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/aot/pipe.js                 */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Thu Aug 24 08:45:55 2023 (serrano)                */
/*    Copyright   :  2021-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Compilation pipeline                                             */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";

/*---------------------------------------------------------------------*/
/*    pipe ...                                                         */
/*---------------------------------------------------------------------*/
export const pipe = <impress.slide title="Pipelining" class="aot">
   <div class="container">
     <div class="jstoscm">
	     .js &#10140; <span class="important">.scm</span>
     </div>
     <div step="1" class="scmtoc">
	     | .scm &#10140; .c
     </div>
     <div step="1" class="ctoo">
	     | .c &#10140; .o
     </div>
   </div>
</impress.slide>;
	 
/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
pipe.css = <style>
.body {
   font-weight: normal;
}

.container {
   margin-left: 2em;
   margin-top: 0.5ex;
   text-align: left;
}
  
.important {
   color: var(--red);
}

.jstoscm {
   font-size: 250%;
   color: var(--greydark);
}

.scmtoc, .ctoo {
   font-size: 200%;
   margin-left: 1em;
   color: var(--grey);
}
</style>

