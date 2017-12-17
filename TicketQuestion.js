var cost = 6;
var adt;
var rev = 1200;
var NumArray = [];


//Ticket question
for (var i = 200; i >= 0; i-=4) { // runs loop 200 times
	if(i != 0){
		if( i != 200){ // if we aren't on 200
		cost += .25; // add .25 to 6
		adt = i;  // set attendance varible
		
		adt *= cost; // multiply attendance by cost
		var lastcost = (cost - .25); // find the cost of the last time the loop ran
		var last = (i+4) * lastcost ; // find rev of the last loop
		if(last > adt){ // compare this loops rev to the next loops rev
			console.log("With attendance at: " + i +" we lose money when our rev is: " + adt +  " which is less then: " + last + " our cost should be: "+ lastcost );
			break; // exit the loop
		}

		
		}
	}
}
