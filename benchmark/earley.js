/*=====================================================================*/
/*    serrano/diffusion/talk/strangeloop22/benchmark/earley.js         */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Wed Aug 17 19:57:49 2022 (serrano)                */
/*    Copyright   :  2021-22 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    JavaScript benchmark earley                                      */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../listings.js";

export { earley };

/*---------------------------------------------------------------------*/
/*    earley ...                                                       */
/*---------------------------------------------------------------------*/
const earley = <impress.slide title="Earley" 
 		  class="benchmark"
  		  onslideenter=~{
		     let code = document.getElementById("earleyjs");
		     code.style.transform = "scale(1) translate(0, 0)";
		  }
  		  onslideleave=~{
		     let code = document.getElementById("earleyjs");
		     code.style.transform = "scale(1) translate(0, 0)";
		  }
  		  onstep=~{
                     let el = document.getElementById("evil-earley"); 
		     let code = document.getElementById("earleyjs");
		     code.style.transform = `scale(1.5) translate(0, ${150-el.offsetTop}px)`;
		  }>
		  
  <div class="filename">earley.js @ octane</div>
  <div class="javascript code" id="earley-container">
    <lstinputlisting id="earleyjs" language="javascript" src=${require.resolve("./src/earley.js")}/>
  </div>
   <span step="1"/>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    css                                                              */
/*---------------------------------------------------------------------*/
earley.css = <style>
#earley-container {
}

#earleyjs {
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
