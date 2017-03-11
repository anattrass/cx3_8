var guitars = ["fender", "gibson", "gretsch"];

console.log("guitars", guitars);

//below do the same thing, two ways to make an empty array
// var drums = new Array();
var drums = [];
drums.push("premier");
drums.push("sonor");

console.log("drums", drums);

console.log(guitars[0]);

//console.log(drums[100]); - this will result in an undefined.

console.log(drums[100]);
drums[1] = "zildjan";

//below leaves empty slots in the array gaps.
drums[50] = "boom";
drums[20] = 23;
drums[6] = "bang";

// console.log("drums", drums);
// console.log(drums.length);

// drums.shift();
// console.log("drums", drums);

// var deleted_drum = drums.splice(0,3);
// console.log(deleted_drum);

var sliced_drum = drums.slice(2,25);
console.log(sliced_drum);
