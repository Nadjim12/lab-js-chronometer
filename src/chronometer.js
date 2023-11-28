class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervall = 0;
  }

  start(printTimeCallback) {
    console.log(printTimeCallback);
    
    this.intervallId =
    setInterval(() => {
      { this.currentTime += 1;
      printTimeCallback(this.currentTime);}
    },1000)
    
  }

  getMinutes() {
    let Minutes= Math.floor(this.currentTime / 60);
    return Minutes; 
  }

  getSeconds() {
    let remainingSeconds = this.currentTime % 60;
    return remainingSeconds;
  }

  computeTwoDigitNumber(value) {
    let paddedValue = String.value().padStart(2,"0");
    return paddedValue;
  }

  stop() {
    clearInterval(this.intervallId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();

    const formattedMinutes = computeTwoDigitNumber(minutes);
    const formattedSeconds = computeTwoDigitNumber(seconds);

    return `${formattedMinutes}:${formattedSeconds}`;

  }
}
