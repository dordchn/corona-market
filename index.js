import level1 from './levels/level1.js';
import level2 from './levels/level2.js';
import sounds from './utils/sounds.js';

let startButton = document.querySelector('#start_button');
let topRow = document.querySelector('#top_row');
let livesContainer = document.querySelector('#lives');

let levels = [level1, level2];
let levelIndex = 0;

let game = document.querySelector('x-game');
game.init();

game.addEventListener('point', async () => {
  await sounds.play('res/sounds/point.mp3', 0.7);
});

game.addEventListener('win', async () => {
  gtag('event', 'win', { 'event_category': 'Level', 'event_label': 'Level' + (levelIndex + 1) });
  sounds.stopBackground();
  await sounds.play('res/sounds/win.mp3', 0.7);
  levelIndex = (levelIndex + 1) % levels.length;
  if (levelIndex == 0) { // Completed game
    gtag('event', 'win', { 'event_category': 'Game'});
    loadMenu();
  } else {
    game.loadLevel(levels[levelIndex]);
    sounds.playBackground();
  }
});

game.addEventListener('loss', async () => {
  gtag('event', 'loss', { 'event_category': 'Level', 'event_label': 'Level' + (levelIndex + 1) });
  sounds.stopBackground();
  await sounds.play('res/sounds/cough-boy9.mp3');
  let lives = livesContainer.querySelectorAll('img:not(.used)');
  if (lives.length > 0) {
    await sounds.play('res/sounds/life.mp3', 0.7);
    lives[0].classList.add('used');
    game.loadLevel(levels[levelIndex]);
    sounds.playBackground();
  } else {
    gtag('event', 'loss', { 'event_category': 'Game', 'event_label': 'Level' + (levelIndex + 1) });
    await sounds.play('res/sounds/loss.mp3', 0.7);
    loadMenu();
    levelIndex = 0;
  }
});

function loadMenu() {
  game.reset();
  topRow.style.visibility = 'hidden';
  startButton.style.display = '';
  Array.from(livesContainer.children).forEach(life => life.classList.add('used'));
}

startButton.addEventListener('click', async () => {
  if (game.ready) {
    gtag('event', 'start', { 'event_category': 'Game' });
    Array.from(livesContainer.children).forEach(life => life.classList.remove('used'));
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
