class Puzzle {
  //
  constructor(puzzleArry, answer, fail, success) {
    this.puzzleArry = puzzleArry;
    this.answer = answer;
    this.fail = fail;
    this.success = success;
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
}
