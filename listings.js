/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/listings.js                       */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Sat Nov 14 08:32:31 2015                          */
/*    Last change :  Fri Aug 25 10:02:46 2023 (serrano)                */
/*    Copyright   :  2015-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Listings                                                         */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    The module                                                       */
/*---------------------------------------------------------------------*/
import * as md from "hop:markdown";
import * as fontifier from "hop:fontifier";

export { LSTINPUTLISTING, LSTLISTING };

/*---------------------------------------------------------------------*/
/*    listingcnt ...                                                   */
/*---------------------------------------------------------------------*/
let listingcnt = 0;

/*---------------------------------------------------------------------*/
/*    range ...                                                        */
/*---------------------------------------------------------------------*/
function range(linerange) {
   const s = linerange.split(",");
      
   return s.map(function(p) {
      const m = p.match(/[ ]*([0-9]+)-([0-9]+)[ ]*/);
      return { beg: parseInt(m[1]), end: parseInt(m[2]) };
   });
}
   
/*---------------------------------------------------------------------*/
/*    LSTINPUTLISTING ...                                              */
/*---------------------------------------------------------------------*/
function LSTINPUTLISTING(attrs, ...nodes) {
   const lang = attrs.language ? fontifier[attrs.language] : fontifier.hopscript;
   const clazz = attrs.class ? attrs.class + " listings" : (attrs.language ? attrs.language + " listings" : "listings");
   const id = attrs.id ? attrs.id : "listing" + listingcnt++;
   const path = attrs.src;
   const ip = #:open-input-file(#:js-tostring(path, #:%this));

   if (!ip) {
      throw new Error('Cannot find file "' + path + '"');
   }

   try {
      if (!attrs.linerange) {
      	 return <PRE id=${id} class=${clazz} step=${attrs.step}><CODE class="fontifier-prog">${lang(ip, undefined, undefined)}</CODE>${nodes}</PRE>;
      } else {
 	 return <PRE id=${id} class=${clazz} step=${attrs.step}><CODE class="fontifier-prog">${range(attrs.linerange).map(({beg, end}) => lang(ip, beg, end))}</CODE>${nodes}</PRE>;
      }
   } finally {
      #:close-input-port(ip);
   }
}

/*---------------------------------------------------------------------*/
/*    LSTLISTING ...                                                   */
/*---------------------------------------------------------------------*/
function LSTLISTING(attrs, ...nodes) {
   const lang = attrs.language ? fontifier[attrs.language] : fontifier.hopscript;
   const clazz = attrs.class ? attrs.class + " listings" : (attrs.language ? attrs.language + " listings" : "listings");
   const id = attrs.id ? attrs.id : "listing" + listingcnt++;
   const str = String.prototype.concat.apply("",nodes);
   const ip = #:open-input-string(#:js-tostring(str.substring(1, str.length - 1), #:%this));
   
   try {
      return <PRE id=${id} class=${clazz} step=${attrs.step}><CODE class="fontifier-prog">${lang(ip, undefined, undefined)}</CODE></PRE>;
   } finally {
      #:close-input-port(ip);
   }
}
