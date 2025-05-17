/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part2/proxy/mdn.js                */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 11:24:33 2023                          */
/*    Last change :  Sat May 17 08:35:14 2025 (serrano)                */
/*    Copyright   :  2023-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    JavaScript O["X"]                                                */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import/export ...                                                */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { slideWidth } from "../../config.js"

/*---------------------------------------------------------------------*/
/*    mdn                                                              */
/*---------------------------------------------------------------------*/
export const mdn = <impress.slide title="String @ MDN">
  <div id="mdn-doc">
  <div class="mdn-title">Long Literal strings</div>
  <div>
Sometimes, your code will include strings which are very long. 
Rather than having lines that go on endlessly, or wrap at the whim of 
your editor, you may wish to specifically break the string into multiple
lines in the source code without affecting the actual string contents. 
There are two ways you can do this.
  </div>

  <div class="mdn-subtitle">Method 1</div>
  <div>
    You can use the <span class="mdn-keyword">+</span> operator to append multiple strings together, like this:
  </div>
  
 <div class="js code mdn-code"> 
   <pre>
<span class="mdn-keyword">let</span> longString <span class="mdn-op">=</span> <span class="mdn-string">"This is a very long string which needs "</span> <span class="mdn-op">+</span>
                 <span class="mdn-string">"to wrap across multiple lines because "</span> <span class="mdn-op">+</span>
                 <span class="mdn-string">"otherwise my code is unreadable."</span> </pre>
 </div>
 
  <div class="mdn-subtitle">Method 2</div>

  <div>
You can use the backslash character (\) at the end of each line to indicate 
that the string will continue on the next line. Make sure there is no space 
or any other character after the backslash (except for a line break), or as 
an indent; otherwise it will not work.
  </div>
  
That form looks like this:

 <div class="js code mdn-code"> 
   <pre>
<span class="mdn-keyword">let</span> longString = <span class="mdn-string">"This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable."</span>
			     </pre>
</div>
Both of the above methods result in identical strings.
 </div>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
mdn.css = <style>
  .body {
     font-size: 30%;
     font-weight: normal;
     background-color: white;
  }

  #mdn-doc {
     margin-left: 1em;
     margin-right: 1em;
  }
  
   pre {
     font-size: 80%;
     margin-top: 1ex;
  }
  
  .mdn-keyword {
     color: #0075a7;
  }
  
  .mdn-op {
     color: #976c39;
  }
  .mdn-string {
     color: #649600;
  }
  .mdn-code {
     border-left: 4px solid #0075a7;
     padding-left: 1em;
     margin-top: 0.5ex;
     margin-bottom: 0.5ex;
     background-color: #e9e9e9;
  }
  .mdn-title {
     margin-top: 1ex;
     margin-bottom: 0.5ex;
     background-color: black;
     color: white;
     padding-left: 2em;
     padding-right: 8px;
     display: inline-block;
     font-size: 120%;
  }
  
  .mdn-subtitle {
     font-weight: bold;
     margin-bottom: 1ex;
     margin-top: 2ex;
  }
</style>

