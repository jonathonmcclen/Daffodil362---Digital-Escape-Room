//
//
//
// cutscenes want an array of lines

cutscene(scene, speed = 0) {
  inputAllowed = false;
  let length = scene.length;

  for (let i = 0; i < length; i++) {
    //creates html block with createHTMLBlock(scene[i][0], scene[i][1])

    function line() {
      //instead of below check if animation is necisary and render block created above in DOM
      addNewLogItem(scene[i][0], this.puzzleArry[i][1]);
      // ready for next line = true
    }

    setTimeout(line, speed * i + scene[i][2]);
  }
  Ready_For_Input();
}

function startGame() {
  inputAllowed = false;

  function line1() {
    addNewLogItem(
      "comp",
      "Command Submission " + '"' + playerTXT + '"' + " recognized"
    );
  }

  function line2() {
    addNewLogItem("comp", "Please enter your Username");
  }

  function line3() {
    divider();
    Ready_For_Input();
  }

  setTimeout(line1, 2000);
  setTimeout(line2, 4000);
  setTimeout(line3, 6000);
}

//Section 1/ INTRO
function login1Done() {
  inputAllowed = false;

  function line1() {
    addNewLogItem("comp", "User " + '"' + playerUsername + '"' + " recognized");
  }

  function line2() {
    addNewLogItem("comp", "Welcome " + playerUsername);
  }

  function line3() {
    addNewLogItem("comp", "Please enter your password");
    Ready_For_Input();
  }

  setTimeout(line1, 2000);
  setTimeout(line2, 4000);
  setTimeout(line3, 6000);
}

function login2Done() {
  inputAllowed = false;

  function line1() {
    addNewLogItem("comp", "Command Entry Recognized");
  }

  function line2() {
    typingAnim("Logging in", 2000, "FAILED", true);
  }

  function line3() {
    divider();
  }

  setTimeout(line1, 2000);
  setTimeout(line2, 4000);
  setTimeout(line3, 6000);

  function line4() {
    playFailSound(1000, 3);
    addNewLogItem("comp", "ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR");
  }

  function line5() {
    addNewLogItem("comp", "Could NOT verify identity");
  }

  function line6() {
    addNewLogItem("comp", "Please complete authenticate to gain access.");
  }

  function line7() {
    divider();
  }

  function line8() {
    addNewLogItem("comp", "AUTHENTICATION 1/10");
  }

  function line9() {
    addNewLogItem("comp", "287601, 876012, 760128, _ _ _ _ _ _");
  }

  function line10() {
    addNewLogItem("comp", "Complete The Sequence Then Press ENTER");
    Ready_For_Input();
  }

  setTimeout(line4, 8000);
  setTimeout(line5, 10000);
  setTimeout(line6, 12000);
  setTimeout(line7, 14000);
  setTimeout(line8, 16000);
  setTimeout(line9, 18000);
  setTimeout(line10, 20000);
}

//Section 2
function puzzle1Done() {
  inputAllowed = false;

  Success();

  //Animation starts at 5000ms

  //842431

  function line1() {
    addNewLogItem("comp", "AUTHENTICATION 2/10");
  }

  function line2() {
    addNewLogItem("comp", "431842, 243184, 424318, _ _ _ _ _ _");
  }

  function line3() {
    addNewLogItem("comp", "Complete The Sequence Then Press ENTER");
    Ready_For_Input();
  }

  setTimeout(line1, 7000);
  setTimeout(line2, 9000);
  setTimeout(line3, 11000);
}

function puzzle2Done() {
  inputAllowed = false;

  Success();

  //Animation starts at 5000ms

  function line4() {
    addNewLogItem("comp", "AUTHENTICATION 3/10");
  }

  function line5() {
    addNewLogItem("comp", "CODE OUT OF ORDER");
  }

  function line6() {
    addNewLogItem("comp", "5. InputFive(5)**REFERENCE#…4…END");
  }

  function line7() {
    addNewLogItem("comp", "3. InputThree(3)**REFERENCE#…6…END");
  }

  function line8() {
    addNewLogItem("comp", "1. InputOne(1)**REFERENCE#…9…END");
  }

  function line9() {
    addNewLogItem("comp", "6. InputSix(6)**REFERENCE#…2…END");
  }

  function line10() {
    addNewLogItem("comp", "2. InputTwo(2)**REFERENCE#…7…END");
  }

  function line11() {
    addNewLogItem("comp", "4. InputFour(4)**REFERENCEE#…1…END");
  }

  function line12() {
    addNewLogItem("comp", "TYPE REFERENCE NUMBERS IN ORDER THEN PRESS ENTER");
    Ready_For_Input();
  }

  setTimeout(line4, 7000);
  setTimeout(line5, 9000);
  setTimeout(line6, 11000);
  setTimeout(line7, 11500);
  setTimeout(line8, 12000);
  setTimeout(line9, 12500);
  setTimeout(line10, 13000);
  setTimeout(line11, 13500);
  setTimeout(line12, 14500);
}
function puzzle3Done() {
  inputAllowed = false;

  Success();

  //Animation starts at 5000ms

  //452863

  function line1() {
    addNewLogItem("comp", "AUTHENTICATION 4/10");
  }

  function line2() {
    addNewLogItem("comp", "CODE OUT OF ORDER");
  }

  function line3() {
    addNewLogItem("comp", "4. InputFour(4)**REFERENCE#…8…END");
  }

  function line4() {
    addNewLogItem("comp", "1. InputOne(1)**REFERENCE#…4…END");
  }

  function line5() {
    addNewLogItem("comp", "3. InputThree(3)**REFERENCE#…2…END");
  }

  function line6() {
    addNewLogItem("comp", "6. InputSix(6)**REFERENCE#…3…END");
  }

  function line7() {
    addNewLogItem("comp", "5. InputFive(5)**REFERENCE#…6…END");
  }

  function line8() {
    addNewLogItem("comp", "2. InputTwo(2)**REFERENCE#…5…END");
  }

  function line12() {
    addNewLogItem("comp", "TYPE REFERENCE NUMBERS IN ORDER THEN PRESS ENTER");
    Ready_For_Input();
  }

  setTimeout(line1, 7000);
  setTimeout(line2, 9000);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
  setTimeout(line8, 12500);
  setTimeout(line12, 14500);
}

function puzzle4Done() {
  inputAllowed = false;

  Success();

  //Animation starts at 5000ms

  //203896

  function line1() {
    addNewLogItem("comp", "AUTHENTICATION 5/10");
  }

  function line2() {
    addNewLogItem(
      "comp",
      "LogLine#1>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_2___"
    );
  }

  function line3() {
    addNewLogItem(
      "comp",
      "LogLine#2>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_0___"
    );
  }

  function line4() {
    addNewLogItem(
      "comp",
      "LogLine#3>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENEC#_3___"
    );
  }

  function line5() {
    addNewLogItem(
      "comp",
      "LogLine#4>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_8___"
    );
  }

  function line6() {
    addNewLogItem(
      "comp",
      "LogLine#5>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_9___"
    );
  }

  function line7() {
    addNewLogItem(
      "comp",
      "LogLine#6>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_6___"
    );
  }

  function line8() {
    addNewLogItem(
      "comp",
      "LOG LINES TOO LONG TYPE REFRENCE NUMBERS THEN PRESS ENTER"
    );
    Ready_For_Input();
  }

  setTimeout(line1, 7000);
  setTimeout(line2, 9000);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
  setTimeout(line8, 12500);
}

function puzzle5Done() {
  inputAllowed = false;

  Success();

  //Animation starts at 5000ms

  //018649

  function line1() {
    addNewLogItem("comp", "AUTHENTICATION 6/10");
  }

  function line2() {
    addNewLogItem(
      "comp",
      "LogLine#6>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_9___"
    );
  }

  function line3() {
    addNewLogItem(
      "comp",
      "LogLine#5>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_4___"
    );
  }

  function line4() {
    addNewLogItem(
      "comp",
      "LogLine#4>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_6___"
    );
  }

  function line5() {
    addNewLogItem(
      "comp",
      "LogLine#3>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_8___"
    );
  }

  function line6() {
    addNewLogItem(
      "comp",
      "LogLine#2>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_1___"
    );
  }

  function line7() {
    addNewLogItem(
      "comp",
      "LogLine#1>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_0___"
    );
  }

  function line8() {
    addNewLogItem(
      "comp",
      "LOG LINES TOO LONG TYPE REFRENCE NUMBERS THEN PRESS ENTER"
    );
    Ready_For_Input();
  }

  setTimeout(line1, 7000);
  setTimeout(line2, 9000);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
  setTimeout(line8, 12500);
}

function puzzle6Done() {
  inputAllowed = false;
  Success();

  //Animation starts at 5000ms

  function line1() {
    addNewLogItem("comp", "AUTHENTICATION 7/10");
  }

  function line2() {
    addNewLogItem(
      "comp",
      "LogLine#1>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>____REFERENCE#_5___<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line3() {
    addNewLogItem(
      "comp",
      "LogLine#2>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_0___<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line4() {
    addNewLogItem(
      "comp",
      "LogLine#3>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_2___<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line5() {
    addNewLogItem(
      "comp",
      "LogLine#4>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENECE#_8___<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line6() {
    addNewLogItem(
      "comp",
      "LogLine#5>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_3___"
    );
  }

  function line7() {
    addNewLogItem(
      "comp",
      "LogLine#6>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_6___"
    );
  }

  function line8() {
    addNewLogItem(
      "comp",
      "LOG LINES TOO LONG TYPE REFERENCE NUMBERS THEN PRESS ENTER"
    );
    Ready_For_Input();
  }

  setTimeout(line1, 7000);
  setTimeout(line2, 9000);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
  setTimeout(line8, 12500);
}

function puzzle16Done() {
  inputAllowed = false;

  Success();

  //Animation starts at 5000ms

  //203896

  function line1() {
    addNewLogItem("comp", "AUTHENTICATION 8/10");
  }

  function line2() {
    addNewLogItem(
      "comp",
      "LogLine#1>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_1___<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line3() {
    addNewLogItem(
      "comp",
      "LogLine#4>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_9___<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line4() {
    addNewLogItem(
      "comp",
      "LogLine#5>>>>>>>>>>>>>>>>>>>___REFERENC#_5___>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___CODE_TOO_LONG__"
    );
  }

  function line5() {
    addNewLogItem(
      "comp",
      "LogLine#3>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>____REFERENCE#_3___<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line6() {
    addNewLogItem(
      "comp",
      "LogLine#2>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_6___<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line7() {
    addNewLogItem(
      "comp",
      "LogLine#6>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_5___"
    );
  }

  function line8() {
    addNewLogItem(
      "comp",
      "LOG LINES TOO LONG TYPE REFRENCE NUMBERS THEN PRESS ENTER"
    );
    Ready_For_Input();
  }

  setTimeout(line1, 7000);
  setTimeout(line2, 9000);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
  setTimeout(line8, 12500);
}

function puzzle17Done() {
  inputAllowed = false;

  Success();

  //Animation starts at 5000ms

  //203896

  function line1() {
    addNewLogItem("comp", "AUTHENTICATION 9/10");
  }

  function line2() {
    addNewLogItem(
      "comp",
      ">>>>>>>>>>>>>>>>>>>___REFERENCE#_9___>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___CODE_TOO_LONG__LogLine#2"
    );
  }

  function line3() {
    addNewLogItem(
      "comp",
      ">>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_8___LogLine#4"
    );
  }

  function line4() {
    addNewLogItem(
      "comp",
      ">>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>____REFERENCE#_0___<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______LogLine#3"
    );
  }

  function line5() {
    addNewLogItem(
      "comp",
      ">>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERAENC#_4___<<<<<<<<<<<<<<<<<<<______Too_Far_______LogLine#6"
    );
  }

  function line6() {
    addNewLogItem(
      "comp",
      ">>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_6___<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______LogLine#5"
    );
  }

  function line7() {
    addNewLogItem(
      "comp",
      ">>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REREFERENCE#_5___<<<<<<<<<<<<<<<<<<<______Too_Far_______LogLine#1"
    );
  }

  function line8() {
    addNewLogItem(
      "comp",
      "LOG LINES TOO LONG TYPE REFERENCE NUMBERS THEN PRESS ENTER"
    );
    Ready_For_Input();
  }

  setTimeout(line1, 7000);
  setTimeout(line2, 9000);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
  setTimeout(line8, 12500);
}

function puzzle18Done() {
  inputAllowed = false;
  Success();

  //Animation starts at 5000ms

  //203896

  function line1() {
    addNewLogItem("comp", "AUTHENTICATION 10/10");
  }

  function line2() {
    addNewLogItem("comp", "Answer : 483 _ _ _ ");
  }

  function line3() {
    addNewLogItem(
      "comp",
      "Beaming last three digits to your brain implant V1.0 TM"
    );
  }

  function line4() {
    addNewLogItem("comp", "Retreival instructions:");
  }

  function line5() {
    addNewLogItem("comp", "Pick a number between 1-10");
  }

  function line6() {
    addNewLogItem("comp", "Add 30");
  }

  function line7() {
    addNewLogItem("comp", "Subtract 10");
  }

  function line8() {
    addNewLogItem("comp", "Add 60");
  }

  function line9() {
    addNewLogItem("comp", "Subtract the first number you thought of");
  }

  function line10() {
    addNewLogItem("comp", "Multiply 2");
  }

  function line11() {
    addNewLogItem("comp", "Multiply by 2 Again");
  }

  function line12() {
    addNewLogItem("comp", "Add 7");
    Ready_For_Input();
  }

  setTimeout(line1, 7000);
  setTimeout(line2, 9000);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
  setTimeout(line8, 12500);
  setTimeout(line9, 13000);
  setTimeout(line10, 13500);
  setTimeout(line11, 14000);
  setTimeout(line12, 14500);
}

// SECTION 3
function LoggedIn() {
  inputAllowed = false;
  Success();

  //Animation starts at 5000ms

  function line1() {
    addNewLogItem("comp", "Login Successful for user " + playerUsername);
  }

  function line2() {
    addNewLogItem(
      "comp",
      "Your C.I.A terminal is now capable of Hacking and Decrypting URLs"
    );
  }

  function line3() {
    addNewLogItem("comp", "ENCRYPTED URLs look like this:");
  }

  function line4() {
    addNewLogItem("comp", "*** EXAMPLE ****");
    showURL("https://75896-29742-69504-22231");
  }

  function line5() {
    addNewLogItem(
      "comp",
      "All DECRYPTED URls can be used in a browser to visit web pages."
    );
  }

  function line6() {
    addNewLogItem(
      "comp",
      "ENCRYPTED URL's MUST be DECRYPTED before pasting into browser address window."
    );
  }

  function line7() {
    divider();
  }

  function line8() {
    addNewLogItem("comp", "ENTER URL TO HACK OR DECYRYPT:");
  }

  function line9() {
    divider();
    Ready_For_Input();
  }

  setTimeout(line1, 7000);
  setTimeout(line2, 9000);
  setTimeout(line3, 11000);
  setTimeout(line4, 13000);
  setTimeout(line5, 15000);
  setTimeout(line6, 13000);
  setTimeout(line7, 15000);
  setTimeout(line8, 15500);
  setTimeout(line9, 16000);
}

function puzzle7Done() {
  inputAllowed = false;

  hack("loding1");

  //Animation starst at 5000ms

  function line1() {
    addNewLogItem("comp", "COMPLETE");
    success_sound.play();
  }

  function line2() {
    divider();
  }

  function line3() {
    addNewLogItem("comp", "Authentication Code: 3512076170");
  }

  function line4() {
    divider();
  }

  function line5() {
    addNewLogItem("comp", "ENTER URL TO HACK OR DECYRYPT:");
  }

  function line6() {
    divider();
    Ready_For_Input();
  }

  setTimeout(line1, 5000);
  setTimeout(line2, 6000);
  setTimeout(line3, 7000);
  setTimeout(line4, 7100);
  setTimeout(line5, 8000);
  setTimeout(line6, 8500);
}

function puzzle8Done() {
  inputAllowed = false;

  decrypt("decrypt1");

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "COMPLETE");
    success_sound.play();
  }

  function line2() {
    divider();
  }

  function line3() {
    addNewLogItem("comp", "SERVER IP: 19.087.125");
  }

  function line4() {
    addNewLogItem("comp", "Authentication Code: 3259241426");
  }

  function line5() {
    divider();
  }

  function line6() {
    addNewLogItem("comp", "ENTER URL TO HACK OR DECYRYPT:");
  }

  function line7() {
    divider();
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
}

function puzzle9Done() {
  inputAllowed = false;

  decrypt("decrypt2");

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "COMPLETE");
    success_sound.play();
  }

  function line2() {
    divider();
  }

  function line3() {
    addNewLogItem("comp", "SERVER IP: 82.607.459");
  }

  function line4() {
    addNewLogItem("comp", "Authentication Code: That would be too easy :)");
  }

  function line5() {
    addNewLogItem("comp", "DECRYPTED URL: "); // 6502735770
    showURL(URLPuzzleOne);
  }

  function line6() {
    addNewLogItem("comp", "DECRYPTED URL's can be pasted into your browser");
  }

  function line7() {
    divider();
  }

  function line8() {
    addNewLogItem("comp", "ENTER URL TO HACK OR DECYRYPT:");
  }

  function line9() {
    divider();
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
  setTimeout(line8, 12500);
  setTimeout(line9, 13000);
}

function puzzle10Done() {
  inputAllowed = false;

  decrypt("decrypt3");

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "COMPLETE");
    success_sound.play();
  }

  function line2() {
    divider();
  }

  function line3() {
    addNewLogItem("comp", "SERVER IP: 62.746.271");
  }

  function line4() {
    addNewLogItem("comp", "Passcode: 651697597");
  }

  function line5() {
    addNewLogItem("comp", "DECRYPTED URL: "); //9235613951
    showURL(URLPuzzleTwo);
  }

  function line6() {
    addNewLogItem("comp", "DECRYPTED URL's can be pasted into your browser.");
  }

  function line7() {
    divider();
  }

  function line8() {
    addNewLogItem("comp", "ENTER URL TO HACK OR DECRYPT");
  }

  function line9() {
    divider();
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
  setTimeout(line8, 12500);
  setTimeout(line9, 13000);
}

function puzzle11Done() {
  inputAllowed = false;

  decrypt("decrypt4");

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "COMPLETE");
    success_sound.play();
  }

  function line2() {
    divider();
  }

  function line3() {
    addNewLogItem("comp", "DECRYPTED URL:");
    showURL("https://twitter.com/Anonymo00841943");
  }

  function line4() {
    addNewLogItem("comp", "This URL is hackable,");
  }

  function line5() {
    addNewLogItem("comp", "DECRYPTED URL's can be pasted into your browser");
  }

  function line6() {
    divider();
  }

  function line7() {
    addNewLogItem("comp", "ENTER URL TO HACK OR DECYRYPT");
  }

  function line8() {
    divider();
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
  setTimeout(line8, 12500);
}

function puzzle12Done() {
  inputAllowed = false;

  hack("hack4");

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "COMPLETE");
    success_sound.play();
  }

  function line2() {
    divider();
  }

  function line3() {
    addNewLogItem("comp", "Message1> One blue ball bounces.");
  }

  function line4() {
    addNewLogItem("comp", "Message2> The red desk has four legs.");
  }

  function line5() {
    addNewLogItem("comp", "Message3> I have nothing that is purple.");
  }

  function line6() {
    addNewLogItem("comp", "Message4> A girl has green eyes.");
  }

  function line7() {
    addNewLogItem("comp", "Message5> A yellow spider crawls.");
  }

  function line8() {
    addNewLogItem("comp", "Message6> Three hard boiled eggs.");
  }

  function line9() {
    addNewLogItem("comp", "Message7> Five oranges in a fruit bowl.");
  }

  function line10() {
    addNewLogItem(
      "comp",
      "Message8> Six grains of sand remain in the hour glass."
    );
  }

  function line11() {
    addNewLogItem("comp", "Message9> Seven burnt matches.");
  }

  function line12() {
    addNewLogItem("comp", "Message10> Nine peices of silver.");
  }

  function line14() {
    addNewLogItem("important", "CHECK YOUR EMAIL.");
  }

  function line15() {
    addNewLogItem("important", "IF YOU DIDNT RECIEVE AN EMAIL, VISIT:");
  }

  function line16() {
    //addNewLogItem("important", "https://daffodil362.com/Email-2");
    showURL("https://escroomgames.com/Games/Daffodil362/Email-2");
  }

  function line17() {
    divider();
  }

  function line18() {
    addNewLogItem("comp", "ENTER URL TO HACK OR DECRYPT:");
  }

  function line19() {
    divider();
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
  setTimeout(line8, 12500);
  setTimeout(line9, 13000);
  setTimeout(line10, 13500);
  setTimeout(line11, 14000);
  setTimeout(line12, 14500);
  setTimeout(line14, 15000);
  setTimeout(line15, 15500);
  setTimeout(line16, 16000);
  setTimeout(line17, 16500);
  setTimeout(line18, 17000);
  setTimeout(line19, 17500);
}
function puzzle13Done() {
  inputAllowed = false;

  decrypt("decrypt5");

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "COMPLETE");
    success_sound.play();
  }

  function line2() {
    divider();
  }

  function line3() {
    addNewLogItem("comp", "Decrypted URL: ");
    showURL(URLPuzzleFive);
  }

  function line4() {
    divider();
  }

  function line5() {
    addNewLogItem("comp", "ENTER URL TO HACK OR DECRYPT");
  }

  function line6() {
    divider();
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
}

function puzzle14Done() {
  inputAllowed = false;

  hack("hack4");

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "COMPLETE");
    success_sound.play();
  }

  function line2() {
    divider();
  }

  function line3() {
    addNewLogItem("comp", "Message1> FileLok Code: 6597");
  }

  function line4() {
    addNewLogItem("comp", "Message2> @Ax7> I forgot my username again!");
  }

  function line5() {
    addNewLogItem(
      "comp",
      "Message3> @Anonymous5> Seriously? Here, I reset it..."
    );
  }

  function line6() {
    addNewLogItem("comp", "Message4> @Anonymous5> Username: DontForgetAgain");
  }

  function line7() {
    divider();
  }

  function line8() {
    addNewLogItem("comp", "ENTER URL TO HACK OR DECRYPT");
  }

  function line9() {
    divider();
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
  setTimeout(line8, 12500);
  setTimeout(line9, 13000);
}
function puzzle15Done() {
  inputAllowed = false;

  decrypt("decrypt6");

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "COMPLETE");
    success_sound.play();
  }

  function line2() {
    divider();
  }

  function line3() {
    addNewLogItem("comp", "Decrypted URL: ");
    showURL(alabasterTerminalURL);
  }

  function line4() {
    addNewLogItem("comp", "Decrypted URLs can be pasted into your browser.");
  }

  function line5() {
    addNewLogItem("comp", "Some Decrypted URLs can be Hacked.");
  }

  function line6() {
    addNewLogItem("comp", "This URL IS hackable.");
  }

  function line7() {
    divider();
  }

  function line8() {
    addNewLogItem("comp", "ENTER URL TO HACK OR DECRYPT:");
  }

  function line9() {
    divider();
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
  setTimeout(line8, 12500);
  setTimeout(line9, 13000);
}

function ExampleFail() {
  inputAllowed = false;
  decrypt("decrypt7");

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "Wait...");
  }

  function line2() {
    addNewLogItem("comp", "This is the EXAMPLE");
  }

  function line3() {
    addNewLogItem("comp", "VERY FUNNY, Mr. Funny Guy");
  }

  function line4() {
    divider();
  }

  function line5() {
    addNewLogItem(
      "comp",
      "ENTER " + '"' + "A REAL" + '"' + " URL TO HACK OR DECRYPT"
    );
  }

  function line6() {
    divider();
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
}

function TwitterFailSafe() {
  inputAllowed = false;

  function line1() {
    addNewLogItem("comp", "ERROR");
  }

  function line2() {
    addNewLogItem("comp", "STEP SKIPPED");
  }

  function line3() {
    addNewLogItem("comp", "Re-Read The Riddle");
  }

  function line4() {
    addNewLogItem("comp", "See if you can HACK IT");
  }

  function line5() {
    divider();
  }

  function line6() {
    addNewLogItem("comp", "ENTER URL TO HACK OR DECRYPT:");
  }

  function line7() {
    divider();
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
}

function cutsceneHacked() {
  inputAllowed = false;
  decrypt("decrypt8");
  flicker();
  //Animation starst at 9000ms

  function line1() {
    playFailSound(1800, 3);
    addNewLogItem(
      "comp",
      "ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR "
    );
  }

  function line2() {
    addNewLogItem("comp", "CRITICAL ERROR");
  }

  function line3() {
    addNewLogItem("comp", "ERROR 1/10");
  }

  function line4() {
    addNewLogItem("comp", "COMPLETE THE SEQUENCE:");
  }

  function line5() {
    addNewLogItem(
      "comp",
      "253 Yellow 40, 0253 Yellow 4, 40253 Yellow, _ _ _ _ _ _"
    ); //840253
  }

  function line6() {
    divider();
  }

  function line7() {
    addNewLogItem("comp", "Input solution then press ENTER");
  }

  function line8() {
    divider();
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
  setTimeout(line8, 12500);
}

//SECTION 4 WAS FILE LOK AND TWITTER HACKS

function FileLokPuzzle1() {
  inputAllowed = false;
  decrypt("decrypt9");

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "COMPLETE");
    success_sound.play();
  }

  function line2() {
    divider();
  }

  function line3() {
    addNewLogItem("comp", "Decrypted URL: ");
    showURL(FileLokPuzzle1De);
  }

  function line4() {
    addNewLogItem("comp", "Decrypted URLss can be pasted into your browser.");
  }

  function line5() {
    divider();
  }

  function line6() {
    addNewLogItem("comp", "ENTER URL TO HACK OR DECRYPT");
  }

  function line7() {
    divider();
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
}

function FileLokPuzzle2() {
  inputAllowed = false;
  decrypt("decrypt10");

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "COMPLETE");
    success_sound.play();
  }

  function line2() {
    divider();
  }

  function line3() {
    addNewLogItem("comp", "Decrypted URL: ");
    showURL(FileLokPuzzle2De);
  }

  function line4() {
    addNewLogItem("comp", "Decrypted URL's can be pasted into your browser.");
  }

  function line5() {
    divider();
  }

  function line6() {
    addNewLogItem("comp", "ENTER URL TO HACK OR DECRYPT");
  }

  function line7() {
    divider();
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
}

function FileLokPuzzle3() {
  inputAllowed = false;
  decrypt("decrypt11");

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "COMPLETE");
    success_sound.play();
  }

  function line2() {
    divider();
  }

  function line3() {
    addNewLogItem("comp", "Decrypted URL: ");
    showURL(FileLokPuzzle3De);
  }

  function line4() {
    addNewLogItem("comp", "Decrypted URLs can be pasted into your browser.");
  }

  function line5() {
    divider();
  }

  function line6() {
    addNewLogItem("comp", "ENTER URL TO HACK OR DECRYPT");
  }

  function line7() {
    divider();
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
}

function FileLokPuzzle4() {
  inputAllowed = false;
  decrypt("decrypt12");

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "COMPLETE");
    success_sound.play();
  }

  function line2() {
    divider();
  }

  function line3() {
    addNewLogItem("comp", "Decrypted URL: ");
    showURL(FileLokPuzzle4De);
  }

  function line4() {
    addNewLogItem("comp", "Decrypted URLs can be pasted into your browser.");
  }

  function line5() {
    divider();
  }

  function line6() {
    addNewLogItem("comp", "ENTER URL TO HACK OR DECRYPT:");
  }

  function line7() {
    divider();
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
}

function FileLokPuzzle5() {
  inputAllowed = false;
  decrypt("decrypt13");

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "COMPLETE");
    success_sound.play();
  }

  function line2() {
    divider();
  }

  function line3() {
    addNewLogItem("comp", "Decrypted URL: ");
    showURL(FileLokPuzzle5De);
  }

  function line4() {
    addNewLogItem("comp", "Decrypted URLs can be pasted into your browser.");
  }

  function line5() {
    divider();
  }

  function line6() {
    addNewLogItem("comp", "ENTER URL TO HACK OR DECRYPT");
  }

  function line7() {
    divider();
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
}

function FileLokPuzzle6() {
  inputAllowed = false;
  decrypt("decrypt14");

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "COMPLETE");
    success_sound.play();
  }

  function line2() {
    divider();
  }

  function line3() {
    addNewLogItem("comp", "Decrypted URL: ");
    showURL(FileLokPuzzle6De);
  }

  function line4() {
    addNewLogItem("comp", "Decrypted URLs can be pasted into your browser.");
  }

  function line5() {
    divider();
  }

  function line6() {
    addNewLogItem("comp", "ENTER URL TO HACK OR DECRYPT");
  }

  function line7() {
    divider();
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
}

function FileLokPuzzle7() {
  inputAllowed = false;
  decrypt("decrypt15");

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "COMPLETE");
    success_sound.play();
  }

  function line2() {
    divider();
  }

  function line3() {
    addNewLogItem("comp", "Decrypted URL: ");
    showURL(FileLokPuzzle7De);
  }

  function line4() {
    addNewLogItem("comp", "Decrypted URLs can be pasted into your browser.");
  }

  function line5() {
    divider();
  }

  function line6() {
    addNewLogItem("comp", "ENTER URL TO HACK OR DECRYPT:");
  }

  function line7() {
    divider();
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
}

function FileLokPuzzle8() {
  inputAllowed = false;
  decrypt("decrypt16");

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "COMPLETE");
    success_sound.play();
  }

  function line2() {
    divider();
  }

  function line3() {
    addNewLogItem("comp", "Decrypted URL: ");
    showURL(FileLokPuzzle8De);
  }

  function line4() {
    addNewLogItem("comp", "Decrypted URLs can be pasted into your browser");
  }

  function line5() {
    divider();
  }

  function line6() {
    addNewLogItem("comp", "ENTER URL TO HACK OR DECRYPT");
  }

  function line7() {
    divider();
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
}

//SECTION 5 WAS PHONE CALL RIDDLE

//ENCRYPTION DONE
//SECTION 6

function PhotoEnhance() {
  showURL(
    "https://cia-9d562a98.s3.us-west-1.amazonaws.com/Destruction_At_The_Hands_Of_Your_Government"
  );
}

function Section6Puzzle1() {
  inputAllowed = false;
  Success();
  flicker();

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "ERROR 2/10");
  }

  function line2() {
    addNewLogItem("comp", "ORDER: 254361");
  }

  function line3() {
    addNewLogItem(
      "comp",
      "LogLine#5>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_8___<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line4() {
    addNewLogItem(
      "comp",
      "LogLine#6>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_3___<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line5() {
    addNewLogItem(
      "comp",
      "LogLine#2>>>>>>>>>>>>>>>>>>>___REFERENCE#_2___>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___CODE_TOO_LONG__"
    );
  }

  function line6() {
    addNewLogItem(
      "comp",
      "LogLine#4>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_2___"
    );
  }

  function line7() {
    addNewLogItem(
      "comp",
      "LogLine#1>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_7___<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line8() {
    addNewLogItem(
      "comp",
      "LogLine#3>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>____REFERENCE#_8___<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line9() {
    addNewLogItem(
      "comp",
      "LOG LINES TOO LONG TYPE REFERENCE NUMBERS THEN PRESS ENTER"
    );
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
  setTimeout(line8, 12500);
  setTimeout(line9, 13000);
}

function Section6Puzzle2() {
  inputAllowed = false;
  Success();
  flicker();

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "ERROR 3/10");
  }

  function line2() {
    addNewLogItem(
      "comp",
      "ORDER: 46 snow 521, 146 snow 52, 2146 snow 5, _ _ _ _ _ _"
    );
  }

  function line3() {
    addNewLogItem(
      "comp",
      "LogLine#3>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_REFERENCE#_Green__<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line4() {
    addNewLogItem(
      "comp",
      "LogLine#2>>>>>>>>>>>>>>>>>>>___REFERENCE#_7___>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___CODE_TOO_LONG__"
    );
  }

  function line5() {
    addNewLogItem(
      "comp",
      "LogLine#1>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_2___<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line6() {
    addNewLogItem(
      "comp",
      "LogLine#4>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_6___"
    );
  }

  function line7() {
    addNewLogItem(
      "comp",
      "LogLine#6>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_7___<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line8() {
    addNewLogItem(
      "comp",
      "LogLine#5>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_3___<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line9() {
    addNewLogItem(
      "comp",
      "LOG LINES OUT OF ORDER /& TOO LONG. TYPE REFERENCE NUMBERS THEN PRESS ENTER"
    );
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
  setTimeout(line8, 12500);
  setTimeout(line9, 13000);
}

function Section6Puzzle3() {
  inputAllowed = false;
  Success();
  flicker();

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "ERROR 4/10");
  }

  function line2() {
    addNewLogItem("comp", "ORDER: White White Orange Red Brown Blue");
  }

  function line3() {
    addNewLogItem(
      "comp",
      "LogLine#4>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_0___"
    );
  }

  function line4() {
    addNewLogItem(
      "comp",
      "LogLine#2>>>>>>>>>>>>>>>>>>>___REFERENCE#_0___>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___CODE_TOO_LONG__"
    );
  }

  function line5() {
    addNewLogItem(
      "comp",
      "LogLine#3>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>____REFERENCE#_7___<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line6() {
    addNewLogItem(
      "comp",
      "LogLine#5>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_4___<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line7() {
    addNewLogItem(
      "comp",
      "LogLine#6>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENEC#_9___<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line8() {
    addNewLogItem(
      "comp",
      "LogLine#1>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_3___<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line9() {
    addNewLogItem(
      "comp",
      "LOG LINES TOO LONG TYPE REFERNCE NUMBERS THEN PRESS ENTER"
    );
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
  setTimeout(line8, 12500);
  setTimeout(line9, 13000);
}

function Section6Puzzle4() {
  inputAllowed = false;
  Success();
  flicker();

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "ERROR 5/10");
  }

  function line2() {
    addNewLogItem("comp", "ORDER: ◧◉▲=●■");
  }

  function line3() {
    addNewLogItem(
      "comp",
      "REFERENCE#1>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>______LogLine#■______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line4() {
    addNewLogItem(
      "comp",
      "REFERENCE#7>>>>>>>>>>>>>>>>>>>_____LogLine#◉______>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___CODE_TOO_LONG__"
    );
  }

  function line5() {
    addNewLogItem(
      "comp",
      "REFERENCE#4>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>______LogLine#▲______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line6() {
    addNewLogItem(
      "comp",
      "REFERENCE#6>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>______LogLine#◧______"
    );
  }

  function line7() {
    addNewLogItem(
      "comp",
      "REFERENCE#3>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>______LogLine#●______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line8() {
    addNewLogItem(
      "comp",
      "REFERENCE#9>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>______LogLine#=______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line9() {
    addNewLogItem(
      "comp",
      "LOG LINES TOO LONG TYPE REFERENCE NUMBERS THEN PRESS ENTER"
    );
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
  setTimeout(line8, 12500);
  setTimeout(line9, 13000);
}

function Section6Puzzle5() {
  inputAllowed = false;
  Success();
  flicker();

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "ERROR 6/10");
  }

  function line2() {
    addNewLogItem("comp", "ORDER: 364521");
  }

  function line3() {
    addNewLogItem(
      "comp",
      "LogLine#4>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>___REFERENCE#_◉____<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line4() {
    addNewLogItem(
      "comp",
      "LogLine#2>>>>>>>>>>>>>>>>>>>___REFERENCE#_◧___>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___CODE_TOO_LONG__"
    );
  }

  function line5() {
    addNewLogItem(
      "comp",
      "LogLine#6>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERAENCE#_=____"
    );
  }

  function line6() {
    addNewLogItem(
      "comp",
      "LogLine#3>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_◆____<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line7() {
    addNewLogItem(
      "comp",
      "LogLine#1>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_●____<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line8() {
    addNewLogItem(
      "comp",
      "LogLine#5>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_◆____<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line9() {
    addNewLogItem(
      "comp",
      "LOG LINES TOO LONG TYPE REFERENCE NUMBERS THEN PRESS ENTER"
    );
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
  setTimeout(line8, 12500);
  setTimeout(line9, 13000);
}

function Section6Puzzle6() {
  inputAllowed = false;
  Success();
  flicker();

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "ERROR 7/10");
  }

  function line2() {
    addNewLogItem("comp", "ORDER: ■◉▲+◆◭");
  }

  function line3() {
    addNewLogItem(
      "comp",
      "LogLine#▲>>>>>>>>>>>>>>>>>>>___REFERENCE#_■___>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___CODE_TOO_LONG__"
    );
  }

  function line4() {
    addNewLogItem(
      "comp",
      "LogLine#■>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_◆____<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line5() {
    addNewLogItem(
      "comp",
      "LogLine#+>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>___REFERENCE#_◆____<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line6() {
    addNewLogItem(
      "comp",
      "LogLine#◭>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_=____"
    );
  }

  function line7() {
    addNewLogItem(
      "comp",
      "LogLine#◉>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_●____<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line8() {
    addNewLogItem(
      "comp",
      "LogLine#◆>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_◆____<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line9() {
    addNewLogItem(
      "comp",
      "LOG LINES TOO LONG TYPE REFERENCE NUMBERS THEN PRESS ENTER"
    );
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
  setTimeout(line8, 12500);
  setTimeout(line9, 13000);
}

function Section6Puzzle7() {
  inputAllowed = false;
  Success();
  flicker();

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "ERROR 8/10");
  }

  function line2() {
    addNewLogItem("comp", "ORDER: ◉▲◆◭■+");
  }

  function line3() {
    addNewLogItem(
      "comp",
      "LogLine#4>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_+____"
    );
  }

  function line4() {
    addNewLogItem(
      "comp",
      "LogLine#2>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_▲____<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line5() {
    addNewLogItem(
      "comp",
      "LogLine#1>>>>>>>>>>>>>>>>>>>___REFERENCE#_●___>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___CODE_TOO_LONG__"
    );
  }

  function line6() {
    addNewLogItem(
      "comp",
      "LogLine#3>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>___REFERENCE#_-____<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line7() {
    addNewLogItem(
      "comp",
      "LogLine#6>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_◭____<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line8() {
    addNewLogItem(
      "comp",
      "LogLine#5>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_=____<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line9() {
    addNewLogItem(
      "comp",
      "LOG LINES TOO LONG TYPE REFERENCE NUMBERS THEN PRESS ENTER"
    );
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
  setTimeout(line8, 12500);
  setTimeout(line9, 13000);
}

function Section6Puzzle8() {
  inputAllowed = false;
  Success();
  flicker();

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "ERROR 9/10");
  }

  function line2() {
    addNewLogItem("comp", "ORDER: ▲=-+◆◧");
  }

  function line3() {
    addNewLogItem(
      "comp",
      "LogLine#White>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_=____<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line4() {
    addNewLogItem(
      "comp",
      "LogLine#Green>>>>>>>>>>>>>>>>>>>___REFERENCE#_●___>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___CODE_TOO_LONG__"
    );
  }

  function line5() {
    addNewLogItem(
      "comp",
      "LogLine#purple>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_+____"
    );
  }

  function line6() {
    addNewLogItem(
      "comp",
      "LogLine#Yellow>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_▲____<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line7() {
    addNewLogItem(
      "comp",
      "LogLine#Silver>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_◭____<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line8() {
    addNewLogItem(
      "comp",
      "LogLine#Orange>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>___REFERENCE#_-____<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line9() {
    addNewLogItem(
      "comp",
      "LOG LINES TOO LONG TYPE REFERENCE NUMBERS THEN PRESS ENTER"
    );
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
  setTimeout(line8, 12500);
  setTimeout(line9, 13000);
}

function Section6Puzzle9() {
  inputAllowed = false;
  Success();
  flicker();

  //Animation starst at 9000ms

  function line1() {
    addNewLogItem("comp", "ERROR 10/10");
  }

  function line2() {
    addNewLogItem("comp", "ORDER: ■◉=◧+◆");
  }

  function line3() {
    addNewLogItem(
      "comp",
      "REFERENCE#_◆_>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>______LogLine#White______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line4() {
    addNewLogItem(
      "comp",
      "REFERENCE#_◭_>>>>>>>>>>>>>>>>>>>_____LogLine#Orange______>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___CODE_TOO_LONG__"
    );
  }

  function line5() {
    addNewLogItem(
      "comp",
      "REFERENCE#_=_>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>______LogLine#Blue______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line6() {
    addNewLogItem(
      "comp",
      "REFERENCE#_◧_>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>______LogLine#Yellow______"
    );
  }

  function line7() {
    addNewLogItem(
      "comp",
      "REFERENCE#_◉_>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>______LogLine#Brown______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______"
    );
  }

  function line8() {
    addNewLogItem(
      "comp",
      "REFERENCE#_●_>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>______LogLine#purple______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far______"
    );
  }

  function line9() {
    addNewLogItem(
      "comp",
      "LOG LINES TOO LONG TYPE REFERENCE NUMBERS THEN PRESS ENTER"
    );
    Ready_For_Input();
  }

  setTimeout(line1, 9000);
  setTimeout(line2, 9500);
  setTimeout(line3, 10000);
  setTimeout(line4, 10500);
  setTimeout(line5, 11000);
  setTimeout(line6, 11500);
  setTimeout(line7, 12000);
  setTimeout(line8, 12500);
  setTimeout(line9, 13000);
}

//FINAL SECTION

function repeatInstructions() {
  inputAllowed = false;

  function line1() {
    divider();
  }

  function line2() {
    addNewLogItem("comp", "Enter URL to hack or decrypt:");
    Ready_For_Input();
  }

  setTimeout(line1, 500);
  setTimeout(line2, 1000);
}

function Success() {
  inputAllowed = false;

  function line1() {
    addNewLogItem("comp", "SUCCESS");
    success_sound.play();
  }

  function line2() {
    addNewLogItem(
      "comp",
      "Command Submission " + '"' + playerTXT + '"' + " recognized"
    );
  }

  function line3() {
    divider();
  }

  setTimeout(line1, 1000);
  setTimeout(line2, 3000);
  setTimeout(line3, 5000);
}

function hideEverything() {
  var element = document.getElementById("body");
  element.style.opacity = "0";
}

function showEverything() {
  var element = document.getElementById("body");
  element.style.opacity = "1";
}

function deleteEverything() {
  //Delete LOG
  var element = document.getElementById("log");
  element.parentNode.removeChild(element);

  //Delete header
  var element = document.getElementById("header");
  element.parentNode.removeChild(element);

  //create blank log to draw to
  var newLogDiv = document.createElement("div");
  document.getElementById("body").appendChild(newLogDiv);
  newLogDiv.id = "log";

  //create blank header to draw to
  var newHeaderDiv = document.createElement("div");
  newHeaderDiv.id = "header";
  document.getElementById("body").appendChild(newHeaderDiv);

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
}

function decryptFail() {
  inputAllowed = false;
  function line1() {
    addNewLogItem("comp", "FAIL");
    failure_sound.play();
  }

  function line2() {
    addNewLogItem("comp", "THIS IS NOT A VALID URL");
  }

  function line3() {
    divider();
  }

  function line4() {
    addNewLogItem("comp", "ENTER URL TO HACK OR DECRYPT");
  }

  function line5() {
    divider();
    Ready_For_Input();
  }

  setTimeout(line1, 0);
  setTimeout(line2, 2000);
  setTimeout(line3, 4000);
  setTimeout(line4, 4500);
  setTimeout(line5, 5000);
}

function finalCutscene() {
  inputAllowed = false;

  document.getElementById("txt").style.display = "none";

  function line1() {
    flicker(); // animation stops at 1400

    //Intense music
    if (music_on) {
      current_music.pause();
    }
    current_music = intense_music;
    if (music_on) {
      current_music.play();
    }
  }

  function line2() {
    deleteEverything();
  }

  function line3() {
    flicker();
    systemCrash(); // 3000ms
  }

  function line4() {
    deleteEverything();
  }

  function line5() {
    flicker();
    boot(); // ends at 11200ms
  }

  function line6() {
    deleteEverything();
  }

  function line7() {
    var element = document.getElementById("AlabasterHeader");
    element.classList.remove("hidden");

    //Alabaster music
    if (music_on) {
      current_music.pause();
    }
    current_music = alabaster_music;
    if (music_on) {
      current_music.play();
    }
  }

  function line8() {
    flicker();
  }

  function line9() {
    flicker();
    fadein("glitch", "in");
  }

  function line10() {
    fadein("finalInstruction", "in");
    inputAllowed = true;
  }

  setTimeout(line1, 100);
  setTimeout(line2, 4300);
  setTimeout(line3, 6000);
  setTimeout(line4, 10000);
  setTimeout(line5, 15000);
  setTimeout(line6, 25000);
  setTimeout(line7, 26000);
  setTimeout(line8, 26001);
  setTimeout(line9, 28000);
  setTimeout(line10, 30000);
}

function systemCrash() {
  function line1() {
    addNewLogItem("comp", "SYSTEM CRASH");
  }

  function line2() {
    addNewLogItem("comp", "ATTEMPTING RESTART");
  }

  function line3() {
    addNewLogItem("comp", "RESTARTING...");
  }

  setTimeout(line1, 0);
  setTimeout(line2, 1000);
  setTimeout(line3, 3000);
}

function FinalCutscenept2() {
  inputAllowed = false;

  function line1() {
    var element = document.getElementById("glitch");
    element.classList.add("hidden");
    var element = document.getElementById("finalInstruction");
    element.classList.add("hidden");
    download("downlaod1", "Secret#1", true);
  }

  function line2() {
    download("downlaod2", "Hacking 1st-3rd Level Security", true);
  }

  function line3() {
    download("downlaod3", "Downloading operator files", true);
  }

  function line4() {
    download("downlaod4", "Obtaining operative names", true);
  }

  function line5() {
    download("downlaod5", "Grandma's Secret Recipe", true);
  }

  function line6() {
    download("downlaod6", "Making Cookies", true);
  }

  function line7() {
    download("downlaod7", "Beaming Player", true);
  }

  function line8() {
    download("downlaod7", "loaction of CODE NAME: Rabit's Foot", true);
  }

  function line9() {
    download("downlaod7", "Santa's Workshop Cordinates", true);
  }

  function line10() {
    download("downlaod1", "WiFi Password", true);
  }

  function line11() {
    download("downlaod2", "JFK Assasination", true);
  }

  function line12() {
    download("downlaod3", "Downloading Covid-19 Vaccine", true);
  }

  function line13() {
    download("downlaod4", "Nordstroms Cupon Codes", true);
  }

  function line14() {
    download("downlaod5", "Minecraft", true);
  }

  function line15() {
    download("downlaod6", "The Atist Flower's New Album", true);
  }

  function line16() {
    download("downlaod7", "Unlocking Back Door", true);
  }

  function line17() {
    download("downlaod7", "Opening Back Door", true);
  }

  function line18() {
    download(
      "downlaod7",
      "Closing Back Door, So We Dont Let The Secrets Out",
      true
    );
  }

  document.getElementById("txt").style.display = "none";

  function line19() {
    //flicker();// animation stops at 1400
    clearInterval(glitchAnim);
    endExtraGlitches();
    //allowFlicker = false;
  }

  function line20() {
    deleteEverything();
  }

  function line21() {
    flicker();
    var element = document.getElementById("AlabasterHeader");
    element.classList.add("hidden");

    var element = document.getElementById("credits");
    element.classList.remove("hidden");
  }

  function line22() {
    addNewLogItem("comp", playerUsername);
  }

  function line23() {
    addNewLogItem("comp", "User " + '"' + playerUsername + '"' + " recognized");
  }

  function line24() {
    addNewLogItem("comp", "Welcome " + playerUsername);
  }

  function line25() {
    addNewLogItem("comp", "Please enter your password " + playerUsername);
  }

  function line26() {
    addNewLogItem("comp", playerPassword);
  }

  function line27() {
    addNewLogItem("comp", "Command Submission Recognized");
  }

  function line28() {
    addNewLogItem("comp", "Logging in...");
  }

  function line29() {
    addNewLogItem("comp", "Login Successful.");
  }

  function line30() {
    addNewLogItem("comp", "Have a nice day.");
  }

  function line31() {
    divider();
  }

  function line32() {
    addNewLogItem("comp", "CONGRATULATIONS!");
  }

  function line33() {
    addNewLogItem("important", "You have completed game one: Daffodil362");
  }

  function line34() {
    addNewLogItem("important", "Your time: " + Time + " Minutes");
  }

  function line35() {
    divider();
  }

  function line36() {
    addNewLogItem("comp", "CREDITS:");
  }

  function line37() {
    addNewLogItem("comp", "Story & Puzzle Design: Jonathon McClendon");
  }

  function line38() {
    divider();
  }

  function line39() {
    addNewLogItem("comp", "Coding Team:");
  }

  function line40() {
    addNewLogItem("comp", "Jonathon McClendon");
  }

  function line41() {
    addNewLogItem("comp", "Jonathon McClendon");
  }

  function line42() {
    addNewLogItem("comp", "&");
  }

  function line43() {
    addNewLogItem("comp", "Jonathon McClendon");
  }

  function line44() {
    divider();
  }

  function line45() {
    addNewLogItem("comp", "Assistant Writer: John McClendon");
  }

  function line46() {
    divider();
  }

  function line47() {
    addNewLogItem("comp", "Play Testers:");
  }

  function line48() {
    addNewLogItem("comp", "John McClendon");
  }

  function line49() {
    addNewLogItem("comp", "Gretchen McClendon");
  }

  function line50() {
    addNewLogItem("comp", "Gabriela Piluk");
  }

  function line51() {
    addNewLogItem("comp", "Jay Dallen");
  }

  function line52() {
    addNewLogItem("comp", "Aaron Rickles");
  }

  function line52B() {
    addNewLogItem("comp", "Scott Rickles");
  }

  function line53() {
    divider();
  }

  function line54() {
    addNewLogItem("comp", "Special Thanks to:");
  }

  function line55() {
    addNewLogItem("comp", "~ Gretchen McClendon (mom)");
  }

  function line56() {
    addNewLogItem("comp", "Sorry for all the computers I ruined in my youth");
    addNewLogItem(
      "comp",
      "trying to take them apart and figure out how they worked."
    );
  }

  function line57() {
    addNewLogItem("comp", "~ Johnson Family");
  }

  function line58() {
    addNewLogItem("comp", "~ Rickeles Family");
  }

  function line59() {
    addNewLogItem("comp", "~ Bradley & The Tompkins Family");
  }

  function line60() {
    addNewLogItem(
      "comp",
      "Thank you for the guidance and knowledge you provided me."
    );
  }

  setTimeout(line1, 0);
  setTimeout(line2, 3010);
  setTimeout(line3, 6010);
  setTimeout(line4, 9010);
  setTimeout(line5, 12010);
  setTimeout(line6, 15010);
  setTimeout(line7, 18010);
  setTimeout(line8, 21010);
  setTimeout(line9, 24010);
  setTimeout(line10, 27010);
  setTimeout(line11, 30010);
  setTimeout(line12, 33010);
  setTimeout(line13, 36010);
  setTimeout(line14, 39010);
  setTimeout(line15, 42010);
  setTimeout(line16, 45010);
  setTimeout(line17, 48010);
  setTimeout(line18, 52010);
  setTimeout(line19, 55000);
  setTimeout(line20, 57000);
  setTimeout(line21, 58000);
  setTimeout(line22, 68000);
  setTimeout(line23, 69000);
  setTimeout(line24, 70000);
  setTimeout(line25, 71500);
  setTimeout(line26, 72000);
  setTimeout(line27, 73000);
  setTimeout(line28, 74000);
  setTimeout(line29, 75000);
  setTimeout(line30, 76000);

  setTimeout(line31, 77000);
  setTimeout(line32, 78000);
  setTimeout(line33, 79000);
  setTimeout(line34, 80000);
  setTimeout(line35, 81000);
  setTimeout(line36, 82000);
  setTimeout(line37, 83000);
  setTimeout(line38, 84000);
  setTimeout(line39, 85000);
  setTimeout(line40, 86000);
  setTimeout(line41, 87000);
  setTimeout(line42, 88000);
  setTimeout(line43, 89000);
  setTimeout(line44, 90000);
  setTimeout(line45, 91000);
  setTimeout(line46, 92000);
  setTimeout(line47, 93000);
  setTimeout(line48, 94000);
  setTimeout(line49, 95000);
  setTimeout(line50, 96000);
  setTimeout(line51, 97000);
  setTimeout(line52, 98000);
  setTimeout(line52B, 99000);
  setTimeout(line53, 100000);
  setTimeout(line54, 101000);
  setTimeout(line55, 102000);
  setTimeout(line56, 103000);
  setTimeout(line57, 104000);
  setTimeout(line58, 105000);
  setTimeout(line59, 106000);
  setTimeout(line60, 107000);

  // need 40 seconds or 40,000 milaseconds
}

function musicShift() {
  var current_wait = 0;
  for (let i = 0; i < 9; i++) {
    let wait = Math.floor(Math.random() * 500) + 200;
    setTimeout(function () {
      current_music.playbackRate += (Math.floor(Math.random() * 3) - 1) / 10;
    }, wait + current_wait);
    current_wait += wait;
  }

  setTimeout(function () {
    current_music.playbackRate = 0.5;
  }, current_wait + 1000);
}

function Ready_For_Input() {
  inputAllowed = true;
  ready_for_input_sound.play();
}

function TestingGuestAnim() {
  inputAllowed = false;

  function line1() {
    addNewLogItem("comp", "Guest User Recognized");
  }

  function line2() {
    addNewLogItem("comp", "Welcome " + "Guest");
  }

  function line3() {
    addNewLogItem("comp", "Please enter your password");
    Ready_For_Input();
  }

  setTimeout(line1, 2000);
  setTimeout(line2, 4000);
  setTimeout(line3, 6000);
}

function GuestLoggedIn() {
  inputAllowed = false;

  function line1() {
    addNewLogItem("comp", "Guest Password Correct");
  }

  function line1() {
    addNewLogItem("comp", "Login Successful for Guest user");
  }

  function line2() {
    addNewLogItem(
      "comp",
      "Your C.I.A terminal is now capable of Hacking and Decrypting URLs"
    );
  }

  function line3() {
    addNewLogItem("comp", "ENCRYPTED URLs look like this:");
  }

  function line4() {
    addNewLogItem("comp", "*** EXAMPLE **** https://75896-29742-69504-22231");
  }

  function line5() {
    addNewLogItem(
      "comp",
      "All DECRYPTED URls can be used in a browser to visit web pages."
    );
  }

  function line6() {
    addNewLogItem(
      "comp",
      "ENCRYPTED URL's MUST be DECRYPTED before pasting into browser address window."
    );
  }

  function line7() {
    divider();
  }

  function line8() {
    addNewLogItem("comp", "ENTER URL TO HACK OR DECYRYPT:");
  }

  function line9() {
    divider();
    Ready_For_Input();
  }

  setTimeout(line1, 7000);
  setTimeout(line2, 9000);
  setTimeout(line3, 11000);
  setTimeout(line4, 13000);
  setTimeout(line5, 15000);
  setTimeout(line6, 13000);
  setTimeout(line7, 15000);
  setTimeout(line8, 15500);
  setTimeout(line9, 16000);
}

//URLs

function showURL(href) {
  let a = document.createElement("a");
  a.href = href;
  a.target = "_blank";
  a.className = "URL";
  a.innerHTML = "<b>" + href + "</b>";

  a.onmouseover = function () {
    a.className = "URL hovered-URL";
  };

  a.onmouseout = function () {
    a.className = "URL";
  };

  document.getElementById("log").appendChild(a);
  window.scrollTo(
    0,
    document.body.scrollHeight || document.documentElement.scrollHeight
  );
}

//Fail sound function

function playFailSound(ms_between, num_plays) {
  failure_sound.play();
  for (let i = 1; i < num_plays; i++) {
    setTimeout(function () {
      failure_sound.play();
    }, ms_between * i);
  }
}
