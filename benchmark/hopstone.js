/*=====================================================================*/
/*    serrano/diffusion/talk/strangeloop22/benchmark/hopstone.js       */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Thu Aug 18 07:53:51 2022 (serrano)                */
/*    Copyright   :  2021-22 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    JavaScript hopstone benchmark                                    */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import { gnuplot } from "../utils.js";

export { hopstone };

/*---------------------------------------------------------------------*/
/*    hopstone ...                                                     */
/*---------------------------------------------------------------------*/
const hopstone = <impress.slide title="Hopstone" class="benchmark">
   <div class="bench-title">
     hopstone
   </div>
   <table class="chart">
     ${[ ["almabench", "bague", "basic", "jpeg" ],
	 [ "js-of-ocaml", "leval", "marked", "maze" ], 
	 [ "minimatch", "minimist", "moment","qrcode" ], 
	 [ "rho","richards-proxy", "uuid", "z80"] ]
	    .map((r,i)=> 
	       <tr>
		 ${r.map(
		      (d,j)=>
	     	       	 <td id=${d} class=${`idx${i*4+j}`}>
	       		 <svg:img height="100%" width="100%" 
				  src=${require.resolve(`./svg/${d}.svg`)}/>
	     	       </td>)}
	       </tr>)}
   </table>
   <span step="3"/>
</impress.slide>;

/*---------------------------------------------------------------------*/
/*    css                                                              */
/*---------------------------------------------------------------------*/
hopstone.css = <style>
.bench-title {
   transform: rotate(-90deg);
   transform-origin: bottom left;
   color: var(--greydark);
   font-weight: bold;
   position: absolute;
   bottom: 0;
   left: 1em;
   text-align: center;
   letter-spacing: 16px;
   width: var(--slideHeight);
   transition: 1s all;
}
  
table.chart {
   padding-left: 1.8em;
   padding-right: 1em;
   margin-top: 0.5ex;
   text-align: center;
   width: 100%;
}

table.chart td {
   background: white;
   padding-left: 0.1em;
   padding-right: 0.1em;
}
   
#pseed .hopstone-title,
table.chart {
   transition: 0.8s all;
}
  
/* step 1, bague, basic, leval, marked */
.body[data-step="1"] table.chart {
     transform: scale(2) translate(0.0em, 3.5ex);
  }
  
.body[data-step="1"] table.chart td.idx8,
.body[data-step="1"] table.chart td.idx9,
.body[data-step="1"] table.chart td.idx10,
.body[data-step="1"] table.chart td.idx11,
.body[data-step="1"] table.chart td.idx0,
.body[data-step="1"] table.chart td.idx3,
.body[data-step="1"] table.chart td.idx4,
.body[data-step="1"] table.chart td.idx7 {
   opacity: 0.5;
}
.body[data-step="1"] .bench-title {
   opacity: 0;
}

/* step 2, */
.body[data-step="2"] .bench-title {
   opacity: 0;
}

.body[data-step="2"] table.chart {
   transform: scale(2) translate(0.15em, -3.2ex);
}
.body[data-step="2"] table.chart td.idx7,
.body[data-step="2"] table.chart td.idx8,
.body[data-step="2"] table.chart td.idx15,
.body[data-step="2"] table.chart td.idx12,
.body[data-step="2"] table.chart td.idx11,
.body[data-step="2"] table.chart td.idx0,
.body[data-step="2"] table.chart td.idx3,
.body[data-step="2"] table.chart td.idx4,
.body[data-step="2"] table.chart td.idx5,
.body[data-step="2"] table.chart td.idx6 {
   opacity: 0.5;
}
</style>
