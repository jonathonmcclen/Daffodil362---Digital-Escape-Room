// Story progression

var login1 = false;
var login2 = false;

var puzzle1 = false;
var puzzle2 = false;
var puzzle3 = false;
var puzzle4 = false;
var puzzle5 = false;
var puzzle6 = false;

var loggedIn = false;

var puzzle7 = false;
var puzzle8 = false;
var puzzle9 = false;
var puzzle10 = false;


var encryptedDone = false;

const FileLokPuzzle1En = "https://17928-05613-01573-57099";
const FileLokPuzzle2En = "https://08958-08678-00000-67409";
const FileLokPuzzle3En = "https://30304-28387-90909-14241";
const FileLokPuzzle4En = "https://20239-68775-00989-83838";
const FileLokPuzzle5En = "https://87665-76501-10129-30483";
const FileLokPuzzle6En = "https://48597-30482-08223-96574";
const FileLokPuzzle7En = "https://40743-98076-44732-12864";
const FileLokPuzzle8En = "https://74646-40332-80653-56392";


var puzzle11 = false;
var puzzle12 = false;
var puzzle13 = false;
var puzzle14 = false;
var puzzle15 = false;
var puzzle16 = false;

var finalCut = true;

//-----------------------------------------------------------
var hintCode = "001";
//-----------------------------------------------------------


function checkPlayerInput() {
	
	if(login1 != true){
		
		if (playerTXT == "guest"){
			
			login1 = true;
			login2 = true;
			puzzle1 = true;
			puzzle2 = true;
			puzzle3 = true;
			puzzle4 = true;
			puzzle5 = true;
			puzzle6 = true;
			puzzle7 = true;
			puzzle8 = true;
			puzzle9 = true;
			puzzle10 = true;
			loggedIn = true;
			
		} else if (playerTXT == "hint"){
			
			addNewLogItem("important", "Hint Code: " + hintCode);
			
		} else {
			
			playerUsername = playerTXT;
			login1 = true;
			login1Done(); // cutscenes.js
			hintCode = "002";
		};

	} else if(login2 != true){
		
		if (playerTXT == "hint"){
			
			addNewLogItem("important", "Hint Code: " + hintCode);
			
		} else {
			
		playerPassword = playerTXT;
		login2 = true;
		login2Done(); // cutscenes.js
		hintCode = "101";
			
		};
		
	} else if(puzzle1 != true) { // AUTHENTICATION 1/10
		
		if(playerTXT == "601287"){
			
			puzzle1 = true;
			puzzle1Done();
			hintCode = "102";
			
		} else if (playerTXT == "hint"){
			
			addNewLogItem("important", "Hint Code: " + hintCode);
			
		} else {
			incorrectSub();
		}
		
	} else if(puzzle2 != true) { // AUTHENTICATION 2/10
		
		if(playerTXT == "842431"){ 
			
			puzzle2 = true;
			puzzle2Done();
			hintCode = "103";
			
		} else if (playerTXT == "hint"){
			
			addNewLogItem("important", "Hint Code: " + hintCode);
			
		} else {
			incorrectSub();
		}
		
	} else if(puzzle3 != true) { // AUTHENTICATION 3/10
		
		if(playerTXT == "976142"){
			
			puzzle3 = true;
			puzzle3Done();
			hintCode = "104";
			
		} else if (playerTXT == "hint"){
			
			addNewLogItem("important", "Hint Code: " + hintCode);
			
		} else {
			incorrectSub();
		}   
		
	} else if(puzzle4 != true) { // AUTHENTICATION 4/10
		
		if(playerTXT == "452863"){
			
			puzzle4 = true;
			puzzle4Done();
			hintCode = "105";
			
		} else if (playerTXT == "hint"){
			
			addNewLogItem("important", "Hint Code: " + hintCode);
			
		} else {
			incorrectSub();
		}   
		
	} else if(puzzle5 != true) { // AUTHENTICATION 5/10
		
		if(playerTXT == "203896"){
			
			puzzle5 = true;
			puzzle5Done();
			hintCode = "106";

		} else if (playerTXT == "hint"){
			
			addNewLogItem("important", "Hint Code: " + hintCode);
			
		} else {

			incorrectSub();
			
		}	
	} else if(puzzle6 != true) { // AUTHENTICATION 6/10
		
		if(playerTXT == "018649"){
			
			puzzle6 = true;
			puzzle6Done();
			hintCode = "107";
			
		} else if (playerTXT == "hint"){
			
			addNewLogItem("important", "Hint Code: " + hintCode);
			
		} else {

			incorrectSub();
			
		}
		
	} else if(puzzle7 != true) { // AUTHENTICATION 7/10 ADDED LATE
		
		if(playerTXT == "502836"){
			
			puzzle7 = true;
			puzzle16Done();
			hintCode = "108";

		} else if (playerTXT == "hint"){
			
			addNewLogItem("important", "Hint Code: " + hintCode);
			
		} else {

			incorrectSub();
			
		}
		
	} else if(puzzle8 != true) { // AUTHENTICATION 8/10 ADDED LATE
		
		if(playerTXT == "163955"){
			
			puzzle8 = true;
			puzzle17Done();
			hintCode = "109";

		} else if (playerTXT == "hint"){
			
			addNewLogItem("important", "Hint Code: " + hintCode);
			
		} else {

			incorrectSub();
			
		}
		
	} else if(puzzle9 != true) { // AUTHENTICATION 9/10 ADDED LATE
		
		if(playerTXT == "590864"){
			
			puzzle9 = true;
			puzzle18Done();
			hintCode = "110";
			
		} else if (playerTXT == "hint"){
			
			addNewLogItem("important", "Hint Code: " + hintCode);
			
		} else {

			incorrectSub();
			
		}
		
	} else if(puzzle10 != true) { // AUTHENTICATION 10/10 MIND READING PUZZLE
		
		if(playerTXT == "483327"){
			
			puzzle10 = true;
			LoggedIn();
			document.getElementById("txt").maxLength = "100";
			loggedIn = true;
			hintCode = "201";
			
		} else if (playerTXT == "hint"){
			
			addNewLogItem("important", "Hint Code: " + hintCode);
			
		} else {

			incorrectSub();
			
		}
		
	} else if (encryptedDone != true){ // YOU ARE NOW LOGGED IN
		
		 if (playerTXT == "https://57203-23423-76039-67239"){ // Start Email Alabaster Terminal

			puzzle15Done();
			hintCode = "202";

		} else if (playerTXT == alabasterTerminalURL){ // Hack Alabaster terminal for Authenticationcode
			
			puzzle7Done();
			hintCode = "203";
			
		} else if (playerTXT == "https://12406-13796-93659-37402"){ // First cutscene ENCRYPTED URL
				
			puzzle8Done();
			hintCode = "204";

		} else if (playerTXT == "https://40353-36520-23634-27560"){ // Second cutscene ENCRYPTED URL
				
			puzzle9Done();
			hintCode = "205";

		} else if (playerTXT == "https://66737-26553-26594-46592"){ // Third cutscene ENCRYPTED URL
				
			puzzle10Done();
			hintCode = "206";

		} else if (playerTXT == "https://20693-10782-40621-12479"){ // Fourth cutscene ENCRYPTED URL
				
			puzzle11Done();
			hintCode = "206";

		} else if (playerTXT == "https://twitter.com/Anonymo00841943"){
				
			puzzle12Done();
			hintCode = "207";

		} else if (playerTXT == FileLokPuzzle1En){ //puzzle 2 Shapes 1
			FileLokPuzzle1();
			hintCode = "208";

		} else if (playerTXT == FileLokPuzzle2En){ //puzzle 3 Shapes 2
			FileLokPuzzle2();
			hintCode = "209";

		} else if (playerTXT == FileLokPuzzle3En){ //puzzle 4 Fruit Salad
			FileLokPuzzle3();
			hintCode = "210";

		} else if (playerTXT == FileLokPuzzle4En){ //puzzle 5 Colors 2
			FileLokPuzzle4();
			hintCode = "211";

		} else if (playerTXT == FileLokPuzzle5En){ //puzzle 6 Twitter Hack Poem
			FileLokPuzzle5();
			hintCode = "212";

		} else if (playerTXT == FileLokPuzzle6En){ //puzzle 7 Helcopter Photo
			FileLokPuzzle6();
			hintCode = "213";

		} else if (playerTXT == FileLokPuzzle7En){ //puzzle 8 Phone number
			FileLokPuzzle7();
			hintCode = "214";

		} else if (playerTXT == FileLokPuzzle8En){ //puzzle 9  
			FileLokPuzzle8();
			hintCode = "215";

		} else if (playerTXT == "https://twitter.com/Ax787556086"){
				
			puzzle14Done();
			//Part of an FileLok Puzzle does not need to change hint

		} else if (playerTXT == "https://10109-37583-28534-49452"){// Google maps Puzzle
				
			puzzle13Done();
			hintCode = "216";

		} else if (playerTXT == "https://75896-29742-69504-22231"){ //Encryped URL Example SERIOUSLY?

			ExampleFail();
			// No Hint for this just keep same hint

		} else if (playerTXT == "https://54759-74729-89454-57570"){ // You Are Now Hacked
			
			var glitchAnim = setInterval(fadeGlitch, 10000);
			document.getElementById("txt").maxLength = "6";
			encryptedDone = true;
			cutsceneHacked();
			Hacked = true;
			hintCode = "301";

		} else if (playerTXT == "hint"){
			
			addNewLogItem("important", "Hint Code: " + hintCode);
			
		}  else {
				
			decryptFail();
				
		}
		
	} else if (Hacked = true){
		
		if(puzzle11 != true){
			if (playerTXT == "840253"){
			
				Section6Puzzle1();
				puzzle11 = true;
				hintCode = "302";
				
			} else {
				
			incorrectSub();
				
			}
		} else if (puzzle12 != true){
			if (playerTXT == "282837"){
			
				Section6Puzzle2();
				puzzle12 = true;
				hintCode = "303";
				
			} else if (playerTXT == "hint"){
			
			addNewLogItem("important", "Hint Code: " + hintCode);
			
			} else {
			incorrectSub();
			}
		} else if (puzzle13 != true){
			if (playerTXT == "372672"){
			
				Section6Puzzle3();
				puzzle13 = true;
				hintCode = "304";
				
			} else if (playerTXT == "hint"){
			
			addNewLogItem("important", "Hint Code: " + hintCode);
			
			} else {
			incorrectSub();
			}
		} else if (puzzle14 != true){
			if (playerTXT == "774093"){
			
				Section6Puzzle4();
				puzzle14 = true;
				hintCode = "305";
				
			} else if (playerTXT == "hint"){
			
			addNewLogItem("important", "Hint Code: " + hintCode);
			
			} else {
			incorrectSub();
			}
		} else if (puzzle15 != true){
			if (playerTXT == "674931"){

				finalCutscene();
				finalCut = true;
				puzzle15 = true;
				
			} else if (playerTXT == "hint"){
			
			addNewLogItem("important", "Hint Code: " + hintCode);
			
			} else {
			incorrectSub();
			}
		} else if (puzzle16 != true){
			playerTXT = "";
			if (playerTXT == ""){
				
				puzzle16 = true;
				FinalCutscenept2();
				
			} else {
			incorrectSub();
			}
		}
	} 
};

function divider() {
	addNewLogItem("", "..........................................................");
}

function incorrectSub() {
	addNewLogItem("comp", "Command Submission " + "\"" + playerTXT + "\"" + " NOT recognized");
};