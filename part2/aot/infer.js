/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/aot/infer.js                */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Thu Aug 24 08:44:25 2023 (serrano)                */
/*    Copyright   :  2021-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Opportunistic inference typing                                   */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as math from "../../math.js";
import * as impress from "hopimpress-0.6.*.hz";

/*---------------------------------------------------------------------*/
/*    H ...                                                            */
/*---------------------------------------------------------------------*/
function H( attrs, ... nodes ) {
   return <span class="cursive H">H</span>;
}

function T( attrs, ... nodes ) {
   return <span class="cursive">T</span>;
}

function BRAO( attrs, ... nodes ) {
   return <span class="bra">[<span class="braoleft">[</span></span>;
}
     
function BRAC( attrs, ... nodes ) {
   return <span class="bra"><span class="bracright">]</span>]</span>;
}

/*---------------------------------------------------------------------*/
/*    infer ...                                                        */
/*---------------------------------------------------------------------*/
export const infer = <impress.slide title="Opportunistic Inference" class="aot">
   <div class="problem center">
     Infer types that <span>please</span> the compiler
   </div>

  <div step="1-" class="center hint-typing">
    <div class="tybox">
      <table class="math hint-rules" id="hint-rules-general">
	<tr>
	  <td/>
	  <td>
<BRAO/><tt><var>inst<sub>x</sub></var></tt><BRAC/> <math.arrowright/> <H/>(<var>x</var>,<var>t<sub>1</sub></var>,<var>w<sub>1</sub></var>), ..., <H/>(<var>x</var>,<var>t<sub>n</sub></var>,<var>w<sub>n</sub></var>)</td>
	  <td/>
	</tr>
      </table>
    </div>
  </div>
  <div step="2-" class="center hint-typing">
    <div class="tybox">
      <table class="math hint-rules" id="hint-rules">
	<tr>
	  <td>(1)</td>
	  <td><BRAO/><tt>x[<var>e</var>]</tt><BRAC/></td>
	  <td><math.arrowright/></td>
	  <td><H/>(<tt>x</tt>,<tt>object</tt>,1)</td>
	</tr>
	<tr step="3-">
	  <td>(2)</td>
	  <td><BRAO/><tt>x[<var>e</var>]</tt><BRAC/> ^ <T/>(<math.var>e</math.var>) = <tt>int</tt></td>
	  <td><math.arrowright/></td>
	  <td><H/>(<tt>x</tt>,<tt>array</tt>,2), <H/>(<tt>x</tt>,<tt>string</tt>,2)</td>
	</tr>
	
	<tr step="4-">
	  <td>(3)</td>
	  <td><BRAO/><tt>x["length"]</tt><BRAC/></td>
	  <td><math.arrowright/></td>
	  <td><H/>(<tt>x</tt>,<tt>array</tt>,2), <H/>(<tt>x</tt>,<tt>string</tt>,2)</td>
	</tr>
	
	<tr step="5-">
	  <td>(4)</td>
	  <td><BRAO/><tt>x[<var>e</var>]=<var>v</var></tt><BRAC/></td>
	  <td><math.arrowright/></td>
	  <td><H/>(<tt>x</tt>,<tt>object</tt>,2),<H/>(<tt>x</tt>,<tt>array</tt>,2),<H/>(<tt>x</tt>,<tt>string</tt>,-&infin;)</td>
	</tr>
	
	<tr step="6-">
	  <td>(5)</td>
	  <td><BRAO/><tt>x[<var>e</var>]=<var>v</var></tt><BRAC/> ^ <T/>(<math.var>e</math.var>) = <tt>int</tt></td>
	  <td><math.arrowright/></td>
	  <td><H/>(<tt>x</tt>,<tt>array</tt>,3)</td>
	</tr>
	
	<tr step="7-">
	  <td>(6)</td>
	  <td><BRAO/><tt>x&lt;&lt;y</tt><BRAC/></td>
	  <td><math.arrowright/></td>
	  <td><H/>(<tt>x</tt>,<tt>int</tt>,1), <H/>(<tt>y</tt>,<tt>int</tt>,1)</td>
	</tr>
	
	<tr step="8-">
	  <td>(7)</td>
	  <td><BRAO/><tt>x+e</tt><BRAC/> ^ <T/>(<math.var>e</math.var>) = <tt>num</tt></td>
	  <td><math.arrowright/></td>
	  <td><H/>(<tt>x</tt>,<tt>int</tt>,1)</td>
	</tr>
	
	<tr step="8-">
	  <td>(8)</td>
	  <td>...</td>
	  <td/>
	  <td/>
	</tr>
      </table>
    </div>
  </div>
</impress.slide>

infer.css = <style>
.body {
  font-weight: normal;
}

.problem {
  width: 80%;
  margin-top: 1ex;
  margin-bottom: 2ex;
}

#hint-rules-general {
  font-size: 50%;
}
  
#hint-rules {
  margin-top: 1ex;
  font-size: 35%;
}

#hint-rules td:nth-child( 2 ) {
   width: 11em;
}
</style>
