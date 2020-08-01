//Sounds
var button_beep_src = "https://cia-9d562a98.s3.us-west-1.amazonaws.com/GameAssets/SoundFX/Daffodil362KeyPress.wav";
var main_music_src = 'https://cia-9d562a98.s3.us-west-1.amazonaws.com/GameAssets/SoundFX/Daffodil362MainMusic.wav';
var intense_music_src = "https://cia-9d562a98.s3.us-west-1.amazonaws.com/GameAssets/SoundFX/Daffodil362Reeboot.wav";
var alabaster_music_src = "sounds/bensound-evolution.mp3";

var main_music = document.createElement('audio');
main_music.src = main_music_src;
main_music.loop = true;

var intense_music = document.createElement('audio');
intense_music.src = intense_music_src;
intense_music.loop = true;

var alabaster_music = document.createElement('audio');
alabaster_music.src = alabaster_music_src;
alabaster_music.loop = true;

var music_on = true;
var current_music = main_music;


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

function addNewLogItem(user, txt, blue=false) {
	if(user == "player"){
		
		var btn = document.createElement("h2");
        btn.className = "log-item";
		btn.innerHTML = "C:\\User\\Input> " + txt;
		document.getElementById("log").appendChild(btn);	
		window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
		
	} else if(user == "comp") {
		
		var btn = document.createElement("h2");
        btn.className = "log-item";
		btn.innerHTML = "C: Output> " + txt;
		document.getElementById("log").appendChild(btn);	
		window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
		
	} else if(user == "") {
		
		var btn = document.createElement("h2");
        btn.className = "log-item";
		btn.innerHTML = txt;
		document.getElementById("log").appendChild(btn);	
		window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
		
	} else if(user == "loading") {
		
		var btn = document.createElement("h2");
        btn.className = "log-item";
		btn.innerHTML = txt;
		btn.className = "temp";
		btn.id = "temp";
		//myPara.setAttribute("id", "id_you_like");
		document.getElementById("log").appendChild(btn);	
		window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
		
	} else if(user == "important") {
		
		var btn = document.createElement("h2");
        btn.className = "log-item";
		btn.innerHTML = txt;
		btn.className = "important";
		document.getElementById("log").appendChild(btn);	
		window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
		
	} else if(user == "End") {
		
		var btn = document.createElement("h2");
        btn.className = "log-item";
		btn.innerHTML = "C:\\User\\Input> " + txt;
		btn.className = "End";
		document.getElementById("log").appendChild(btn);	
		window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
	}
    if (blue)
        btn.style.color = 'blue';
};

function clearTxtBox(){
	document.getElementById("txt").value = "";
};

//  PLAYER PRESSED ENTER
function keyPressed(evt) {
//console.log(evt.keyCode);
    
    let button_beep = document.createElement('audio');
    button_beep.src = button_beep_src;
    button_beep.play();

    
	if(evt.keyCode == ENTER) {
		ENTER_DOWN = true;
		grabSub();
        if (section != 3 || puzzle != 6)
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


//Moving button

var URL = "http://example.com";

function doMovingButton() {
    var moving_button = document.createElement('button');
    document.body.appendChild(moving_button);
    moving_button.style.position = "absolute";
    moving_button.style.top = "50%";
    moving_button.style.right = "50%";
    moving_button.style.width = "60px";
    moving_button.style.height = "40px";
    moving_button.innerHTML = "Test Button";
    
    var times_hovered = 0;
    
    moving_button.onmouseover = function() {
        
        if (times_hovered < 4) {
            let new_x = 200 + Math.floor(Math.random() * (window.innerWidth - 200));
            let new_y = 200 + Math.floor(Math.random() * (window.innerHeight - 200));
            moving_button.style.top = new_y + "px";
            moving_button.style.right = new_x + "px";
            times_hovered++;
        }
        else if (times_hovered == 4) {
            moving_button.onclick = function() {
                window.location = URL;
            }
        }
    }
    
}