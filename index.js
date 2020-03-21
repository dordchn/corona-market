import level1 from './levels/level1.js';

let bgAudio = new Audio('res/background.mp3');
bgAudio.volume = 0.1;
bgAudio.loop = true;

let game = document.querySelector('x-game');
game.init();

game.addEventListener('win', () => {
  console.log('win!');
});

game.addEventListener('loss', () => {
  console.log('loss :(');
});

document.querySelector('#start_btn').addEventListener('click', () => {
  if (game.ready) {
    let startButton = document.querySelector('#start_btn');
    startButton.style.display = 'none';  
    bgAudio.play();
    game.loadLevel(level1);
  }
});
