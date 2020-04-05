import Player from '../entities/player.js';
import Obstacle from '../entities/obstacle.js';
import Piece from '../entities/piece.js';
import Customer from '../entities/customer.js';
import Seller from '../entities/seller.js';

// Rendered from './level4.lvl'

export default () => {
  return {
    player: new Player(/*x=*/ 140, /*y=*/ 530, /*rotation=*/ 0),
    obstacles: [
      new Obstacle(80, 556, 120, 20, { color: 'black' }), // Entrance
      new Obstacle(934, 420, 30, 120, { color: '#ddd' }), // Desk
      new Obstacle(280, 0, 440, 80, { src: 'res/imgs/vegetables.png' }), // Vegetables
      new Obstacle(350, 170, 300, 100, { src: 'res/imgs/freezer.png' }), // Freezer

      // Left section
      new Obstacle(0, 0, 240, 40),
      new Obstacle(0, 220, 40, 356),
      new Obstacle(52, 100, 40, 60),
      new Obstacle(100, 220, 140, 40),
      new Obstacle(100, 320, 80, 80),
      new Obstacle(145, 100, 40, 120),
      new Obstacle(240, 0, 40, 80),
      new Obstacle(240, 220, 40, 356),

      // Middle section
      new Obstacle(350, 336, 300, 40),
      new Obstacle(350, 436, 300, 40),
      new Obstacle(350, 536, 300, 40),
      new Obstacle(720, 0, 40, 80),
      new Obstacle(720, 220, 40, 356),

      // Right section
      new Obstacle(760, 0, 224, 40),
      new Obstacle(984, 0, 40, 400),
      new Obstacle(884, 170, 40, 50),
      new Obstacle(760, 220, 164, 40),
      new Obstacle(910, 360, 74, 40),
    ],
    items: [
      new Piece(500, 506, 40, 'res/imgs/items/apple.svg'),
      new Piece(954, 70, 40, 'res/imgs/items/paper.svg'),
    ],
    viruses: [
      new Piece(500, 303, 40, 'res/imgs/virus.svg'),
      new Piece(500, 406, 40, 'res/imgs/virus.svg'),
    ],
    customers: [
      new Customer([
        { x: 210, y: 290 },
        { x: 70, y: 290 },
        { x: 70, y: 430 },
        { x: 210, y: 430 },
      ], 'res/imgs/buyer3-left.svg', 'res/imgs/buyer3-right.svg'),
      new Customer([
        { x: 22, y: 70 },
        { x: 122, y: 70 },
        { x: 122, y: 190 },
        { x: 22, y: 190 },
      ], 'res/imgs/buyer3-left.svg', 'res/imgs/buyer3-right.svg'),
      new Customer([
        { x: 220, y: 65 },
        { x: 220, y: 195 },
      ], 'res/imgs/buyer3-left.svg', 'res/imgs/buyer3-right.svg'),
      new Customer([
        { x: 370, y: 125 },
        { x: 630, y: 125 },
      ], 'res/imgs/buyer3-left.svg', 'res/imgs/buyer3-right.svg'),
      new Customer([
        { x: 315, y: 300 },
        { x: 315, y: 546 },
      ], 'res/imgs/buyer3-left.svg', 'res/imgs/buyer3-right.svg'),
      new Customer([
        { x: 685, y: 300 },
        { x: 685, y: 546 },
      ], 'res/imgs/buyer3-left.svg', 'res/imgs/buyer3-right.svg'),
      new Customer([
        { x: 884, y: 85 },
        { x: 884, y: 140 },
        { x: 954, y: 140 },
        { x: 884, y: 140 },
      ], 'res/imgs/buyer3-left.svg', 'res/imgs/buyer3-right.svg'),
      new Customer([
        { x: 785, y: 310 },
        { x: 960, y: 310 },
      ], 'res/imgs/buyer3-left.svg', 'res/imgs/buyer3-right.svg'),
    ],
    seller: new Seller(990, 480),
    exit: new Obstacle(844, 556, 120, 20, { color: 'black' }),
  };
};