// animations should take in a what, where, and speed.
// at the end of the animation you should make sure that the what that was animated is added perminately or not.
//
//
// most simple animation POP just adds instantly
function pop(what) {
  var newItem = document.createElement("h2");
  newItem.className = "log-item";
  newItem.innerHTML = what;
  document.getElementById("log").appendChild(newItem);
  scrollToBottom();
}

function typingAnim(type, duration, EndType, Keep) {
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
    if (currentTime >= duration) {
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

function fade(ID, Direction = "in") {
  var element = document.getElementById(ID);
  let incramentFade;

  if (Direction == "in") {
    element.style.opacity = 0.0;
    incramentFade = () => {
      element.style.opacity = element.style.opacity + 0.1;
    };
  } else {
    element.style.opacity = 1.0;
    incramentFade = () => {
      element.style.opacity = element.style.opacity - 0.1;
    };
  }

  let FadeIntrivalHandle = setInterval(incramentFade(), 1000);
}

function loadBar(name) {
  let percent = 0;
  let box = "█";
  let currentBar = "0%";

  const addBoxToBar = () => {
    percent = percent + 2;
    currentBar = box + percent + "%";
  };

  const add = () => {
    addNewLogItem(name, "█2%");
  };
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
