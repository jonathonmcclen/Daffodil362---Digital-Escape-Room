// Story progression
var puzzle1 = false;
var puzzle2 = false;
var puzzle3 = false;
var puzzle4 = false;
var puzzle5 = false;
var puzzle6 = false;
var puzzle7 = false;
var puzzle8 = false;
var puzzle9 = false;
var puzzle10 = false;
var puzzle11 = false;
var puzzle12 = false;

//------------------------------------------------------

function checkPlayerInput() {
	
	if(puzzle1 != true) {
		if(playerTXT == "3512076170"){
			puzzle1 = true;
			puzzle1Done();
			
		} else {
			
			incorrectSub();
		}
	} else if(puzzle2 != true) {
		if(playerTXT == "19.087.125"){//19.087.125
			puzzle2 = true;
			puzzle2Done ();
			
		} else {
			
			incorrectSub();
			
		}   
	} else if(puzzle3 != true) {
		if(playerTXT == "3259241426"){

			puzzle3 = true;
			puzzle3Done();
			
		} else {
			
			incorrectSub();
			
		}
	} else if(puzzle4 != true) {
		if(playerTXT == "82.607.459"){
			
			puzzle4 = true;
			puzzle4Done();
			
		} else {

			incorrectSub();
			
		}
	} else if(puzzle5 != true) {
		if(playerTXT == "6502735770"){
			
			puzzle5 = true;
			puzzle5Done();
			
		} else {
			
			incorrectSub();
			
		}
	} else if(puzzle6 != true) {
		if(playerTXT == "62.746.271"){
			
			puzzle6 = true;
			puzzle6Done();
			
		}else {
		
			incorrectSub();
			
		}
	   
	} else if(puzzle7 != true) {
		if(playerTXT == "651697597"){
			
			puzzle2Fail();
			
			
		} else if(playerTXT == "9235613951") {
			
			puzzle7 = true;
			puzzle7Done();
			document.getElementById("txt").maxLength = "15";

		} else {
		
			incorrectSub();
			
		}
	} else if(puzzle8 != true) {
		
		if(playerTXT == "DontForgetAgain"){
			puzzle8 = true;
			puzzle8Done();
			document.getElementById("txt").maxLength = "19";
		} else {
		
			incorrectSub();
			
		}
		  
	} else if(puzzle9 != true) {
		
		if(playerTXT == "FindTheYellowFlower"){
			puzzle9 = true;
			puzzle9Done();
		} else {
		
			incorrectSub();
			
		}
		
	} 
};