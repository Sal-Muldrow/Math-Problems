var x = 0.01; //Minimum increment value
var Arr = []; //Array for checking maximum	
var maxY; //Max Y value of parabola (between x intercepts)
var maxX; //Max x corresponding to Max Y

do {
	x += .01 //increment  between 2 x intercepts
    y = (-241 * Math.pow(x, 7)) + (1062 * Math.pow(x, 6)) -(1872 * Math.pow(x, 5)) + (1647 * Math.pow(x, 4)) - (737 * Math.pow(x, 3)) +(144 * Math.pow(x, 2)) -(2.432 * x);
    //calculate y value^^
    Arr.push(y); //add these values to our array for checking 
}
while (y > 0); // while we are between x intercepts
maxY = Math.max.apply(null, Arr); //set maxY to our maximum y value in the array
maxX = (Arr.indexOf(maxY) * 0.01)+ .02; //get x value out of y value
console.log(maxX + " " +maxY); // tell me the answer please




