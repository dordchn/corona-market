import level1 from './levels/level1.js';
import level2 from './levels/level2.js';
import sounds from './utils/sounds.js';

let startButton = document.querySelector('#start_button');
let topRow = document.querySelector('#top_row');

let levels = [level1, level2];
let levelIndex = 0;

let game = document.querySelector('x-game');
game.init();

game.addEventListener('point', async () => {
  await sounds.play('res/sounds/point.mp3', 0.7);
});

game.addEventListener('win', async () => {
  sounds.stopBackground();
  await sounds.play('res/sounds/win.mp3', 0.7);
  levelIndex = (levelIndex + 1) % levels.length;
  if (levelIndex == 0) { // Completed game
    game.reset();
    startButton.style.display = '';
  } else {
    game.loadLevel(levels[levelIndex]);
    sounds.playBackground();
  }
});

game.addEventListener('loss', async () => {
  sounds.stopBackground();
  await sounds.play('res/sounds/cough-boy9.mp3');
  await sounds.play('res/sounds/loss.mp3', 0.7);
  game.reset();
  topRow.style.visibility = 'hidden';
  startButton.style.display = '';
  levelIndex = 0;
});

document.querySelector('#start_button').addEventListener('click', async () => {
  if (game.ready) {
    startButton.style.display = 'none';
    game.loadLevel(levels[levelIndex]);
    sounds.playBackground();
    topRow.style.visibility = 'visible';
  }
});

const muteButton = document.querySelector('#mute_button');
const unmuteButton = document.querySelector('#unmute_button');

muteButton.addEventListener('click', function () {
  sounds.mute();
  muteButton.style.display = 'none';
  unmuteButton.style.display = '';
});

unmuteButton.addEventListener('click', function () {
  sounds.unmute();
  unmuteButton.style.display = 'none';
  muteButton.style.display = '';
});