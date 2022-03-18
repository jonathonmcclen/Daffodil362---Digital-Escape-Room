//
//
//
var inputAllowed = true;
const ENTER = 13;
var ENTER_DOWN = false;

window.onload = function () {
  document.addEventListener("keydown", keyPressed);
  document.addEventListener("keyup", keyReleased);
  //create playTimer
};

function grabSub() {
  playerTXT = document.getElementById("txt").value;
}

function clearTxtBox() {
  document.getElementById("txt").value = "";
}

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

function scrollToBottom() {
  window.scrollTo(
    0,
    document.body.scrollHeight || document.documentElement.scrollHeight
  );
}

function addNewLogItem(user, txt, blue = false) {
  if (user == "player") {
    var btn = document.createElement("h2");
    btn.className = "log-item";
    btn.innerHTML = "C:\\User\\Input> " + txt;
    document.getElementById("log").appendChild(btn);
    scrollToBottom();
  } else if (user == "comp") {
    var btn = document.createElement("h2");
    btn.className = "log-item";
    btn.innerHTML = "C: Output> " + txt;
    document.getElementById("log").appendChild(btn);
    scrollToBottom();
  } else if (user == "") {
    var btn = document.createElement("h2");
    btn.className = "log-item";
    btn.innerHTML = txt;
    document.getElementById("log").appendChild(btn);
    scrollToBottom();
  } else if (user == "loading") {
    var btn = document.createElement("h2");
    btn.className = "log-item";
    btn.innerHTML = txt;
    btn.className = "temp";
    btn.id = "temp";
    //myPara.setAttribute("id", "id_you_like");
    document.getElementById("log").appendChild(btn);
    scrollToBottom();
  } else if (user == "important") {
    var btn = document.createElement("h2");
    btn.className = "log-item";
    btn.innerHTML = txt;
    btn.className = "important";
    document.getElementById("log").appendChild(btn);
    scrollToBottom();
  } else if (user == "End") {
    var btn = document.createElement("h2");
    btn.className = "log-item";
    btn.innerHTML = "C:\\User\\Input> " + txt;
    btn.className = "End";
    document.getElementById("log").appendChild(btn);
    scrollToBottom();
  }
  if (blue) btn.style.color = "#3B7ECF";
}
