/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/pliss23.hop.mjs                   */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 12:03:19 2016                          */
/*    Last change :  Sat May 17 08:24:10 2025 (serrano)                */
/*    Copyright   :  2016-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    PLISS23 presentation                                             */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    imports                                                          */
/*---------------------------------------------------------------------*/
import { name, slideWidth, slideHeight } from "./config.js";
import * as hopconfig from "@hop/config";
import * as fontifier from "@hop/fontifier";
import * as path from "path";
import * as impress from "@hop/hopimpress";
import { QRCODE } from "./qrcode.mjs";

/*---------------------------------------------------------------------*/
/*    R ... hop resolver                                               */
/*---------------------------------------------------------------------*/
const R = {
   resolve: file => require.resolve(file)
};

/*---------------------------------------------------------------------*/
/*    pliss23 ...                                                      */
/*---------------------------------------------------------------------*/
service pliss23(o) {
   const s = slides(slideWidth, slideHeight);

   const host = "192.168.141.69"
   const url = `http://${host}:${hop.port}/hop/hopimpress/remote`;
   
   var svc = service(id) {
      hop.broadcast("hopimpress", { goto: id });
   };

   return <impress.html logo=${require.resolve("./etc/logo.png")}>

     <head css=${impress.cssCover}
           title=${name}
	   idiom="scheme"
           jscript=${[hopconfig.schemeRuntime, impress.jscript]}
           include="hop-window"/>

     <script type="importmap"> {
        "imports": {
           "@hop/hop": "${R.resolve('@hop/hop/client.mjs')}",
           "qrcode.mjs": "${R.resolve('qrcode.mjs')}"
	}
     }
     </script>
      
     <script type="module">
        import { qrcode } from "qrcode.mjs";
     </script>

     <impress.cover title=${name} src=${pliss23slides}>
       <ol>
	 ${ impress.slideNodes(s)
	    .map( function( x, idx=undefined, arr=undefined ) {
	       const title = x[ "data-hopimpress-title" ];
	       return <li onclick=~{${svc}(${x.id}).post()} >
                   ${title ? title : x.id}
	       </li>
	    } )
	  }
       </ol>
     </impress.cover>

     <div id="qrcode">
       <qrcode data=${url} pixelSize=6/>
       <div><tt>${url}</tt></div>
     </div>
   </impress.html>;
}

/*---------------------------------------------------------------------*/
/*    pliss23slides ...                                                */
/*---------------------------------------------------------------------*/
service pliss23slides(o) {
   var width = o && "width" in o ? o.width : slideWidth;
   var height = o && "height" in o ? o.height : slideHeight;
   
   return <html>
     <head css=${[fontifier.css,
		  impress.css,
		  pliss23.resource("pliss23.hss"),
		  pliss23.resource("chapter.hss")]}
           idiom="scheme"
           include="hop-canvas"
           script=${[hopconfig.schemeRuntime, impress.jscript]}/>

     <script>InitHopServer("localhost", 8080);</script>
     <impress.panel id="panel" controls=${false}/>
     
     ${slides(width, height)}
     
   </html>
}

/*---------------------------------------------------------------------*/
/*    log ...                                                          */
/*---------------------------------------------------------------------*/
service log(text) {
   console.log(text);
}

/*---------------------------------------------------------------------*/
/*    SLIDESSTYLE ...                                                  */
/*---------------------------------------------------------------------*/
function SLIDESSTYLE(attrs, ... nodes) {
   const ratio = (attrs.width / 1920);
   
   return <style>
:root {
  --slideWidth: ${attrs.width}px;
  --slideHeight: ${attrs.height}px;
  --listingFontSize: ${ratio * 44}px;
  --fontSize: ${ratio * 128}px;
}
 </style>;
}

/*---------------------------------------------------------------------*/
/*    slides ...                                                       */
/*---------------------------------------------------------------------*/
function slides(width, height) {
   console.log( `generating slides ${new Date().toString()} (${width}x${height})...` );

   return <impress.impress width=${width} height=${height}>
     
      <slidesStyle width=${width} height=${height}/>

      <impress.row class="row-stack" data-x=0 data-y=0>
       	${title}
      </impress.row>
      <impress.row class="row-stack" data-x=0 data-y=${height + 100}>
         ${part1}
      </impress.row>
      
      <impress.row class="row-stack" data-x=0 data-y=${(height + 100) * 2}>>
         ${part2}
      </impress.row>
      
      <impress.row class="row-stack" data-x=0 data-y=${(height + 100) * 3}>>
         ${benchmark}
      </impress.row>
      
      <impress.row class="row-stack" data-x=0 data-y=${(height + 100) * 4}>>
         ${calibration}
      </impress.row>
   
   </impress.impress>
}

import { calibration } from "./calibration.js";
import { title } from "./title.js";
import { part1 } from "./part1/part1.js";
import { part2 } from "./part2/part2.js";
import { benchmark } from "./benchmark/benchmark.js";

console.log(`"http://localhost:${hop.port}/hop/pliss23" ready...`);
console.log(`"http://localhost:${hop.port}/hop/hopimpress/remote" ready...`);
