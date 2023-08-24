/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/benchmark/deltablue.js            */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Thu Aug 24 10:18:35 2023 (serrano)                */
/*    Copyright   :  2021-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    JavaScript benchmark deltablue                                   */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../listings.js";

export { deltablue };

/*---------------------------------------------------------------------*/
/*    deltablue ...                                                    */
/*---------------------------------------------------------------------*/
const deltablue = <impress.slide title="Deltablue" 
 		  class="benchmark"
                  onslideenter=~{
		     let code = document.getElementById("deltabluejs");
		     console.log("code=", code);
		     code.style.transform = "scale(1) translate(0, 0)";
		  }
                  onslideleave=~{
		     let code = document.getElementById("deltabluejs");
		     code.style.transform = "scale(1) translate(0, 0)";
		  }
  		  onstep=~{
                     let el = document.getElementById("evil-deltablue"); 
		     let code = document.getElementById("deltabluejs");
		     code.style.transform = `scale(2) translate(0, ${10-el.offsetTop}px)`;
		  }>
		  
  <div class="filename">deltablue.js @ octane</div>
  <div class="javascript code" id="deltablue-container">
    <lstinputlisting id="deltabluejs" language="javascript" src=${require.resolve("./src/deltablue.js")}/>
  </div>
   <span step="1"/>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    css                                                              */
/*---------------------------------------------------------------------*/
deltablue.css = <style>
#deltablue-container {
}

#deltabluejs {
   transition: 1s all;
   transform-origin: top left;
   font-size: 20%;
}

.body[data-step="1"] .evil-pattern {
   background-color: var(--greylight);
   border: 1px solid var(--red);
   padding: 2px;
}
</style>
