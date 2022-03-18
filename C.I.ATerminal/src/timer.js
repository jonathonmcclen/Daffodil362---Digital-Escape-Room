class PlayTime {
  constructor() {
    this.elapsed = 0;
    setInterval(AddMinute, 60000);
  }

  AddMinute() {
    Time += 1;
  }
}
