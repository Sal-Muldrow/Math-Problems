//this contains whatever problem i was looking for last for testing
// run with node index.js
var x = 0.01;
var Arr = [];
var maxY;
var maxX;

do {
	x += .01
    y = (-241 * Math.pow(x, 7)) + (1062 * Math.pow(x, 6)) -(1872 * Math.pow(x, 5)) + (1647 * Math.pow(x, 4)) - (737 * Math.pow(x, 3)) +(144 * Math.pow(x, 2)) -(2.432 * x);
    Arr.push(y);
}
while (y > 0);
maxY = Math.max.apply(null, Arr);
maxX = (Arr.indexOf(maxY) * 0.01)+ .02; 
console.log(maxX + " " +maxY);




