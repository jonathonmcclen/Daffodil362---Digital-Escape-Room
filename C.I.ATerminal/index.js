//
//
//
// START UP
window.onload = function () {
  document.addEventListener("keydown", keyPressed);
  document.addEventListener("keyup", keyReleased);
  //create playTimer
};

// HANDLE ENTER KEY PRESS
const ENTER = 13;
var ENTER_DOWN = false;
var inputAllowed = true;

function keyPressed(evt) {
  let button_beep = document.createElement("audio");
  button_beep.src = button_beep_src;
  button_beep.play();

  if (inputAllowed) {
    if (evt.keyCode == ENTER) {
      ENTER_DOWN = true;
      grabSub();
      if (section != 3 || puzzle != 6) addNewLogItem("player", playerTXT);
      checkPlayerInput();
      clearTxtBox();
    }
  }
}

function keyReleased(evt) {
  if (evt.keyCode == ENTER) {
    ENTER_DOWN = false;
  }
}

function grabSub() {
  playerTXT = document.getElementById("txt").value;
}

function clearTxtBox() {
  document.getElementById("txt").value = "";
}

function scrollToBottom() {
  window.scrollTo(
    0,
    document.body.scrollHeight || document.documentElement.scrollHeight
  );
}
