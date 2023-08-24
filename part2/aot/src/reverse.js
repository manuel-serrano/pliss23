function reverse(a) {
   for (let i = 0; i < a.length / 2; i++) {
      let v = a[a.length - 1 - i];
      a[a.length - 1 - i] = a[i];
      a[i] = v;
   }
   return a;
}
const areverse = reverse([23, 56, 3]);
const oreverse = reverse({length: 2, "0": 1, "1": 45});
