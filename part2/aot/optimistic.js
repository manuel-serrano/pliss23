/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/aot/optimistic.js           */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Thu Aug 24 09:04:15 2023 (serrano)                */
/*    Copyright   :  2021-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Optimistic compilation                                           */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../../listings.js";

/*---------------------------------------------------------------------*/
/*    optimistic ...                                                   */
/*---------------------------------------------------------------------*/
export const optimistic = <impress.slide title="Optimistic" class="aot">
   <div class="title">
     Optimistic Compilation...
   </div>
	 
   <div step="1-" class="fib" id="fib-orig">
     <lstinputlisting language="javascript" src=${require.resolve("./src/fib.js")}/>
   </div>
   <div step="2-" class="rightarrow comp1 comp"><span>&#129174;</span></div>
   <div step="2-" class="fib" id="fib-dispatch">
     <lstinputlisting language="javascript" src=${require.resolve("./src/fib-dispatch.js")}/>
   </div>
   <div step="3-" class="fib" id="fib-generic">
     <lstinputlisting language="javascript" src=${require.resolve("./src/fib-generic.js")}/>
   </div>
   <div step="3-" class="rightarrow comp2 comp"><span>&#129174;</span></div>
   <div step="3-" class="rightarrow comp3 comp"><span>&#129174;</span></div>
   <div step="3-" class="fib" id="fib-fixnum">
     <lstinputlisting language="javascript" src=${require.resolve("./src/fib-fixnum.js")}/>
   </div>
   
   <div step="4" class="benefit problem">
    <span class="specific">specific</span> vs <span class="generic">generic</span> operators
   </div>
</impress.slide>;	 
	 
/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
optimistic.css = <style>
.rightarrow {
   z-index: 10;
}

.listings {
   font-size: 100%;
}

.fib {
   position: absolute;
   transition: 1s all;
   font-size: 28%;
}

.fib pre {
   width: 13.5em;
   height: 26ex;
}

.title {
   color: var(--greydark);
   left: 0.5em;
   top: 1ex;
   font-size: 100%;
   font-weight: bold;
   position: absolute;
   transition: 1s all;
}
     
.comp {     
   transition: 1s all;
   position: absolute;
   font-size: 30%;
}

.comp span {     
   font-size: 180%;
}

.comp1 {
   transition-delay: 1s;
   left: 13.9em;
   top: 20ex;
}

.comp1 span {
   color: var(--javascript-color);
}
  
.comp2, .comp3 {
   left: 29.6em;
}

.comp2 {
   top: 20ex;
}

.comp3 {
   top: 36ex;
}

.comp2 span,
.comp3 span {
   color: var(--purple);
}
  
.body[step="1"] .comp,
.body[step="0"] .comp {
   opacity: 0;
}

#fib-orig {
   top: 19ex;
   left: calc(var(--slideWidth) / 3);
}
  
#fib-dispatch {
   transition-delay: 1s;
   top: 19ex;
   left: calc(var(--slideWidth) / 3);
}
  
#fib-dispatch pre {
   border-top-color: var(--purple);
}

#fib-fixnum {
   right: 1em;
   top: 2ex;
}
  
#fib-fixnum pre {
   border-top-color: var(--green);
   width: 18em;
}
  
#fib-generic {
   right: 1em;
   bottom: 2ex;
}
  
#fib-generic pre {
   border-top-color: var(--orange);
   width: 18em;
}
  
.body[data-step="5"] #fib-orig,
.body[data-step="4"] #fib-orig,
.body[data-step="3"] #fib-orig,
.body[data-step="2"] #fib-orig {
   left: 1em;
}
  
.body .genop,
.body .fxop {
   font-weight: bold;
   border-radius: 0.2em;
}
  
.title {
   transform: scale(1.8);
   margin-top: 4ex;
   margin-left: 3.5em;
}

.body[data-step="0"] .title {
   transform: scale(1.8);
   margin-top: 4ex;
   margin-left: 3.5em;
}

.body[data-step="5"] .title,
.body[data-step="4"] .title,
.body[data-step="3"] .title,
.body[data-step="2"] .title,
.body[data-step="1"] .title {
   transform: scale(1);
   left: 0.5em;
   top: 1ex;
   margin-top: 0;
   margin-left: 0;
}
  
.body[data-step="5"] .genop,
.body[data-step="4"] .genop {
   color: white;
   background-color: var(--orange);
}
  
.body[data-step="5"] .fxop,
.body[data-step="4"] .fxop {
   color: white;
   background-color: var(--green);
}

.fxfib {
   font-weight: bold;
}

.body[data-step="5"] .fxfib,
.body[data-step="4"] .fxfib,
.body[data-step="3"] .fxfib,
.body[data-step="2"] .fxfib {
   color: var(--green);
}

.genfib {
   font-weight: bold;
}

.body[data-step="5"] .genfib,
.body[data-step="4"] .genfib,
.body[data-step="3"] .genfib,
.body[data-step="2"] .genfib {
   color: var(--orange);
}

.problem {
   font-family: SpecialElite;
   border: 0.4ex solid var(--red);
   border-radius: 0.4ex;
   font-weight: bold;
   transform-origin: left bottom;
   -webkit-transform-origin: left bottom;
   font-size: 80%;
   padding: 0.8ex 0.8ex 0.4ex 0.8ex;
   background: var(--greydark);
   color: white;
}

.benefit {
   transition: 1s all;
   transition-delay: 1s;
   position: absolute;
   left: 1em;
   bottom: 1ex;
   height: 8ex;
   width: 10em;
   border-color: var(--grey);
   font-size: 70%;
}

.benefit .specific {
   color: var(--green);
}

.benefit .generic {
   color: var(--orange);
}
</style>
