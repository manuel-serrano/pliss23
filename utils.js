/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/utils.js                          */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Thu May 26 16:19:55 2022                          */
/*    Last change :  Thu Aug 24 08:03:36 2023 (serrano)                */
/*    Copyright   :  2022-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Utilities                                                        */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    Module ...                                                       */
/*---------------------------------------------------------------------*/
import * as fs from "fs";
import * as path from "path";
import { system, systemSync } from "hop:system";

export { gnuplot, tikz };

/*---------------------------------------------------------------------*/
/*    gnuplot ...                                                      */
/*---------------------------------------------------------------------*/
function gnuplot(file) {
   const svg = file.replace(/[.]plot$/,".svg");
   const dir = path.dirname(file);
   
   if (!fs.existsSync(svg) || fs.statSync(file).ctime > fs.statSync(svg).ctime) {
      console.log("Generating", svg, `[(cd ${dir}; gnuplot ${file} > ${svg})]`);
      systemSync(`sh -c "(cd ${dir}; gnuplot ${file} > ${svg})"`);
   }
      
   return svg;
}
   
/*---------------------------------------------------------------------*/
/*    tikz ...                                                         */
/*---------------------------------------------------------------------*/
function tikz(file) {
   const svg = file.replace(/[.]tex$/,".svg");
   if (!fs.existsSync(svg) || fs.statSync(file).ctime > fs.statSync(svg).ctime) {
      console.log("Generating", svg, `[tikz2svg ${file} ${svg}]`);
      systemSync(`tikz2svg ${file} ${svg}`);
   }
      
   return svg;
}
