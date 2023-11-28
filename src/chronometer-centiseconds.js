class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.centiseconds = 0;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      this.centiseconds++;

      if (callback) {
        callback();
      }
    }, 10);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 6000);
    return minutes;
  }

  getSeconds() {
    let seconds = Math.floor((this.currentTime / 100) % 60);
    return seconds;
  }

  getCentiseconds() {
    let centiseconds = this.centiseconds % 100;
    return centiseconds;
  }

  reset() {
    this.currentTime = 0;
    this.centiseconds = 0;
  }

  split() {
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();
    const centiseconds = this.getCentiseconds();

    const formattedMinutes = computeTwoDigitNumber(minutes);
    const formattedSeconds = computeTwoDigitNumber(seconds);
    const formattedCentiseconds = computeTwoDigitNumber(centiseconds);

    return `${formattedMinutes}:${formattedSeconds}:${formattedCentiseconds}`;
  }

  stop() {
    clearInterval(this.intervalId);
  }
}
