/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/title.js                    */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu May 15 16:46:58 2025 (serrano)                */
/*    Copyright   :  2015-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Pliss23, part 1 title                                            */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import/export ...                                                */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { MARKDOWN as MD } from "@hop/markdown";

/*---------------------------------------------------------------------*/
/*    title ...                                                        */
/*---------------------------------------------------------------------*/
export const title = <impress.slide title=${<span class="important">part 1: Scheme</span>} id="part1-title" class="md">
   <MD>
Scheme (70s), a tiny Lisp
=========================

   * a **functional programming** language
   * **strict**, full polymorphism
   * based on a **tiny core**
   * a dynamically typed ML
   * gave birth to JavaScript
   * _Structure and Interpretation of Computer Programs_
</MD>   
</impress.slide>

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
title.css = <style>
.body {
   font-size: 80%;
}

strong {
   font-style: normal;
   color: var(--greydark);
}

em {
   font-style: normal;
   color: var(--greydark);
}

ul {
   background-color: white;
   margin: 1ex;
   list-style: none;
   margin-top: 2ex;
}
</style>   
