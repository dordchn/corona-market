import level1 from './levels/level1.js';
import sounds from './utils/sounds.js';

let startButton = document.querySelector('#start_btn');

let game = document.querySelector('x-game');
game.init();

game.addEventListener('point', async () => {
  await sounds.play('res/point.mp3', 0.7);
});

game.addEventListener('win', async () => {
  sounds.stopBackground();
  await sounds.play('res/win.mp3', 0.7);
  game.reset();
  startButton.style.display = '';
});

game.addEventListener('loss', async () => {
  sounds.stopBackground();
  await sounds.play('res/cough-boy9.mp3');
  await sounds.play('res/loss.mp3', 0.7);
  game.reset();
  startButton.style.display = '';
});

document.querySelector('#start_btn').addEventListener('click',async () => {
  if (game.ready) {
    startButton.style.display = 'none';
    game.loadLevel(level1);
    sounds.playBackground();
  }
});
