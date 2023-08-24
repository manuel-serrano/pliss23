/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/aot/big.js                  */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Thu Aug 24 08:45:43 2023 (serrano)                */
/*    Copyright   :  2021-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    big                                                              */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";

/*---------------------------------------------------------------------*/
/*    big ...                                                          */
/*---------------------------------------------------------------------*/
export const big = <impress.slide title="Big language" class="aot">
   <div class="container">
     <div class="javascript">JavaScript</div>
     <div class="big">BIG</div>
     <div class="language">language</div>
   </div>
</impress.slide>;	 
	 
/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
big.css = <style>
.body {
   position: absolute;
   background: var(--greyverydark);
   text-align: center;
}

.container {
   margin-top: 1ex;
   font-weight: bold;
}

.javascript {
   font-size: 130%;
   line-height: 1em;
   color: var(--greyalmostwhite);
   letter-spacing: 0.13em;
}

.big {
   line-height: 75%;
   font-size: 650%;
   font-family: KaffeesatzBold;
   color: var(--red);
}

.language {
   font-size: 140%;
   line-height: 1.2em;
   color: var(--greyalmostwhite);
   letter-spacing: 0.14em;
}

</style>

