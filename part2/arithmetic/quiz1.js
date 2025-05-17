/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/arithmetic/quiz1.js         */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Sat May 17 08:37:14 2025 (serrano)                */
/*    Copyright   :  2021-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Integers                                                         */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { LSTINPUTLISTING } from "../../listings.js";

/*---------------------------------------------------------------------*/
/*    quiz1                                                            */
/*---------------------------------------------------------------------*/
export const quiz1 = <impress.slide title="quiz 1" class="implementation">
  <div class="slide-title"><span class="quiz">quiz</span></div>
  <div class="center" id="thequiz1">
    <div>Assuming two integers</div>
    <div><tt>x</tt> and <tt>y</tt> when <tt>x * y</tt></div>
    <div>is not an integer?</div>
  </div>
  <div class="rep" step="1">
    when <tt>x * y</tt> 
     <div>overflows</div>
  </div>
  <div class="rep" step="1" data-filter=mask> </div>
  <div class="rep" step="2">
    when <tt>x=0</tt> and <tt>y&lt;0</tt> 
     <div><tt>x * y = -0.0</tt></div>
  </div>
  <div class="rep" step="2" data-filter=mask> </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css                                                              */
/*---------------------------------------------------------------------*/
quiz1.css = <style>
.body {
   transition: 1s all;
}

.slide-title {
   padding-top: 0.5ex;
}

.quiz:before {
   content: "";
}

.quiz {
   padding-left: 0.16em;
   padding-right: 0.16em;
   padding-bottom: 0.4ex;
   font-size: 100%;
}

.quiz {
    background-color: var(--bluedark);
    color: white;
    border-radius: 0.3ex;
    padding-left: 0.6em;
    padding-right: 0.6em;
    font-size: 80%;
}

.center {
   font-size: 70%;
   color: var(--greydark);
   background-color: white;
   width: 90%;
   margin-top: 0.2ex;
}

tt {
   color: var(--bluedark);
   font-family: SpecialElite;
}

#thequiz1 {
   font-size: 110%;
   margin-top: 1ex;
}

.body[data-step="1"] #thequiz1,
.body[data-step="2"] #thequiz1 {
   filter: blur(3px);
   opacity: 0.5;
}

step1, step2 {
   position: absolute;
   top: 0;
   left: 0;
   transform: scale(0.1);
   visibility: hidden;
}

.rep {
   position: absolute;
   top: 6ex;
   left: 2em;
   right: 1em;
   transform: scale(0.1);
   transition: 0.5s all;
   visibility: hidden;
   z-index: 5;
   height: 5ex;
   text-align: center;
   border: 0.10em solid var(--bluedark);
   border-radius: 0.08em;
   font-size: 120%;
}

.rep[data-filter=mask] {
   z-index: 4;
   opacity: 0.8;
   background-color: white;
}
			     
.body[data-step="1"] .step1 {
   transform: scale(1);
   visibility: visible;
}
.body[data-step="2"] .step2 {
   transform: scale(1);
   visibility: visible;
}
</style>

