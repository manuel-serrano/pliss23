/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/benchmark/benchmark.js            */
/*    -------------------------------------------------------------    */
/*    Author      :  manuel serrano                                    */
/*    Creation    :  Sat Aug 13 15:56:38 2022                          */
/*    Last change :  Thu Aug 24 10:15:49 2023 (serrano)                */
/*    Copyright   :  2022-23 manuel serrano                            */
/*    -------------------------------------------------------------    */
/*    JavaScript AOT compilation                                       */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import { bench } from "./bench.js";
import { jetstream } from "./jetstream.js";
import { evil } from "./evil.js";
import { earley } from "./earley.js";
import { deltablue } from "./deltablue.js";
import { sha1 } from "./sha1.js";
import { hopstone } from "./hopstone.js";
import { memory } from "./memory.js";

export { benchmark };

/*---------------------------------------------------------------------*/
/*    style ,,,                                                        */
/*---------------------------------------------------------------------*/
const style = <style>
.benchmark {   
   text-align: center;
   font-weight: bold;
   margin-left: auto;
   margin-right: auto;
   color: var(--greydark);
}
</style>;
   
/*---------------------------------------------------------------------*/
/*    benchmark ...                                                    */
/*---------------------------------------------------------------------*/
const benchmark = [style, bench, evil,
   jetstream, /* earley, */ deltablue, sha1, 
   hopstone, memory ];
