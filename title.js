/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/title.js                          */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu Aug 24 09:49:18 2023 (serrano)                */
/*    Copyright   :  2015-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Pliss23 title                                                    */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import { inriaSVG } from "./config.js";
import * as impress from "hopimpress-0.6.*.hz";

/*---------------------------------------------------------------------*/
/*    title ...                                                        */
/*---------------------------------------------------------------------*/
export const title = <impress.slide title="title" onslideenter=~{rm("partZoomTop"); rm("partZoomBottom")}>
   <script>
   function rm(clazz) {
      const els = document.getElementsByClassName(clazz);
      const rm = el => el.classList.remove(clazz);
      Array.prototype.forEach.call(els, rm);
   }
   function partZoom(el, event, clazz, next) {
      if (el.classList.contains(clazz) && next) {
	 impress.goto(document.getElementById(next));
	 event.stopPropagation(true);
      } else {
         rm("partZoomTop");
         rm("partZoomBottom");
         el.classList.add(clazz);
      }
   }
   </script>
   <table>
     <tr>
       <td class="title">
	 <div step="0-3">
	   <div class="title-block-top">
	     <div>JavaScript</div>
	     <div class="title-aot">
	       <div><span>AOT</span></div>
 	     </div>
	     <div>Compilation</div>
	   </div>
 	 </div>
	 <div class="title-block-bl">
           <span class="title-conf">PLISS&#39;23 - BERTINORO</span>
           <div class="title-url"><tt>https://github.com/manuel-serrano/pliss23.git</tt></div>
	 </div>
       </td>
       <td class="author">
	 <div step="0">
	   <div class="author">
	     <img class="author" src=${require.resolve("./img/mserrano.jpg")}/>
	   </div>
	   <div class="title-block-br">
	     <span class="title-logo">
	       <svg:img height="2ex" width="2em" src=${inriaSVG}/>
	     </span>
	     <span class="title-author">Manuel Serrano</span>
	   </div>
	 </div>
         <div step="2-3" class="title-parts">
           <div class="part" onclick=~{partZoom(this, event, "partZoomTop", "part1-title")}>
             <div class="part-title">Part 1</div>
             <div><span class="title-src">Scheme</span> &#8594; <span class="title-tgt">C</span></div>
           </div>
             <div step="3" class="part" onclick=~{partZoom(this, event, "partZoomBottom", "part2-title")}>
             <div class="part-title">Part 2</div>
             <div><span class="title-src">JS</span> &#8594; <span class="title-tgt">Scheme</span></div>
           </div>
         </div>   
       </td>
     </tr>
   </table>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
title.css = <style>
.body {
   color: var(--grey);
   background-color: var(--background);
   position: absolute;
}

[data-step="on"] {
   transition: 1s all;
}

.delayed {
   transition-delay: 1s;
}

table {
   width: 100%;
}

table td {
   vertical-align: top;
}

table td.title {
   margin-left: auto;
   margin-right: auto;
   text-align: center;
   width: 50%;
   position: absolute;
   top: 0;
   bottom: 0;
}

.title-aot {
   color: var(--red);
}

table td.author {
   margin-left: auto;
   margin-right: auto;
   text-align: right;
   width: 50%;
   position: relative;
   margin-right: 0;
   padding-right: 0;
}
      
div.author img {
   object-fit: cover;
   height: var(--slideHeight);
}

.title-block-top {
   width: 100%;
   margin-top: 2ex;
   font-size: 120%;
   margin-left: auto;
   margin-right: auto;
   text-align: center;
   transition: 1s all;
   transition-delay: 1s;
}

.title-block-top div {
   text-align: center;
}

.title-block-top div:nth-child(1),
.title-block-top div:nth-child(2),
.title-block-top div:nth-child(3) {
   font-weight: bold;
   transform: scale(1.2, 1.1);
   letter-spacing: 0.1em;
}

.title-block-bl {
   bottom: 0;
   right: 0;
   color: black;
   font-size: 50%;
   width: 100%;
   height: 2ex;
   margin-left: auto;
   margin-right: auto;
   text-align: center;
   bottom: 3ex;
   position: absolute;
}

.title-block-br {
   bottom: 0;
   right: 0;
   color: black;
   font-size: 50%;
   text-align: right;
   font-family: KaffeesatzLight;
   width: calc(var(--slideWidth) / 2);
   height: 3ex;
   text-align: center;
   position: absolute;
   bottom: 2ex;
   right: 0;
}

.title-author {
   color: var(--greyverydark);
   font-weight: bold;
   width: var(--slideWidth);
   z-index: 10;
}

.title-conf {
   color: var(--grey);
}

.title-url {
   color: var(--greydark);
   font-size: 50%;
}

.title-logo {
   text-align: center;
   border-radius: 5px;
   background-color: var(--inria);
   width: 3em;
   display: inline-block;
   height: 2ex;
   font-size: 90%;
   position: relative;
   bottom: -0.1em;
   margin-left: 0.5em;
}

.title-logo svg * {
   fill: white;
}

.title-parts {
   position: absolute;
   width: 100%;
   top: 0;
   left: 0;
   right: 0;
   padding-top: 1.5ex;
   text-align: center;
}

.title-parts .part {
   margin-top: 1ex;
   border: 12px solid var(--greydark);
   text-align: center;
   width: 80%;
   margin-left: auto;
   margin-right: auto;
   background-color: var(--background);
}

.title-src {
   color: var(--red);
}

.title-tgt {
   color: var(--greyverydark);
}

.part:hover {
   border-color: var(--red);
}

.part-title {
   border-bottom: 4px solid var(--grey);
   width: 2em;
   margin-left: auto;
   margin-right: auto;
   text-align: center;
}

.partZoomTop {
   transform: scale(2.3) translate(-3.4em, -0.2ex);
  transform-origin: top left;
  transition: 1s;
}

.partZoomBottom {
   transform: scale(2.3) translate(-3.4em, -3ex);
  transform-origin: top left;
  transition: 1s;
}
</style>;

