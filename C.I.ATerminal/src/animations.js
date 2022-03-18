function typingAnim(type, durationInMilliseconds, EndType, Keep) {
  var typing_log_item = document.createElement("h2");
  typing_log_item.className = "log-item";
  typing_log_item.innerHTML = type;
  document.getElementById("log").appendChild(typing_log_item);
  window.scrollTo(
    0,
    document.body.scrollHeight || document.documentElement.scrollHeight
  );

  var currentTime = 0,
    intervalHandle = null,
    timeoutHandle1 = null,
    timeoutHandle2 = null,
    timeoutHandle3 = null;

  function stopAnimationIfTimeExceeded() {
    if (currentTime >= durationInMilliseconds) {
      clearTimeout(timeoutHandle1);
      clearTimeout(timeoutHandle2);
      clearTimeout(timeoutHandle3);
      clearInterval(intervalHandle);

      if (Keep) {
        typing_log_item.innerHTML = EndType;
      } else {
        typing_log_item.remove();
      }

      return true;
    }
    return false;
  }

  function playAnim() {
    var isExceeded = stopAnimationIfTimeExceeded();
    if (isExceeded) {
      return;
    }

    typing_log_item.innerHTML = type;

    timeoutHandle1 = setTimeout(() => {
      currentTime += 400;
      typing_log_item.innerHTML = type + ".";
    }, 400);

    timeoutHandle2 = setTimeout(() => {
      currentTime += 400;
      typing_log_item.innerHTML = type + "..";
    }, 800);

    timeoutHandle3 = setTimeout(() => {
      currentTime += 400;
      typing_log_item.innerHTML = type + "...";
    }, 1200);
  }

  playAnim();
  intervalHandle = setInterval(function () {
    currentTime += 400;
    playAnim();
  }, 1600);

  return typing_log_item;
}

function endTypingAnimation(typing_log_item) {
  clearInterval(typing_animation);
  document.getElementById("log").removeChild(typing_log_item);
}

function typingAnim(type) {
  var typing_log_item = document.createElement("h2");
  typing_log_item.className = "log-item";
  typing_log_item.innerHTML = type;
  document.getElementById("log").appendChild(typing_log_item);
  window.scrollTo(
    0,
    document.body.scrollHeight || document.documentElement.scrollHeight
  );

  typing_log_item.innerHTML = type;
  setTimeout(() => (typing_log_item.innerHTML = type + "."), 400);
  setTimeout(() => (typing_log_item.innerHTML = type + ".."), 800);
  setTimeout(() => (typing_log_item.innerHTML = type + "..."), 1200);

  typing_animation = setInterval(function () {
    typing_log_item.innerHTML = type;
    setTimeout(() => (typing_log_item.innerHTML = type + "."), 400);
    setTimeout(() => (typing_log_item.innerHTML = type + ".."), 800);
    setTimeout(() => (typing_log_item.innerHTML = type + "..."), 1200);
  }, 1600);

  return typing_log_item;
}

function startTypingAnimation() {
  var typing_log_item = document.createElement("h2");
  typing_log_item.className = "log-item";
  typing_log_item.innerHTML = "Typing";
  document.getElementById("log").appendChild(typing_log_item);
  window.scrollTo(
    0,
    document.body.scrollHeight || document.documentElement.scrollHeight
  );

  typing_log_item.innerHTML = "Typing";
  setTimeout(() => (typing_log_item.innerHTML = "Typing."), 400);
  setTimeout(() => (typing_log_item.innerHTML = "Typing.."), 800);
  setTimeout(() => (typing_log_item.innerHTML = "Typing..."), 1200);

  typing_animation = setInterval(function () {
    typing_log_item.innerHTML = "Typing";
    setTimeout(() => (typing_log_item.innerHTML = "Typing."), 400);
    setTimeout(() => (typing_log_item.innerHTML = "Typing.."), 800);
    setTimeout(() => (typing_log_item.innerHTML = "Typing..."), 1200);
  }, 1600);

  return typing_log_item;
}

function endExtraGlitches() {
  clearInterval(randomTextShiftInterval);
  let musicFadeInterval = setInterval(function () {
    if (current_music.volume > 0.1) {
      current_music.volume -= 0.05;
    } else {
      current_music.pause();
      clearInterval(musicFadeInterval);
    }
  }, 100);
}

var randomTextShiftInterval;

function randomTextShift() {
  randomTextShiftInterval = setInterval(function () {
    var h2_elems = document.querySelectorAll("h2.log-item");
    var index = Math.floor(Math.random() * h2_elems.length);

    if (h2_elems.length > 0) {
      if (Math.floor(Math.random() * 2) == 0) {
        let originalLineHeight = h2_elems[index].style.lineHeight;
        h2_elems[index].style.lineHeight = "10px";

        setTimeout(
          () => (h2_elems[index].style.lineHeight = originalLineHeight),
          Math.floor(Math.random() * 1000)
        );
      } else {
        let originalHTML = h2_elems[index].innerHTML;
        let htmlIndex = Math.floor(Math.random() * originalHTML.length);
        h2_elems[index].innerHTML =
          originalHTML.substring(0, htmlIndex) +
          "&nbsp&nbsp&nbsp&nbsp" +
          originalHTML.substring(htmlIndex);

        setTimeout(
          () => (h2_elems[index].innerHTML = originalHTML),
          Math.floor(Math.random() * 1000)
        );
      }
    }
  }, 200);
}

function fadeGlitch() {
  //ID is html Element you want to fade
  //Direction is the direction you want to fade. fade IN or fade OUT
  // Update will be speed of fade

  var element = document.getElementById("body");
  element.style.opacity = "0.25";

  function line2() {
    element.style.opacity = "1";
  }

  function line3() {
    element.style.opacity = ".95";
  }

  function line4() {
    element.style.opacity = "0.90";
  }

  function line5() {
    element.style.opacity = "0.85";
  }

  function line6() {
    element.style.opacity = "0.80";
  }

  function line7() {
    element.style.opacity = "0.75";
  }

  function line8() {
    element.style.opacity = "0.70";
  }

  function line9() {
    element.style.opacity = "0.65";
  }

  function line10() {
    element.style.opacity = "0.60";
  }

  function line11() {
    element.style.opacity = "0.55";
  }

  setTimeout(line2, 150);
  setTimeout(line3, 200);
  setTimeout(line4, 250);
  setTimeout(line5, 300);
  setTimeout(line6, 350);
  setTimeout(line7, 400);
  setTimeout(line8, 450);
  setTimeout(line9, 500);
  setTimeout(line10, 550);
  setTimeout(line11, 600);

  setTimeout(line11, 1200);
  setTimeout(line10, 1250);
  setTimeout(line9, 1300);
  setTimeout(line8, 1350);
  setTimeout(line7, 1400);
  setTimeout(line6, 1450);
  setTimeout(line5, 1500);
  setTimeout(line4, 1550);
  setTimeout(line3, 1600);
  setTimeout(line2, 1650);
}

function fadein(ID, Direction) {
  //ID is html Element you want to fade
  //Direction is the direction you want to fade. fade IN or fade OUT
  // Update will be speed of fade

  function line1() {
    element.style.opacity = "0.05";
  }

  function line2() {
    element.style.opacity = "0.08";
  }

  function line3() {
    element.style.opacity = "0.10";
  }

  function line4() {
    element.style.opacity = "0.15";
  }

  function line5() {
    element.style.opacity = "0.20";
  }

  function line6() {
    element.style.opacity = "0.25";
  }

  function line7() {
    element.style.opacity = "0.30";
  }

  function line8() {
    element.style.opacity = "0.35";
  }

  function line9() {
    element.style.opacity = "0.40";
  }

  function line10() {
    element.style.opacity = "0.45";
  }

  function line11() {
    element.style.opacity = "0.50";
  }

  function line12() {
    element.style.opacity = "0.55";
  }

  function line13() {
    element.style.opacity = "0.60";
  }

  function line14() {
    element.style.opacity = "0.65";
  }

  function line15() {
    element.style.opacity = "0.70";
  }

  function line16() {
    element.style.opacity = "0.75";
  }

  function line17() {
    element.style.opacity = "0.80";
  }

  function line18() {
    element.style.opacity = "0.85";
  }
  function line19() {
    element.style.opacity = "0.90";
  }

  function line20() {
    element.style.opacity = ".95";
  }

  function line21() {
    element.style.opacity = "1";
  }

  var element = document.getElementById(ID);

  if (Direction == "in") {
    element.style.opacity = "0";
    element.classList.remove("hidden");

    setTimeout(line1, 100);
    setTimeout(line2, 200);
    setTimeout(line3, 300);
    setTimeout(line4, 400);
    setTimeout(line5, 500);
    setTimeout(line6, 600);
    setTimeout(line7, 700);
    setTimeout(line8, 800);
    setTimeout(line9, 900);
    setTimeout(line10, 1000);
    setTimeout(line11, 1100);
    setTimeout(line12, 1200);
    setTimeout(line13, 1300);
    setTimeout(line14, 1400);
    setTimeout(line15, 1500);
    setTimeout(line16, 1600);
    setTimeout(line17, 1700);
    setTimeout(line18, 1800);
    setTimeout(line19, 1900);
    setTimeout(line20, 2000);
    setTimeout(line21, 2100);
  } else if (Direction == "out") {
    element.style.opacity = "1";
    element.classList.remove("hidden");

    setTimeout(line21, 100);
    setTimeout(line20, 200);
    setTimeout(line19, 300);
    setTimeout(line18, 400);
    setTimeout(line17, 500);
    setTimeout(line16, 600);
    setTimeout(line15, 700);
    setTimeout(line14, 800);
    setTimeout(line13, 900);
    setTimeout(line12, 1000);
    setTimeout(line11, 1100);
    setTimeout(line10, 1200);
    setTimeout(line9, 1300);
    setTimeout(line8, 1400);
    setTimeout(line7, 1500);
    setTimeout(line6, 1600);
    setTimeout(line5, 1700);
    setTimeout(line4, 1800);
    setTimeout(line3, 1900);
    setTimeout(line2, 2000);
    setTimeout(line1, 2100);
  }
}

function boot() {
  function line1() {
    addNewLogItem("comp", "Rebooting...");
  }

  function line2() {
    addNewLogItem("loading", " █2%");
  }

  function line3() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ██5%");
  }

  function line4() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ████7%");
  }

  function line5() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " █████9%");
  }

  function line6() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ██████10%");
  }

  function line7() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ███████12%");
  }

  function line8() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ████████17%");
  }

  function line9() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " █████████19%");
  }

  function line10() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ████████████25%");
  }

  function line11() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ██████████████████45%");
  }

  function line12() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ████████████████████████50%");
  }

  function line13() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ██████████████████████████████████████75%");
  }

  function line14() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", "");
  }

  function line15() {
    var elmnt = document.getElementById("temp");
    elmnt.id = "BootUp";
  }

  function line16() {
    addNewLogItem("loading", "CRITICAL FAILURE");
  }

  setTimeout(line1, 100);
  setTimeout(line2, 300);
  setTimeout(line3, 500);
  setTimeout(line4, 700);
  setTimeout(line5, 900);
  setTimeout(line6, 1100);
  setTimeout(line7, 1300);
  setTimeout(line8, 1500);
  setTimeout(line9, 1700);
  setTimeout(line10, 1900);
  setTimeout(line11, 2100);
  setTimeout(line12, 2300);
  setTimeout(line13, 2500);
  setTimeout(line14, 2700);
  setTimeout(line15, 2900);
  setTimeout(line16, 3100);
  setTimeout(line16, 3300);
  setTimeout(line16, 3400);
  setTimeout(line16, 3500);
  setTimeout(line16, 3600);
  setTimeout(line16, 3700);
  setTimeout(line16, 3800);
  setTimeout(line16, 3900);
  setTimeout(line16, 4000);
  setTimeout(line16, 4100);
  setTimeout(line16, 4200);
  setTimeout(line16, 4300);
  setTimeout(line16, 4400);
  setTimeout(line16, 4500);
  setTimeout(line16, 4600);
  setTimeout(line16, 4700);
  setTimeout(line16, 4800);
  setTimeout(line16, 4900);
  setTimeout(line16, 5000);
  setTimeout(line16, 5100);
  setTimeout(line16, 5200);
  setTimeout(line16, 5300);
  setTimeout(line16, 5400);
  setTimeout(line16, 5500);
}

function glitch() {
  function line1() {
    document.getElementById("glitch").style.display = "inline";
  }

  function line2() {
    document.getElementById("glitch").style.display = "none";
  }

  setTimeout(line1, 100);
  setTimeout(line2, 200);
}

function download(ID, what, blue = false) {
  function line1() {
    addNewLogItem("comp", "Downloading:" + what, blue);
  }

  function line2() {
    addNewLogItem("loading", " █2%", blue);
  }

  function line3() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ██5%", blue);
  }

  function line4() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ████7%", blue);
  }

  function line5() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " █████9%", blue);
  }

  function line6() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ██████10%", blue);
  }

  function line7() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ███████12%", blue);
  }

  function line8() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ████████17%", blue);
  }

  function line9() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " █████████19%", blue);
  }

  function line10() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ████████████25%", blue);
  }

  function line11() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ██████████████████45%", blue);
  }

  function line12() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ████████████████████████50%", blue);
  }

  function line13() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem(
      "loading",
      " ██████████████████████████████████████75%",
      blue
    );
  }

  function line14() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem(
      "loading",
      " ██████████████████████████████████████████████████100%",
      blue
    );
  }

  function line15() {
    var elmnt = document.getElementById("temp");
    elmnt.id = ID;
  }

  setTimeout(line1, 0);
  setTimeout(line2, 200);
  setTimeout(line3, 400);
  setTimeout(line4, 600);
  setTimeout(line5, 800);
  setTimeout(line6, 1000);
  setTimeout(line7, 1200);
  setTimeout(line8, 1400);
  setTimeout(line9, 1600);
  setTimeout(line10, 1800);
  setTimeout(line11, 2000);
  setTimeout(line12, 2200);
  setTimeout(line13, 2400);
  setTimeout(line14, 2600);
  setTimeout(line15, 2800);
}

function flicker() {
  function line1() {
    if (allowFlicker) {
      hideEverything();
      current_music.volume = 0;
    }
  }

  function line2() {
    if (allowFlicker) {
      showEverything();
      current_music.volume = 1;
    }
  }

  setTimeout(line1, 100);
  setTimeout(line2, 200);
  setTimeout(line1, 400);
  setTimeout(line2, 800);
  setTimeout(line1, 890);
  setTimeout(line2, 900);
  setTimeout(line1, 1100);
  setTimeout(line2, 1200);
  setTimeout(line1, 1220);
  setTimeout(line2, 1390);
}

function decrypt(ID) {
  function line1() {
    addNewLogItem("comp", "Decrypting...");
  }

  function line2() {
    addNewLogItem("loading", " █2%");
  }

  function line3() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ██5%");
  }

  function line4() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ████7%");
  }

  function line5() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " █████9%");
  }

  function line6() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ██████10%");
  }

  function line7() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ███████12%");
  }

  function line8() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ████████17%");
  }

  function line9() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " █████████19%");
  }

  function line10() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ████████████25%");
  }

  function line11() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ██████████████████45%");
  }

  function line12() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ████████████████████████50%");
  }

  function line13() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ██████████████████████████████████████75%");
  }

  function line14() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem(
      "loading",
      " ██████████████████████████████████████████████████100%"
    );
  }

  function line15() {
    var elmnt = document.getElementById("temp");
    elmnt.id = ID;
  }

  setTimeout(line1, 1000);
  setTimeout(line2, 1200);
  setTimeout(line3, 1400);
  setTimeout(line4, 1800);
  setTimeout(line5, 2000);
  setTimeout(line6, 2200);
  setTimeout(line7, 2400);
  setTimeout(line8, 2600);
  setTimeout(line9, 2800);
  setTimeout(line10, 3000);
  setTimeout(line11, 3200);
  setTimeout(line12, 3400);
  setTimeout(line13, 3600);
  setTimeout(line14, 4000);
  setTimeout(line15, 5000);
}

function hack(ID) {
  function line1() {
    addNewLogItem("comp", "Hacking...");
  }

  function line2() {
    addNewLogItem("loading", " █2%");
  }

  function line3() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ██5%");
  }

  function line4() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ████7%");
  }

  function line5() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " █████9%");
  }

  function line6() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ██████10%");
  }

  function line7() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ███████12%");
  }

  function line8() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ████████17%");
  }

  function line9() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " █████████19%");
  }

  function line10() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ████████████25%");
  }

  function line11() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ██████████████████45%");
  }

  function line12() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ████████████████████████50%");
  }

  function line13() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem("loading", " ██████████████████████████████████████75%");
  }

  function line14() {
    var elmnt = document.getElementById("temp");
    elmnt.remove();
    addNewLogItem(
      "loading",
      " ██████████████████████████████████████████████████100%"
    );
  }

  function line15() {
    var elmnt = document.getElementById("temp");
    elmnt.id = ID;
  }

  setTimeout(line1, 1000);
  setTimeout(line2, 1200);
  setTimeout(line3, 1400);
  setTimeout(line4, 1800);
  setTimeout(line5, 2000);
  setTimeout(line6, 2200);
  setTimeout(line7, 2400);
  setTimeout(line8, 2600);
  setTimeout(line9, 2800);
  setTimeout(line10, 3000);
  setTimeout(line11, 3200);
  setTimeout(line12, 3400);
  setTimeout(line13, 3600);
  setTimeout(line14, 4000);
  setTimeout(line15, 5000);
}
