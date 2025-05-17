/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/benchmark/sha1.js                 */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Sat May 17 08:40:51 2025 (serrano)                */
/*    Copyright   :  2021-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    JavaScript benchmark sha1                                        */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { LSTINPUTLISTING } from "../listings.js";

export { sha1 };

/*---------------------------------------------------------------------*/
/*    sha1 ...                                                         */
/*---------------------------------------------------------------------*/
const sha1 = <impress.slide title="Sha1" 
 		  class="benchmark"
                  onslideenter=~{
		     let code = document.getElementById("sha1js");
		     code.style.transform = "scale(1) translate(0, 0)";
		  }
                  onslideleave=~{
		     let code = document.getElementById("sha1js");
		     code.style.transform = "scale(1) translate(0, 0)";
		  }
  		  onstep=~{
                     let el = document.getElementById("evil-sha1"); 
		     let code = document.getElementById("sha1js");
		     code.style.transform = `scale(2) translate(0, ${150-el.offsetTop}px)`;
		  }>
		  
  <div class="filename">crypto-sha1.js @ jetstream</div>
  <div class="javascript code" id="sha1-container">
    <lstinputlisting id="sha1js" language="javascript" src=${require.resolve("./src/crypto-sha1.js")}/>
  </div>
   <span step="1"/>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    css                                                              */
/*---------------------------------------------------------------------*/
sha1.css = <style>
#sha1-container {
}

#sha1js {
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
