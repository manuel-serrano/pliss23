/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/aot/hopjs.js                */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Thu Aug 24 08:45:25 2023 (serrano)                */
/*    Copyright   :  2021-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    hopjs                                                            */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";

/*---------------------------------------------------------------------*/
/*    hopjs ...                                                        */
/*---------------------------------------------------------------------*/
export const hopjs = <impress.slide title="hopjs" class="aot">
  <div class="block-tl">
    <span id="title-hop">HOP</span>
    <span id="title-js"><span id="title-dot">.</span>js</span>
  </div>
  
  <div class="block-tr">
    <ul step="1-" class="features">
      <li step="1-" class="important"> Opportunistic AOT compiler</li>
      <li step="2-"> Full-fledged JavaScript</li>
      <li step="3-"> Near ES 2021 compliance </li>
      <li step="4-"> Nodejs compatibility </li>
      <li step="5-"> Some unoptimized features </li>
    </ul>
  </div>
	 
</impress.slide>	 

	 
/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
hopjs.css = <style>
.body > div {
   position: absolute;
}

.block-tl {
   left: 50px;
   top: 0;
   width: calc(var(--slideWidth) / 2);
   text-align: left;
   white-space: nowrap;
   line-height: 420%;
}
  
#title-hop {
   font-size: 480%;
   color: var(--greydark);
   color: #7196A0;
   font-family: KaffeesatzBold;
}

#title-js {
   font-size: 150%;
   color: var(--grey);
   text-align: right;
   position: relative;
   left: -0.7em;
}

#title-dot {
   color: var(--red);
   font-weight: bold;
}

.block-tr {
   right: 0;
   bottom: 0.60ex;
   text-align: left;
   white-space: nowrap;
   width: calc(var(--slideWidth) / 1.85);
}

.features {
   font-size: 80%;
   color: var(--grey);
}

.important {
   color: var(--greydark);
}

ul {
   margin-top: 0;
   margin-bottom: 0;
   padding-top: 0;
   padding-bottom: 0;
}
</style>
