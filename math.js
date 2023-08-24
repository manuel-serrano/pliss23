/*=====================================================================*/
/*    serrano/diffusion/talk/strangeloop22/math.js                     */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Sat Aug 26 14:50:17 2017                          */
/*    Last change :  Thu Aug 18 13:33:22 2022 (serrano)                */
/*    Copyright   :  2017-22 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Match facilities                                                 */
/*=====================================================================*/
"use strict";

// https://www.w3schools.com/charsets/ref_utf_math.asp
// https://www.w3schools.com/charsets/ref_utf_misc_symbols.asp
// https://www.w3schools.com/charsets/ref_utf_geometric.asp
// https://www.w3schools.com/charsets/ref_utf_letterlike.asp

/*---------------------------------------------------------------------*/
/*    module                                                           */
/*---------------------------------------------------------------------*/
export { GAMMA, SQCUP, BIGTRIANGLEDOWN, VDASH, BOTTOM, TOP, OPLUS };
export { TAU, DELTA, KAPPA, VAR, ARROWRIGHT, DARROWRIGHT, KEYWORD };
export { LANGLE, RANGLE, TYRULE };

/*---------------------------------------------------------------------*/
/*    Definitions                                                      */
/*---------------------------------------------------------------------*/
function GAMMA( attrs = {}, nodes = undefined ) {
   if( nodes ) {
      return <span id=${attrs.id || false} class=${attrs.class || "sym"}>
        &Gamma;${nodes}
      </span>;
   } else {
      return <span id=${attrs.id || false} class=${attrs.class || "sym"}>&Gamma;</span>;
   }
}

function SQCUP( attrs = {}, _ = undefined ) {
   return <span id=${attrs.id || false} class=${attrs.class || "op"}>&#x2294</span>;
}

function BIGTRIANGLEDOWN( attrs = {}, _ = undefined ) {
   return <span id=${attrs.id || false} class=${attrs.class || "op"}>&#x26DB</span>;
}

function VDASH( attrs = {}, _ = undefined ) {
   return <span id=${attrs.id || false} class=${attrs.class || "op"}>&#x22A2;</span>;
}

function BOTTOM( attrs = {}, _ = undefined ) {
   return <span id=${attrs.id || false} class=${attrs.class || "op"}>&perp;</span>;
}

function TOP( attrs = {}, _ = undefined ) {
   return <span id=${attrs.id || false} class=${attrs.class || "op"}>&#x22a4;</span>;
}

function OPLUS( attrs = {}, nodes ) {
   return <span id=${attrs.id || false} class=${attrs.class || "op"}>&oplus;</span>;
}

function TAU( attrs = {}, _ = undefined ) {
   return <span id=${attrs.id || false} class=${attrs.class || "greek"}>&tau;</span>;
}

function DELTA( attrs = {}, _ = undefined ) {
   return <span id=${attrs.id || false} class=${attrs.class || "greek"}>&delta;</span>;
}

function KAPPA( attrs = {}, _ = undefined ) {
   return <span id=${attrs.id || false} class=${attrs.class || "greek"}>&kappa;</span>;
}

function VAR( attrs = {}, ... nodes ) {
   return <span id=${attrs.id || false} class=${attrs.class || "var"}>${nodes}</span>;
}

function ARROWRIGHT( attrs = {}, nodes ) {
   return <span id=${attrs.id || false} class=${attrs.class || "arrow"}>&rarr;</span>;
}

function DARROWRIGHT( attrs = {}, nodes ) {
   return <span id=${attrs.id || false} class=${attrs.class || "arrow"}>&#x21d2;</span>;
}

function KEYWORD( attrs = {}, nodes ) {
   return <span id=${attrs.id || false} class=${attrs.class || "keyword"}>${nodes}</span>;
}

function LANGLE( attrs = {}, nodes ) {
   return <span style="font-size: 80%" id=${attrs.id || false} class=${attrs.class || "angle"}>&#x3008;</span>;
}

function RANGLE( attrs = {}, nodes ) {
   return <span style="font-size: 80%" id=${attrs.id || false} class=${attrs.class || "angle"}>&#x3009;</span>;
}

function TYRULE( attrs = {}, ... body ) {
   var nodes = body.filter( n => typeof n == "xml-element" );
   return <table class="tyrule math">
     <tr>
       <td class="fraq">
	 ${nodes[ 0 ]}
       </td>
       <td class="tyrule-name" rowspan="2">
	 (${attrs.name})
       </td>
     </tr>
     <tr>
       <td>
         ${nodes[ 1 ] }
       </td>
     </tr>
   </table>
}
