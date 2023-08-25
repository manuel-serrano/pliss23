/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/aot/aot.js                  */
/*    -------------------------------------------------------------    */
/*    Author      :  manuel serrano                                    */
/*    Creation    :  Sat Aug 13 15:56:38 2022                          */
/*    Last change :  Fri Aug 25 08:31:12 2023 (serrano)                */
/*    Copyright   :  2022-23 manuel serrano                            */
/*    -------------------------------------------------------------    */
/*    JavaScript AOT compilation                                       */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import { CHAPTER } from "../../chapter.js";
import { introduction } from "./introduction.js";
import { aotreally } from "./aotreally.js";
import { aotbecause } from "./aotbecause.js";
import { aothow } from "./aothow.js";
import { optimistic } from "./optimistic.js";
import { hint } from "./hint.js";
import { types } from "./types.js";
import { infer } from "./infer.js";
import { practice } from "./practice.js";
import { hopjs } from "./hopjs.js";
import { big } from "./big.js";
import { pipe } from "./pipe.js";
import { scmclo } from "./scmclo.js";
import { jsclo } from "./jsclo.js";
import { compclo } from "./compclo.js";

/*---------------------------------------------------------------------*/
/*    style ,,,                                                        */
/*---------------------------------------------------------------------*/
const style = <style>
.aot {   
   text-align: center;
   font-weight: bold;
   margin-left: auto;
   margin-right: auto;
   color: var(--greydark);
}
</style>;

/*---------------------------------------------------------------------*/
/*    math                                                             */
/*---------------------------------------------------------------------*/
const mathStyle = <style>
.aot .math {
  font-family: cmr;
  font-size: 40%;
}

.aot .math sub,
.aot math sub,
.aot .math sup,
.aot math sup {
  font-size: 60%;
}

.aot .math {
   font-family: cmr;
   position: relative;
}
  
.aot .math .var {
  font-family: cmmi;
}
  
.aot .math .cal {
   font-family: cmsy;
   font-size: 95%;
}

.aot .math .cursive {
  font-family: cmsy;
  font-weight: 200;
  line-height: 40%;
}
  
.aot .math .greek {
  font-family: serif;
}

.aot .math .op {
  font-size: 75%;
  position: relative;
  top: -2px;
}

.aot .math .arrow {
  font-family: serif;
  font-weight: normal;
}

.aot .math tt {
  font-family: CourierMono;
}
  
.aot .math .keyword {
  font-weight: bold;
}

.aot .math td.fraq {
  border-bottom: 2px solid;
}

.aot td.tyrule-name {
  vertical-align: middle;
  font-variant: small-caps;
  font-size: 80%;
  padding-left: 0.5em;
}
</style>;
   
/*---------------------------------------------------------------------*/
/*    hintStyle ...                                                    */
/*---------------------------------------------------------------------*/
const hintStyle = <style>
.aot .hint-typing .hint-rules {
   width: 91%;
   margin-left: auto;
   margin-right: auto;
   background-color: white;
   font-size: 24px;
   font-family: cmms10;
   padding: 4px;
}
  
.aot .hint-typing .hint-rules td:first-child {
  text-align: left;
}
  
.aot .hint-typing .hint-rules td:nth-child(2) {
  text-align: left;
}
  
.aot .hint-typing .hint-rules td:last-child {
  text-align: left;
}

.aot .hint-typing .hint-rules tt {
  font-family: CourierMono;
  color: var(--greydark);
}

.aot .hint-typing .hint-rules var {
  font-family: cmmi10;
}
  
.aot .hint-typing .cal {
   font-family: cmsy;
   font-size: 95%;
}

.aot .hint-typing .hint-rules .bra {
   position: relative;
}
  
.aot .hint-typing .hint-rules .braoleft {
   position: relative;
   left: -0.2em;
}

.aot .hint-typing .hint-rules .bracright {
   position: relative;
   right: -0.2em;
}

.aot .hint-typing .final {
   border-bottom: 4px solid var(--red);
}
.aot .hint-typing .final tt,
.aot .hint-typing .final .cursive {
}
.aot .hint-typing .H {
   font-weight: bold;
   color: var(--red);
   margin-right: 4px;
}
</style>

/*---------------------------------------------------------------------*/
/*    aot ...                                                          */
/*---------------------------------------------------------------------*/
export const aot = [
   <chapter number="6" title=${<span class="care">AOT</span>}>
      Ahead-of-Time compilation
   </chapter>,
   style, mathStyle, hintStyle,
   introduction,
   hopjs, 
   aotreally, aotbecause, aothow, 
   optimistic, hint, infer, practice, types,
   big, pipe, scmclo, jsclo, compclo
   ];
