/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/arithmetic/quiz2.js         */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Thu Aug 24 08:09:06 2023 (serrano)                */
/*    Copyright   :  2021-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Integers                                                         */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../../listings.js";

/*---------------------------------------------------------------------*/
/*    quiz2                                                            */
/*---------------------------------------------------------------------*/
export const quiz2 = <impress.slide title="quiz" class="implementation">
 <div class="slide-title"><span class="quiz">quiz</span></div>
 <div class="center" id="thequiz2">
    <div>Assuming a variable <tt>x</tt> when</div>
    <div><tt>x + 1 + 1 &ne; x + 2</tt>?</div>
  </div>
  <div step="1" class="rep">
    when <tt>x</tt> is a string
  </div>
  <div step="1" class="rep" data-filter=mask> </div>
  <div step="2" class="rep">
    when <tt>x &ge; 2<sup>53</sup></tt> 
  </div>
  <div class="rep" step="2-5" data-filter=mask> </div>
  <div step="3-5">
    <div class="javascript code">
      <lstinputlisting language="javascript" src=${require.resolve("./src/for.js")}/>
    </div>
  </div>
   <span step="4-5"></span>
   <div class="problem center" step="5">
    No need to box overflows<span class="bang">!</span>
   </div>
  

</impress.slide> 

/*---------------------------------------------------------------------*/
/*    css                                                              */
/*---------------------------------------------------------------------*/
quiz2.css = <style>
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

tt {
   color: var(--bluedark);
   font-family: SpecialElite;
}

#thequiz2 {
   font-size: 110%;
   margin-top: 1ex;
   color: var(--greydark);
   background-color: white;
   width: 90%;
}

.body[data-step="1"] #thequiz2,
.body[data-step="2"] #thequiz2 {
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
   height: 2.5ex;
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

pre {
   width: 87%;
}

#nooverflow {
   border: 4px solid transparent;
   padding-left: 0.2em;
   padding-right: 0.2em;
   border-radius: 0.4ex;
}

.body[data-step="4"] #nooverflow,
.body[data-step="5"] #nooverflow {
   font-weight: bold;
   background-color: var(--green);
   color: white;
   border-radius: 0.4ex;
}

.problem {
   border-color: var(--green);
   width: 80%;
}

.bang {
   color: var(--green);
}
</style>

