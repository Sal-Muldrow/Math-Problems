var a = 82;
var b = 76;
var c = 90;
var d = 0;

//Test Score Questions
for (var i = 100; i >= 0; i--) { // runs loop for every number in 100 for possible test score
	
	var avg = (a+b+c+d+i)/5; // create an average with the current loops number
	if(avg >= 60){ // if it is >= 60 this is a passing test grade
		console.log("Passing Grade: "+ i); //tell me what the passing test grade is
	}
}
