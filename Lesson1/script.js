if (Math.random() > 0.5) {
    const y = 5;
};

console.log(y);

if (true) {
    var x = 5
}
console.log('====================================');
console.log(x);
console.log('====================================');


// Variable hoisting

console.log(x === undefined);
var x = 3;

(function () {
    console.log(x);
    var x = "Local value";
}) ();



