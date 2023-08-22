let p1 = { cnt: 45 };
let p2 = { cnt: 0,
           toString: function() {return this.x+","+this.y} };
let os = [{ x: 1, y: 2, __proto__: p1 },
          { x: 4, y: 5, __proto__: p2 }];
