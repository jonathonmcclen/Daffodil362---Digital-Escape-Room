// Story progression
const FileLokPuzzle1En = "https://17928-05613-01573-57099";
const FileLokPuzzle2En = "https://08958-08678-00000-67409";
const FileLokPuzzle3En = "https://30304-28387-90909-14241";
const FileLokPuzzle4En = "https://20239-68775-00989-83838";
const FileLokPuzzle5En = "https://87665-76501-10129-30483";
const FileLokPuzzle6En = "https://48597-30482-08223-96574";
const FileLokPuzzle7En = "https://40743-98076-44732-12864";
const FileLokPuzzle8En = "https://74646-40332-80653-56392";

var finalCut = true;

//-----------------------------------------------------------
var hintCode = "001";
//-----------------------------------------------------------

var section = 0;
var puzzle = 0;

function checkPlayerInput() {
	
    //Music
    if (playerTXT == "music") {
        if (music_on) {
            current_music.pause();
            music_on = false;
        }
        else {
            current_music.play();
            music_on = true;
        }
        return;
    }
    
    //Typing animation
    if (playerTXT == "typing") {
        let typing_log_item = startTypingAnimation();
        setTimeout(() => endTypingAnimation(typing_log_item), 3000);
        return;
    }
    
    //Moving button
    if (playerTXT == "button") {
        doMovingButton();
        return;
    }
    
    
	if(section == 0 && puzzle == 0){
		
        if (music_on)
            main_music.play();
        
		if (playerTXT == "guest"){
			
			section = 2;
			puzzle = 1;
			
		} else if (playerTXT == "hint"){
			
			addNewLogItem("important", "Hint Code: " + hintCode);
			
		} else {
			playerUsername = playerTXT;
			puzzle = 1;
			login1Done(); // cutscenes.js
			hintCode = "002";
		};

	} else if(section == 0 && puzzle == 1){
		
		if (playerTXT == "hint"){
			
			addNewLogItem("important", "Hint Code: " + hintCode);
			
		} else {
			
			playerPassword = playerTXT;
			login2Done(); // cutscenes.js
			hintCode = "101";
			section = 1;	
			puzzle = 1;
			
		};
		
	} else if(section == 1) { // AUTHENTICATION 1/10
		if (puzzle == 1){
			if (playerTXT == "601287"){
			
				puzzle1Done();
				hintCode = "102";
				puzzle = 2;
                
                success_sound.play();
			
			} else if (playerTXT == "hint"){
			
				addNewLogItem("important", "Hint Code: " + hintCode);
			
			} else {
				incorrectSub();
			}
		} else if(puzzle == 2) { // AUTHENTICATION 2/10
		
			if(playerTXT == "842431"){ 
			
				puzzle2Done();
				hintCode = "103";
				puzzle = 3;
                
                success_sound.play();
			
			} else if (playerTXT == "hint"){
			
				addNewLogItem("important", "Hint Code: " + hintCode);
			
			} else {
				incorrectSub();
			}
		
		} else if(puzzle == 3) { // AUTHENTICATION 3/10
		
			if(playerTXT == "976142"){
			
				puzzle3Done();
				hintCode = "104";
				puzzle = 4;
                
                success_sound.play();
			
			} else if (playerTXT == "hint"){
			
				addNewLogItem("important", "Hint Code: " + hintCode);
			
			} else {
				incorrectSub();
			}   
		
		} else if(puzzle == 4) { // AUTHENTICATION 4/10
		
			if(playerTXT == "452863"){
			
				puzzle4Done();
				hintCode = "105";
				puzzle = 5;
                
                success_sound.play();
			
			} else if (playerTXT == "hint"){
			
				addNewLogItem("important", "Hint Code: " + hintCode);
			
			} else {
				incorrectSub();
			}   
		
		} else if(puzzle == 5) { // AUTHENTICATION 5/10
		
			if(playerTXT == "203896"){
			
				puzzle5Done();
				hintCode = "106";
				puzzle = 6;
                
                success_sound.play();

			} else if (playerTXT == "hint"){
			
				addNewLogItem("important", "Hint Code: " + hintCode);
			
			} else {

				incorrectSub();
			}	
		} else if(puzzle == 6) { // AUTHENTICATION 6/10
		
			if(playerTXT == "018649"){
			
				puzzle6Done();
				hintCode = "107";
				puzzle = 7;
                
                success_sound.play();
			
			} else if (playerTXT == "hint"){
			
				addNewLogItem("important", "Hint Code: " + hintCode);
			
			} else {

				incorrectSub();
			
			}
		
		} else if(puzzle == 7) { // AUTHENTICATION 7/10 ADDED LATE
		
			if(playerTXT == "502836"){
			
				puzzle16Done();
				hintCode = "108";
				puzzle = 8;
                
                success_sound.play();

			} else if (playerTXT == "hint"){
			
				addNewLogItem("important", "Hint Code: " + hintCode);
			
			} else {

				incorrectSub();
			
			}
		
		} else if(puzzle == 8) { // AUTHENTICATION 8/10 ADDED LATE
		
			if(playerTXT == "163955"){
			
				puzzle17Done();
				hintCode = "109";
				puzzle = 9;
                
                success_sound.play();

			} else if (playerTXT == "hint"){
			
				addNewLogItem("important", "Hint Code: " + hintCode);
			
			} else {

				incorrectSub();
			
			}
		
		} else if(puzzle == 9) { // AUTHENTICATION 9/10 ADDED LATE
		
			if(playerTXT == "590864"){
			
				puzzle18Done();
				hintCode = "110";
				puzzle = 10;
                
                success_sound.play();
			
			} else if (playerTXT == "hint"){
			
				addNewLogItem("important", "Hint Code: " + hintCode);
			
			} else {

				incorrectSub();
			
			}
		
		} else if(puzzle == 10) { // AUTHENTICATION 10/10 MIND READING PUZZLE
		
			if(playerTXT == "483327"){
			
				LoggedIn();
				document.getElementById("txt").maxLength = "100";
				hintCode = "201";
				puzzle = 1;
				section = 2;
                
                success_sound.play();
			
			} else if (playerTXT == "hint"){
			
				addNewLogItem("important", "Hint Code: " + hintCode);
			
			} else {

				incorrectSub();
			
			}
		
		} 
	} else if (section == 2){ // YOU ARE NOW LOGGED IN
		if (playerTXT == "hint"){
			
			addNewLogItem("important", "Hint Code: " + hintCode);
			
		} else if (playerTXT == "https://75896-29742-69504-22231"){ //Encryped URL Example SERIOUSLY?
			ExampleFail();
			// No Hint for this just keep same hint
		} else if( puzzle == 1){
			if (playerTXT == "https://57203-23423-76039-67239"){ // Start Email Alabaster Terminal

				puzzle15Done();
				puzzle = 2;
                
                success_sound.play();
			
			} else {
					decryptFail();
			}
		} else if (puzzle == 2){
			if (playerTXT == alabasterTerminalURL){ // Hack Alabaster terminal for Authenticationcode
			
				puzzle7Done();
				puzzle = 3;
                
                success_sound.play();
			
			} else {
				
				decryptFail();
				
			}
		} else if (puzzle == 3){
			if (playerTXT == "https://12406-13796-93659-37402"){ // First cutscene ENCRYPTED URL
				
				puzzle8Done();
				hintCode = "202";
				puzzle = 4;
                
                success_sound.play();

			} else {
				
				decryptFail();
				
			}
		} else if (puzzle == 4){
			if (playerTXT == "https://40353-36520-23634-27560"){ // Second cutscene ENCRYPTED URL
				
				puzzle9Done();
				hintCode = "203";
				puzzle = 5;
                
                success_sound.play();

			} else {
				
				decryptFail();
				
			}
		} else if (puzzle == 5){
			if (playerTXT == "https://66737-26553-26594-46592"){ // Third cutscene ENCRYPTED URL
				
			puzzle10Done();
			hintCode = "204";
			puzzle = 6;
                
                success_sound.play();

			} else {
				
			decryptFail();
				
			}
		} else if (puzzle == 6){
			if (playerTXT == "https://20693-10782-40621-12479"){ // Fourth cutscene ENCRYPTED URL
				
				puzzle11Done();
				hintCode = "205";
				puzzle = 7;
                
                success_sound.play();
				
			} else {
				
				decryptFail();
				
			}
		}  else if (puzzle == 7){
			if (playerTXT == "https://twitter.com/Anonymo00841943"){
				
			puzzle12Done();
				puzzle = 8;
			//Part of an FileLok Puzzle does not need to change hint
                
                success_sound.play();

			} else {
				
			decryptFail();
				
			}
		}  else if (puzzle == 8){
			if (playerTXT == FileLokPuzzle1En){ //puzzle 2 Shapes 1
			
				FileLokPuzzle1();
				hintCode = "206";
				puzzle = 9;
                
                success_sound.play();

			} else {
				
				decryptFail();
				
			}
		} else if ( puzzle == 9){
			if (playerTXT == FileLokPuzzle2En){ //puzzle 3 Shapes 2
			
				FileLokPuzzle2();
				hintCode = "207";
				puzzle = 10;
                
                success_sound.play();

			} else {
				
				decryptFail();
				
			}
		} else if (puzzle == 10){
			if (playerTXT == FileLokPuzzle3En){ //puzzle 4 Fruit Salad
			FileLokPuzzle3();
			hintCode = "208";
			puzzle = 11;
                
                success_sound.play();

			} else {
				
			decryptFail();
				
			}
		} else if (puzzle == 11){
			if (playerTXT == FileLokPuzzle4En){ //puzzle 5 Colors 2
				
				FileLokPuzzle4();
				hintCode = "209";
				puzzle = 12;
                
                success_sound.play();

			} else {
				
				decryptFail();
				
			}
		} else if (puzzle == 12){
			if (playerTXT == FileLokPuzzle5En){ //puzzle 6 Twitter Hack Poem
				
				FileLokPuzzle5();
				hintCode = "210";
				puzzle = 13;
                
                success_sound.play();

			} else {
				
				decryptFail();
				
			}
		} else if (puzzle == 13){
			if (playerTXT == "https://twitter.com/Ax787556086"){
				
			puzzle14Done();
			puzzle = 14;
			//Part of an FileLok Puzzle does not need to change hint
                
                success_sound.play();

			} else {
				
			decryptFail();
				
			}
		} else if (puzzle == 14){
			if (playerTXT == FileLokPuzzle6En){ //puzzle 7 Helcopter Photo
			
				FileLokPuzzle6();
				hintCode = "211";
				puzzle = 15;
                
                success_sound.play();

			} else {
				
				decryptFail();
				
			}
		} else if (puzzle == 15){
			if (playerTXT == FileLokPuzzle7En){ //puzzle 8 Phone number
			
				FileLokPuzzle7();
				hintCode = "212";
				//Gives you 3124
				//3124 Gives you FileLokPuzzle8En
				puzzle = 16;
                
                success_sound.play();

			} else {
				
				decryptFail();
				
			}
		} else if (puzzle == 16){
			if (playerTXT == FileLokPuzzle8En){ //puzzle 9  Skeleton Key
			
				FileLokPuzzle8();
				hintCode = "213";
				puzzle = 17;
                
                success_sound.play();

			} else {
				
				decryptFail();
				
			}
		} else if (puzzle == 17){
			if (playerTXT == "https://10109-37583-28534-49452"){// Google maps Puzzle
				
			puzzle13Done();
			hintCode = "214";
				puzzle = 18;
                
                success_sound.play();

			} else {	
				decryptFail();	
			}
		} else if (puzzle == 18){
			if (playerTXT == "https://54759-74729-89454-57570"){ // You Are Now Hacked
                
			glitchAnim = setInterval(fadeGlitch, 10000);
			document.getElementById("txt").maxLength = "6";
			encryptedDone = true;
			cutsceneHacked();
			Hacked = true;
			hintCode = "301";
			section = 3;
			puzzle = 1;
                
                success_sound.play();

			} else {
				decryptFail();	
			}
		}
	} else if (section == 3){
		if (puzzle == 1){
		   if (playerTXT == "840253"){
			
				Section6Puzzle1();
				hintCode = "302";
			   puzzle = 2;
               
               success_sound.play();
				
				
			} else {
				incorrectSub();
			}
		} else if (puzzle == 2){
			if (playerTXT == "282837"){

				Section6Puzzle2();
				puzzle = 3;
				hintCode = "303";
                
                success_sound.play();
				

			} else if (playerTXT == "hint"){

				addNewLogItem("important", "Hint Code: " + hintCode);

			} else {
				incorrectSub();
			}
		} else if (puzzle == 3){
			if (playerTXT == "372672"){

				Section6Puzzle3();
				puzzle = 4;
				hintCode = "304";
                
                success_sound.play();

			} else if (playerTXT == "hint"){

				addNewLogItem("important", "Hint Code: " + hintCode);

			} else {
				incorrectSub();
			}
		} else if (puzzle == 4){
			if (playerTXT  == "774093"){

				Section6Puzzle4();
				puzzle = 5;
				hintCode = "305";
                
                success_sound.play();

			} else if (playerTXT == "hint"){
				addNewLogItem("important", "Hint Code: " + hintCode);
			} else {
				incorrectSub();
			}
		} else if (puzzle == 5){
			if (playerTXT == "674931"){

                //More glitches here
                randomTextShift();
                musicShift();
                
				finalCutscene();
				puzzle = 6;
                
                success_sound.play();

			} else if (playerTXT == "hint"){
				addNewLogItem("important", "Hint Code: " + hintCode);
			} else {
				incorrectSub();
			}
	} else if (puzzle == 6){
			playerTXT = "";
			if (playerTXT == ""){
				
				section = 4;
                clearInterval(randomTextShiftInterval);
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
    failure_sound.play();
};