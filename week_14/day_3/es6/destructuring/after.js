let a;
let b;

[a, b] = [1, 2];

const obj = {
  first: "Jane",
  last: "doe"
}

const {
  first: f,
  last: l
} =obj

//the destructuring above is the same as this below:
//var f = obj.first;
//var l = obj.last;

console.log(f, l);