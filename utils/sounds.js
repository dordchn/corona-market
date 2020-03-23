
class Sounds {
  constructor() {
    this.bgMain = this.createAudio('res/background.mp3', 0.4);
    this.bgMain.loop = true;
    this.bgCoughs = [
      this.createAudio('res/cough-boy9.mp3', 0.5),
      this.createAudio('res/cough-female602.mp3', 0.3),
      this.createAudio('res/clearing-throat-male2.mp3', 0.4),
      this.createAudio('res/clearing-throat-female.mp3', 0.4),
    ];

    this.audios = {};
  }

  playBackground() {
    this.bgMain.play();
    this.bgInterval = setInterval(() => {
      this.bgCoughs[Math.floor(this.bgCoughs.length * Math.random())].play();
    }, 8000);
  }

  stopBackground() {
    clearInterval(this.bgInterval);
    this.bgMain.pause();
    this.bgMain.currentTime = 0;
    this.bg
    this.bgCoughs.forEach(cough => {
      cough.pause();
      cough.currentTime = 0;
    });
  }

  play(src, volume) {
    if (src in this.audios) {
      this.audios[src].currentTime = 0;
    } else {
      this.audios[src] = this.createAudio(src, volume);
    }
    return new Promise((res, rej) => {
      this.audios[src].onended = () => res();      
      this.audios[src].play();
    });
  }

  createAudio(src, volume = 1) {
    let audio = new Audio(src);
    audio.volume = volume;
    return audio;
  }
}

export default new Sounds();