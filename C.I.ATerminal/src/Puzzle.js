class Puzzle {
  //
  constructor(puzzleArry, answer, fail, success, hintCode) {
    this.puzzleArry = puzzleArry;
    this.answer = answer;
    this.fail = fail;
    this.success = success;
    this.hintCode = hintCode;
  }

  cutscene(speed = 0) {
    inputAllowed = false;
    let length = this.puzzleArry.length;

    for (let i = 0; i < length; i++) {
      function line() {
        addNewLogItem(this.puzzleArry[i][0], this.puzzleArry[i][1]);
        // ready for next line = true
      }

      setTimeout(line, speed * i + scene[i][2]);
    }
    Ready_For_Input();
  }

  createHTMLBlock = (who, what) => {
    let b4andAftr = findWho(who);
    let htmlBlock = b4andAftr[0] + what + b4andAftr[1];
    return htmlBlock;
  };

  findWho = (who) => {
    return ACTORS[who];
  };

  checkPlayerAnswer(playerText) {
    if (playerText === this.answer) {
    } else {
    }
  }
}
