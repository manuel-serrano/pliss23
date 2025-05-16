/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/qrcode.js                         */
/*    -------------------------------------------------------------    */
/*    Author      :  manuel serrano                                    */
/*    Creation    :  Fri Sep  8 06:45:23 2023                          */
/*    Last change :  Fri Sep  8 06:46:07 2023 (serrano)                */
/*    Copyright   :  2023 manuel serrano                               */
/*    -------------------------------------------------------------    */
/*    QRCODE binding                                                   */
/*=====================================================================*/
"use strict";

/*---------------------------------------------------------------------*/
/*    The module                                                       */
/*---------------------------------------------------------------------*/
import { qrcode as Qrcode } from "./qrcode-lib.js";

/*---------------------------------------------------------------------*/
/*    QRCODE ...                                                       */
/*---------------------------------------------------------------------*/
export function QRCODE(attr, ...nodes) {
   const el = DIV(attr);
   const lt = ~{ window.addEventListener("load", function() { 
      document.qrcode(${el.id}, ${attr });
   });
   };
   return [lt, el];
}

/*---------------------------------------------------------------------*/
/*    qrcode ...                                                       */
/*---------------------------------------------------------------------*/
export function qrcode(el, attr) {
   var qr = Qrcode(attr.type || 4, attr.level || 'L' );
   qr.addData(attr.data);
   qr.make();
   document.getElementById(el).innerHTML = qr.createImgTag(attr.pixelSize || 4);
}

/*---------------------------------------------------------------------*/
/*    toplevel                                                         */
/*---------------------------------------------------------------------*/
if (!hop.isServer) document.qrcode = qrcode;

