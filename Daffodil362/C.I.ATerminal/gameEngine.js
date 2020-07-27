
//Users
var playerTag = "";
var computerTag = "";
var playerUsername = "";
var playerPassword = "";
var Hacked = false;
var Time = 0;


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
	
	//var framerPerSecond = 0.50
	
	setInterval(terminalAnim, 7000);
	setInterval(AddMinute, 60000);
	

};

function AddMinute(){
	Time += 1;
}

function updateGraphics(){

}

function grabSub() {
	playerTXT = document.getElementById("txt").value;
};

function addNewLogItem(user, txt) {
	if(user == "player"){
		
		var btn = document.createElement("h2");
		btn.innerHTML = "C:\\User\\Input> " + txt;
		document.getElementById("log").appendChild(btn);	
		window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
		
	} else if(user == "comp") {
		
		var btn = document.createElement("h2");
		btn.innerHTML = "C: Output> " + txt;
		document.getElementById("log").appendChild(btn);	
		window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
		
	} else if(user == "") {
		
		var btn = document.createElement("h2");
		btn.innerHTML = txt;
		document.getElementById("log").appendChild(btn);	
		window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
		
	} else if(user == "loading") {
		
		var btn = document.createElement("h2");
		btn.innerHTML = txt;
		btn.className = "temp";
		btn.id = "temp";
		//myPara.setAttribute("id", "id_you_like");
		document.getElementById("log").appendChild(btn);	
		window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
		
	} else if(user == "important") {
		
		var btn = document.createElement("h2");
		btn.innerHTML = txt;
		btn.className = "important";
		document.getElementById("log").appendChild(btn);	
		window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
		
	} else if(user == "End") {
		
		var btn = document.createElement("h2");
		btn.innerHTML = "C:\\User\\Input> " + txt;
		btn.className = "End";
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
	}
};
// PLAYER RELEASED ENTER
function keyReleased(evt) {
	//console.log(evt.keyCode);
	if(evt.keyCode == ENTER) {
		ENTER_DOWN = false;
	} 
};
