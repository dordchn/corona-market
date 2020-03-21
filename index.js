import Game from './game.js';
import level1 from './levels/level1.js';

let bgAudio = new Audio('res/background.mp3');
bgAudio.volume = 0.1;
bgAudio.loop = true;

let game = new Game();
game.init();

document.querySelector('#start_btn').addEventListener('click', () => {
  if (game.ready) {
    let startButton = document.querySelector('#start_btn');
    startButton.style.opacity = '0';
    setTimeout(() => {
      startButton.style.display = 'none';
      startButton.style.opacity = '0';

      bgAudio.play();
      game.loadLevel(level1);
    }, 500);
  }
});
