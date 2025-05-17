/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/aot/practice.js             */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Sat May 17 08:38:52 2025 (serrano)                */
/*    Copyright   :  2021-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Opportunistic inference typing                                   */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as math from "../../math.js";
import * as impress from "@hop/hopimpress";
import { LSTINPUTLISTING } from "../../listings.js";

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
/*    practice ...                                                     */
/*---------------------------------------------------------------------*/
export const practice = <impress.slide title="Opportunistic Practice" class="aot">
  <div class="center boldgrey"><span class="titlekey">Opportunistic</span> Typing in Practice</div>
   <lstinputlisting language="javascript" src=${require.resolve("./src/reverse.js")} linerange="1-10"/>

  <div class="center" step="1-">
    <div class="tybox hint-typing">
      <table class="math hint-rules" id="hint-rules-in-practice">
	<tr>
	  <td><BRAO/><tt>a["length"]</tt><BRAC/></td>
	  <td>by rule (1) <math.darrowright/></td>
	  <td><H/>(<tt>a</tt>,<tt>object</tt>,1)</td>
	</tr>
	<tr step="2-">
	  <td><BRAO/><tt>a["length"]</tt><BRAC/></td>
	  <td>by rule (3) <math.darrowright/></td>
	  <td>
	    <H/>(<tt>a</tt>,<tt>object</tt>,1),
            <H/>(<tt>a</tt>,<tt>array</tt>,2),
	    <H/>(<tt>a</tt>,<tt>string</tt>,2)
	  </td>
	</tr>
	<tr step="3-">
	  <td><BRAO/><tt>a[i]</tt><BRAC/></td>
	  <td>by rule (1) <math.darrowright/></td>
	  <td>
	    <H/>(<tt>a</tt>,<tt>object</tt>,2),
            <H/>(<tt>a</tt>,<tt>array</tt>,2),
	    <H/>(<tt>a</tt>,<tt>string</tt>,2)
	  </td>
	</tr>
	<tr step="4-">
	  <td><BRAO/><tt>a[i]</tt><BRAC/> ^ <T/>(<math.var>i</math.var>) = <tt>int</tt></td>
	  <td>by rule (2) <math.darrowright/></td>
	  <td>
	    <H/>(<tt>a</tt>,<tt>object</tt>,2),
      	    <H/>(<tt>a</tt>,<tt>array</tt>,4),
	    <H/>(<tt>a</tt>,<tt>string</tt>,4)
	  </td>
	</tr>
	<tr step="5-">
	  <td><BRAO/><tt>a[i]=v</tt><BRAC/></td>
	  <td>by rule (4) <math.darrowright/></td>
	  <td>
	    <H/>(<tt>a</tt>,<tt>object</tt>,4),
            <H/>(<tt>a</tt>,<tt>array</tt>,4),
            <H/>(<tt>a</tt>,<tt>string</tt>,-&infin;)
	  </td>
	</tr>
	<tr step="6-">
	  <td><BRAO/><tt>a[i]=v</tt><BRAC/> ^ <T/>(<math.var>i</math.var>) = <tt>int</tt></td>
	  <td>by rule (5) <math.darrowright/></td>
	  <td>
	    <H/>(<tt>a</tt>,<tt>object</tt>,4),
            <span class="final"><H/>(<tt>a</tt>,<tt>array</tt>,7)</span>,
	    <H/>(<tt>a</tt>,<tt>string</tt>,-&infin;)
	  </td>
	</tr>
	<tr step="6-">
	  <td>...</td>
	</tr>
      </table>
    </div>
  </div>
</impress.slide>

practice.css = <style>
.body {
  font-weight: normal;
}

pre {
  font-size: 25%;
}

.boldgrey {
  font-weight: bold;
  color: var(--grey);
}

.titlekey {
  color: var(--red);
}

#hint-rules-in-practice {
   margin-top: 0.5ex;
   width: 95.5%;
   font-size: 30%;
}
  
#hint-rules-in-practice td {
   white-space: nowrap;
}

</style>
