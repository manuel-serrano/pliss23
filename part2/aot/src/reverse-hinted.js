function reverse$$(a) {
   // same as before
}
function reverse$$A(a#@type#: array#/@type#): #@type#array#/@type# {
   for (let i#@type#: int#/@type# = 0; i <fx #@arr#aLen(a)#/@arr# /fx 2; i++fx) {
      let v = #@arr#aRef#/@arr#(a, #@arr#aLen#/@arr#(a) -fx 1 -fx i);
      #@arr#aSet#/@arr#(a, #@arr#aLen#/@arr#(a) -fx 1 -fx i, #@arr#aRef#/@arr#(a, i));
      #@arr#aSet#/@arr#(a, i, v);
   }
   return a;
}
function reverse(a) {
   return instanceof Array ? reverse$$A(a) : reverse$$(a);
}
const areverse = reverse$$A([23, 56, 3]);
const oreverse = reverse$$({length: 2, "0": 1, "1": 45});
