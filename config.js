/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/config.js                         */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 15:39:31 2015                          */
/*    Last change :  Fri May 16 10:16:38 2025 (serrano)                */
/*    Copyright   :  2015-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    HOPJS talk configuration                                         */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    module ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import * as hopconfig from "@hop/config";

export { inriaSVG };

/*---------------------------------------------------------------------*/
/*    constants                                                        */
/*---------------------------------------------------------------------*/
export const ROOT = path.dirname( module.filename );
const inriaSVG = path.join( ROOT, "svg/inria.svgz" );

export const name = "PLISS23";
export const slideWidth = 1920, slideHeight = 1080;

export const theme = path.join( ROOT, "themes/grey.json" );

export const hopSVG = path.join( hopconfig.shareDir, "icons/hop/hop.svg" );

export function rpath( file ) { return path.normalize( path.join( ROOT, file ) ) }

export let fontSize = 100;
export const colMarginTop = 1180;
export const colMarginLeft = 200;

export function fontSizePx( k = 1 ) {
   return `${Math.round( k * fontSize )}px`;
}
export function fpx(fsz) {
   return `${Math.round(fsz * 1.5)}px`;
}
export function px(fsz) {
   return `${Math.round(fsz * 1.5)}px`;
}

