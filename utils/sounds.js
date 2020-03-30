
class Sounds {
  constructor() {
    this.muted = false;
    
    this.bgMain = this.createAudio('res/sounds/background.mp3', 0.4);
    this.bgMain.loop = true;
    this.lastCough = -1;
    this.bgCoughs = [
      this.createAudio('res/sounds/cough-boy9.mp3', 0.5),
      this.createAudio('res/sounds/cough-female602.mp3', 0.3),
      this.createAudio('res/sounds/clearing-throat-male2.mp3', 0.4),
      this.createAudio('res/sounds/clearing-throat-female.mp3', 0.4),
    ];

    this.audios = {};
  }

  playBackground() {
    this.bgMain.play();
    this.bgInterval = setInterval(() => {
      let coughIndex = (this.lastCough + getRandom(1, this.bgCoughs.length - 1)) % this.bgCoughs.length;
      this.lastCough = coughIndex;
      this.bgCoughs[this.lastCough].play();
    }, 7000);
  }

  stopBackground() {
    clearInterval(this.bgInterval);
    this.bgMain.pause();
    this.bgMain.currentTime = 0;
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
    audio.muted = this.muted;
    return audio;
  }

  getAllAudios() {
    return [...this.bgCoughs, this.bgMain, ...Object.values(this.audios)];
  }

  mute() {
    this.muted = true;
    this.getAllAudios().forEach(audio => audio.muted = true);
  }

  unmute() {
    this.muted = false;
    this.getAllAudios().forEach(audio => audio.muted = false);
  }
}

export default new Sounds();

function getRandom(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}