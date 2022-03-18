// create global variable for current puzzle. EMPTY FOR NOW

function checkPlayerInput() {
  //Music
  if (playerTXT.toUpperCase() == "MUSIC") {
    if (music_on) {
      current_music.pause();
      music_on = false;
    } else {
      current_music.play();
      music_on = true;
    }
    return;
  }

  //FOR TESTING... OR CHEATING
  if (playerTXT.toUpperCase() == "TEST") {
    puzzle = 1;
    section = 3;
  }

  //New Hint Function
  if (playerTXT.toUpperCase() == "HINT") {
    addNewLogItem("important", "Hint Code: " + hintCode);
    console.log("Hint " + hintCode);
    return;
  }

  if (playerTXT.toUpperCase() == "LOGIN") {
    path = "Daffodil362";
    startGame();
    return;
  }

  // current puzzle = fetch first puzzle
}

function divider() {
  addNewLogItem(
    "",
    ".........................................................."
  );
}

function incorrectSub() {
  addNewLogItem(
    "comp",
    "Command Submission " + '"' + playerTXT + '"' + " NOT recognized"
  );
  failure_sound.play();
}
