/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/scm2c/fx.js                 */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Wed Sep  6 08:43:22 2023 (serrano)                */
/*    Copyright   :  2015-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Pliss23, part 1 title                                            */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import/export ...                                                */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import * as fontifier from "hop:fontifier";
import { MARKDOWN as MD } from "hop:markdown";

/*---------------------------------------------------------------------*/
/*    A slide ...                                                      */
/*---------------------------------------------------------------------*/
export const slide = <impress.slide title="Tagging Fixnums, a case study " class="md">
   <MD fontifier=${fontifier}>
   ${<div class="center">Fixnums</div>}


```c
#define MAKE_FX(long n) (n ${"<<"} 3)

#define FXP(o) ((o & 7) == 0)
#define ADDFX(n, m) (n+m)

#define FLP(o) (((o & 7) == 1) && (o ${">>"} 3)-${">"}header == FLONUM)
// or, if you play with bit patterns...
#define FLP(o) ((o & 7) == 2)
```

</MD>   
</impress.slide>

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
slide.css = <style>
.body {
   font-size: 80%;
   transition: 1s all;
}

pre {
   font-size: 50%;
}

p {
   margin: 0;
}

.center {
   font-weight: bold;
   color: var(--greydark);
   font-size: 110%;
   margin-bottom: 1ex;
}

div.head {
   text-decoration: underline;
   margin-left: 0.5em;
   color: var(--grey);
   font-weight: bold;
   font-size: 80%;
   margin-bottom: 1ex;
}

strong {
   font-style: normal;
   color: var(--red);
}

em {
   font-style: normal;
   color: var(--greydark);
}

ul {
   margin: 1ex;
   list-style: none;
   margin-top: 0;
   font-size: 90%;
}

ul ul {
   margin: 0;
   font-size: 80%;
}

a {
   text-decoration: none;
   color: var(--greydark);
   font-size: 60%;
   font-family: monospace;
}
	       
a:before {
   content: "(";
}

a:after {
   content: ")";
}

code {
   font-family: cmtt;
   color: var(--greyverydark);
}

.fontifier-prog .fontifier-prog-line-comment {
   font-weight: normal;
   color: var(--javascript-color);
   font-style: normal;
}
      
[data-step="0"] li { opacity: 0; }

[data-step="1"] li { opacity: 1;}
[data-step="1"] li + li { opacity: 0; }

[data-step="2"] li { opacity: 1; text-decoration: line-through; }
[data-step="2"] li + li { opacity: 1; text-decoration: none; }
[data-step="2"] li + li + li { opacity: 0; }

[data-step="3"] li { opacity: 1; text-decoration: line-through; }
[data-step="3"] li + li { opacity: 1; text-decoration: line-through; }
[data-step="3"] li + li + li { opacity: 1; text-decoration: none; }
[data-step="3"] li + li + li + li { opacity: 0; }

[data-step="4"] li { opacity: 1; text-decoration: line-through; }
</style>   
