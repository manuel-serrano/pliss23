/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/scm2c/closure.js            */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Fri Aug 25 12:04:08 2023 (serrano)                */
/*    Copyright   :  2015-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Pliss23, Scheme compilation                                      */
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
export const slide = <impress.slide title="Closures" class="md">
   <MD fontifier=${fontifier}>
   ${<div class="center">Closures</div>}


```c
struct _function {
  long arity;
  obj_t (*entry)();
  obj_t env0;
}

#define CLOSURE_ENV(clo, i) ((obj_t *)&(c->val.function.env0))[i]

obj_t make_closure(obj_t (*entry)(), long arity, long size) {
  obj_t c = GC_MALLOC(sizeof(enum types) + sizeof(struct _function) + sizeof(obj_t) * (size - 1));
  c->header = FUNCTION;
  c->val.function.arity = arity;
  c->val.function.entry = entry;
  return c;
}

obj_t adder(obj_t x) {
  obj_t c = make_closure(&lambda0, 1, 1);
  CLOSURE_ENV(c, 0) = x;
  return x;  
}

obj_t lambda0(obj_t clo, obj_t y) {
  obj_t x = CLOSURE_ENV(clo, 0);
  return add(x, y);
}
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
   font-size: 30%;
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
