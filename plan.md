# -*- coding: utf-8 -*-

Part 1: From Scheme to C
Part 2: From JavaScript to Scheme

Why Scheme? What is Scheme?
===========================

  * a FL
  * strict, polymorphic
  * based on a small core
  * a "dynamically typed ML"

  * gave birth to JS

  * SICP

Scheme Primer 1
===============

  * Many implementations
    - Guile (url...)
    - Racket (url...)
    - Gambit (url...)
    - Bigloo (url...)
    - ...

Scheme Primer 2
===============

A weird syntax (but it's only syntax)

  * As close as possible to the untyped lambda-calculus
    - abstraction: \x . M
      - (lambda (x) M)
          // function(x) { M }
	  // x => M
    - application: (M N)
      - (M N)
          // M(N)
    - alpha conversion:
        \x. M[x] == \y. M[y]
    - beta conversion:
        ((\x . M) E) == (M[x:= E])
    - eta-conversion:
        \x . M x === M if x free in M

Scheme Primer 3
===============

Church numbers

    0 := λf.λx.x
      = (lambda (f) (lambda (x) x))
        // f => x => x
    1 := λf.λx.f x
      = (lambda (f) (lambda (x) (f x)))
        // f => x => f(x)
    2 := λf.λx.f (f x)
      = (lambda (f) (lambda (x) (f (f x))))
        // f => x => f(f(x))
    3 := λf.λx.f (f (f x))
      = (lambda (f) (lambda (x) (f (f (f (x))))))
        // f => x => f(f(f(x)))
    
Scheme Primer 4
===============

  - Expression based
    - no statments, 
	   everything is an expressionn == everything has a value
	   
  5 essential forms
  
    - variable
	- abstraction
	  (lambda (x y) x)
	    // (x, y) => x
	- application
	  ((lambda (f x y) (f x y)) + 3 4)
	    // (((f, x, y) => f(x, y))((a, b) => (a, b), 3, 4))
    - conditional
	  (if E E E)
	    // if(E) S else S
		// E ? E : E
	- quote
	
Scheme Primer 5
===============

The (pure) beauty of Scheme

  programs equal data
  
    - list is _the_ data structure
	  // (array is _the_ data structure)
	  
	- empty list: (quote ()) === '()
	  // []
	
	- (cons 1 '()) == '(1)
	  // [].push(1)
	
	- (cons 1 (cons 2 '())) == '(1 2) == (list 1 2)
	  // [].push(2).push(1)
	
	- '(lambda (x) x) == (list 'lambda (list 'x) 'x)
	  // ["lambda" ["x"] "x"]
	  
	- (car '(1 2)) => 1
	  // [1, 2][0]
	
	- (cdr '(1 2)) => '(2)
	  // --[1, 2].slice(1)--
	
Scheme Primer 6
===============

  - More syntactic sugar
  
     * ((lambda (tmp) (+ tmp tmp)) (* 3 4))
	  // (tmp => tmp + tmp)(3 * 4)
     ==>
	 (let ((tmp (* 3 4))) (+ tmp tmp))
     // {let tmp = 3 * 4; tmp + tmp }
	 
     * ((lambda (_) (print "end")) (print "begin"))
	   // (_ -> console.log("end"))(console.log("begin"))
     ==>
	 (begin (print "begin") (print "end"))
	 
	 * (define f (lambda (tmp) (+ tmp tmp)))
	   (define (f tmp) (+ tmp tmp))
	   //
	   let f = tmp => tmp + tmp
	   function f(tmp) { return tmp + tmp }
	 
	 * (if x (print "x") (if y (print "y") (print "z")))
	   // if (x) {
	        console.log(x)
		  } else if (y) {
	        console.log(y);
		  } else {
		    console.log(z);
		  }
	   ==>
	   (cond
	     (x (print "x"))
		 (y (print "y"))
		 (else (print "z")))
		 
Scheme Primer 7
===============

  - Apply
     (let ((f (lambda (x y z) (+ x y z))))
	    (f 1 2 3))
	// { let f = (x, y, z) => x + y +z;
	     f(1, 2, 3); }
    ==>
	 (let ((f (lambda (x y z) (+ x y z))))
	    (apply f (list 1 2 3)))
	// { let f = (x, y, z) => x + y +z;
	     f.apply(undefined, new Array(1, 2, 3)); }
    ==>
	 (let ((f (lambda (x y z) (+ x y z))))
	    (apply f '(1 2 3)))
	// --{ let f = (x, y, z) => x + y +z;
	       f.apply(undefined, [1, 2, 3]); }--
		   
Scheme, a DSL for compilers
===========================

  How to write a compiler in Scheme? 
  
    => (define (comp n)
	     (list 'lambda '(x) (list '+ 'x n)))
	   ==
	   (define (comp n)
	     `(lambda (x) (+ x ,n)))
	   // const comp = n => `x => x + ${n}`;
		 
  - Eval evil
       (define add5 (eval (comp 5)))
	   //
	   const add5 = eval(comp(5))
	 
Scheme macros
=============

  (define-macro (comp n)
     `(lambda (x) (+ x ,n)))
	 
  (define add5 (comp 5))
  
  (add5 10)
  
  ==>
  
  (define add5 (lambda (x) (+ x 5)))
  (add5 10) ~~ 15
	 
Why do I love Scheme?
=====================

  - minimalist core language
  - beauty of the core concepts
  - very few design flaws
  - its syntax
  - its untypedness
  
Scheme to C, the challenges
===========================

  - polymorphism
    (lambda (x) x)
	//
	x => x
  - higher order
    (lambda (x) (lambda (y) (+ x y)))
	// x => y => x + y
  - minimalism
    (let ((for (lambda (i) (if (< i 10) (begin (print i) (for (+ 1 i)))))))
	  (for 0))
     ==
	 (let for ((i 0))
	    (if (< i 10) (begin (print i) (for (+ 1 i)))))
     // for(let i = 0; i < 10; i++) { console.log(i); }
  - garbage collection

Polymorphism
============

  How to compile (lambda (x) x)?
  
    long id(long x) { return x; }
	void *id(void *x) { return x; }
	#define id(x) x
	
Polymorphism, boxing & tagging
==============================

  - code alone is not enough
  - code + encoding
  
  - basic schema: generalized boxing
    * all values are boxed
	
```
typedef struct obj *obj_t;

typedef struct box {
  long header;
  val_t val;
}

typeof union val {
  long fixnum;
  double flonum;
  struct _pair {
    obj_t car;
	obj_t pair;
  } pair;
  struct _function {
    ...
  } function;
  ...
}

```

Polymorphism, fixnums 1
=======================

```
enum types { FIXNUM, FLONUM, PAIR, FUNCTION, ... };

obj_t make_fx(long n) {
  obj_t num = GC_MALLOC(sizeof(struct _pair));
  num->header = FIXNUM;
  num->val.fixnum = n;
  return num;
}

int fxp(obj_t n) {
  n->header == FIXNUM;
}

long fx_val(obj_t n) {
  return n->val.fixnum;
}

obj_t add(obj_t n, obj_t m) {
  if (!fxp(n) || !fxp(m)) {
    throw("add: bad number");
  } else {
    long res;
	if (__builtin_saddl_overflow(fx_val(n), fx_val(m), &res)) {
	  return make_bx(fx_to_bx(fx_val(n)), fx_to_bx(fx_val(m)));
	} else {
	  return make_fx(res);
	}
  }
}

obj_t id(obj_t x) {
  return x;
}
```

Polymorphism, fixnums 2
=======================

  * type checking
  * overflow
  * function calls
  * extra read ops
  * extra write ops
  * allocation

Polymorphism, fixnums 3
=======================

  * unsafe, unbounded arithmetic
    +, +fx, +bx, +fl, ...
	-, -fx, -bx, -fl, ...
  * usage C macros to avoid function calls
  * use tagging
  
Polymorphism, fixnums 4
=======================
  
```
#define MAKE_FX(long n) (n << 3)

#define FXP(o) ((o & 7) == 0)

#define ADDFX(n, m) (n+m)

#definne FLONUMP(o) (((o & 7) == 1) && o->header == FLONUM)
```
  
Polymorphism, futher reading
============================

- Boxing/unboxing
- Storage Usage Analysis
- Julia

Higher order
============

How to compile?

```
(define adder (lambda (x) (lambda (y) (+ x y))))
;; const adder = x => y => x + y

(define add5 (adder 5))
;; const add5 = adder(5)
```

```
obj_t adder(obj_t x) {
  return ???;
}

add5 = adder(MAKE_FX(5));
```

Higher order, closure
=====================

```
struct _function {
  long arity;
  obj_t (*entry)();
  obj_t env0;
}

obj_t make_closure(obj_t (*entry)(), long arity, long size) {
  obj_t c = GC_MALLOC(sizeof(struct _function) + sizeof(obj_t) * (size - 1));
  c->header = FUNCTION;
  c->val.function.arity = arity;
  c->val.function.entry = entry;
  return c;
}

obj_t adder(obj_t x) {
  obj_t c = make_closure(&lambda0, 1, 1);
  ((obj_t *)&(c->val.function.env0))[0] = x;
  return x;  
}

obj_t lambda0(obj_t clo, obj_t y) {
  obj_t x = clo->val.funcion.env0((obj_t *)&(c->val.function.env0))[0];
  return add(x, y);
}

#define CLOSURE_ENV(clo, i) ((obj_t *)&(c->val.function.env0))[i]
```

Higher order, first-order
=========================

When is a full-fledged closures required?

  * when a function is used as a value

```
(define (sum o)
  (define (sum-vec)
    (let loop ((i (-fx (vector-length o) 1))
               (s 0))
       (if (<fx i 0)
	       s
		   (loop (-fx i 1) (+fx (vector-ref o i) s)))))
  (define (sum-pair)
     (let loop ((o o)
	            (s 0))
       (if (null? o)
	       s
		   (loop (cdr o) (+fx (car o) s)))))
  (if (vector? o)
      (sum-vec)
	  (sum-pair)))
```

```
obj_t sum(obj_t o) {
  if (VECTORP(o)) {
    goto sum_vec;
  } else {
    goto sum_pair;
  }
  
sum_vec: {
  long i = VECTOR_LENGTH(o);
  obj_t s = MAKE_FX(0);
sum_vec_loop:  
  if (LTFX(i, MAKE_FX(0))) {
    return s;
  } else {
    i = SUBFX(i, MAKE_FX(1));
	s = ADDFX(VECTOR_REF(o, i), s);
	goto sum_vec_loop;
	
sum_pair:
  ...
}
```

Higher order, lambda-lifting, and tail-recursion
================================================

What about this one?

```
(define (copy o)
  (define (copy-vec)
    (let ((r (make-vector (vector-length o))))
	  (let loop ((i (-fx (vector-length o) 1)))
	    (if (<fx i 0)
		    r
			(begin
			  (vector-set! r i (vector-ref o i))
			  (loop (-f xi 1)))))))
  (define (copy-pair)
    (let loop ((o o))
	  (if (null? o)
	      o
		  (cons (car o) (loop (cdr o))))))
  (if (vector? o)
      (copy-vec)
	  (copy-pair)))
```

Because of the non-tail calls, a stack is needed
and functions cannot be compiled as loop.

```
obj_t copy(obj_t o) {
  if (VECTORP(o)) {
    goto copy_vec;
  } else {
    goto copy_pair;
  }
  
copy_pair:  
  return copy_pair_loop(o);
}

obj_t copy_pair_loop(obj_t o) {
  if (nullp(o)) {
    return o;
  } else {
    return cons(CAR(o), copy_pair_loop(CDR(o)));
  }
}
```
  
Higher order, lambda-lifting
============================

```
(define (F n m)
  (define (a)
	n)
  (define ()
	(+fx (a) m))
  (G b))
```

```
obj_t F(obj_t n, obj_t m) {
  obj_t b = make_closure(&lambdaB, 0, 2);
  CLOSURE_ENV(b, 0) = n;
  CLOSURE_ENV(b, 1) = m;
  return b;
}

obj_t lambdaB(obj_t env) {
  return a(CLOSURE_ENV(env, 0)) + CLOSURE_ENV(env, 1);
}

obj_t functionA(obj_t n) {
  return n;
}
```

Higher order, lambda-lifting, and mutation
==========================================

```
(define (F n m)
  (define (a)
    (set! n (+fx n 1))
	n)
  (define (b)
	(+fx (a) m))
  (G b))
```

```
obj_t F(obj_t n, obj_t m) {
  obj_t b = make_closure(&lambdaB, 0, 2);
  CLOSURE_ENV(b, 0) = make_cell(n);
  CLOSURE_ENV(b, 1) = m;
  return b;
}

obj_t lambdaB(obj_t env) {
  return a(CLOSURE_ENV(env, 0)) + CLOSURE_ENV(env, 1);
}

obj_t functionA(obj_t n) {
  CELL_SET(n, add(CELL_REF(n), MAKE_FX(1)));
  return CELL_REF(n);
}
```

Garbage collection
==================
  
  
	
