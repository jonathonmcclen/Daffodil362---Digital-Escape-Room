
//Users
var playerTag = "";
var computerTag = "";
var playerUsername = "";
var playerPassword = "";


// PLAYER & COMPUTER SUBMITIONS
var playerTXT = "";

//Player Submition button
const ENTER = 13;
var ENTER_DOWN = false;

var worldMap = document.createElement("img");

var canvas,canvasContext;

window.onload = function(){

	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);

};

function updateGraphics(){

}


function grabSub() {
	playerTXT = document.getElementById("txt").value;
};

function addNewLogItem(user, txt) {
	if(user == "player"){
		
		var btn = document.createElement("h2");
		btn.innerHTML = "D:\\User\\Input> " + txt;
		document.getElementById("log").appendChild(btn);	
		window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
		
	} else if(user == "comp") {
		
		var btn = document.createElement("h2");
		btn.innerHTML = "D:Output> " + txt;
		document.getElementById("log").appendChild(btn);	
		window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
		
	} else if(user == "alabaster") {
		
		var btn = document.createElement("h2");
		btn.innerHTML = "D:\\User\\Alabaster> " + txt;
		document.getElementById("log").appendChild(btn);	
		window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
		
	} else if(user == "") {
		
		var btn = document.createElement("h2");
		btn.innerHTML = txt;
		document.getElementById("log").appendChild(btn);	
		window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
		
	}
};

function clearTxtBox(){
	document.getElementById("txt").value = "";
};

//  PLAYER PRESSED ENTER
function keyPressed(evt) {
//console.log(evt.keyCode);
	if(evt.keyCode == ENTER) {
		ENTER_DOWN = true;
		grabSub();
		addNewLogItem("player",playerTXT);
		checkPlayerInput();
		clearTxtBox();
		console.log('txtbox cleared')
	}
};
// PLAYER RELEASED ENTER
function keyReleased(evt) {
	//console.log(evt.keyCode);
	if(evt.keyCode == ENTER) {
		ENTER_DOWN = false;
	} 
};
