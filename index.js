import level1 from './levels/level1.js';
import sounds from './utils/sounds.js';

let game = document.querySelector('x-game');
game.init();

game.addEventListener('win', () => {
  console.log('win!');
  sounds.stopBackground();
});

game.addEventListener('loss', async () => {
  console.log('loss :(');
  sounds.stopBackground();
  await sounds.play('res/cough-boy9.mp3');
});

document.querySelector('#start_btn').addEventListener('click',async () => {
  if (game.ready) {
    let startButton = document.querySelector('#start_btn');
    startButton.style.display = 'none';
    game.loadLevel(level1);
    await sounds.play('res/cough-boy9.mp3');
    sounds.playBackground();
  }
});
