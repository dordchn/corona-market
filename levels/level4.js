import Player from '../entities/player.js';
import Obstacle from '../entities/obstacle.js';
import Piece from '../entities/piece.js';
import Customer from '../entities/customer.js';
import Seller from '../entities/seller.js';

export default () => {
  return {
    player: new Player(/*x=*/ 140, /*y=*/ 530, /*rotation=*/ 0),
    obstacles: [
      new Obstacle(80, 556, 120, 20, { color: 'black' }), // Entrance
      new Obstacle(934, 420, 30, 120, { color: '#ddd' }), // Desk
      new Obstacle(312 + 6, 0, 400, 80, { src: 'res/imgs/vegetables.png' }), // Vegetables
      new Obstacle(458, 226, 100, 300, { src: 'res/imgs/freezer-90.png' }), // Freezer

      // Vertical
      new Obstacle(0, 0, 40, 576),
      new Obstacle(240, 160, 40, 576 - 160),
      new Obstacle(488, 80, 40, 280),
      new Obstacle(744, 160, 40, 576 - 160),
      new Obstacle(984, 0, 40, 400),

      // Horizontal
      new Obstacle(40, 0, 278, 40),
      new Obstacle(718, 0, 266, 40),
    ],
    items: [
      new Piece(70, 70, 40, 'res/imgs/items/broccoli.svg'),
      new Piece(724, 380, 40, 'res/imgs/items/juice.svg'),
      new Piece(954, 60, 40, 'res/imgs/items/bread.svg'),
    ],
    viruses: [
      // Left
      new Piece(310, 260, 40, 'res/imgs/virus.svg'),
      new Piece(426, 260, 40, 'res/imgs/virus.svg'),
      new Piece(368, 375, 40, 'res/imgs/virus.svg'),
      new Piece(310, 490, 40, 'res/imgs/virus.svg'),
      new Piece(426, 490, 40, 'res/imgs/virus.svg'),
      // Right
      new Piece(810, 180, 40, 'res/imgs/virus.svg'),
      new Piece(855, 180, 40, 'res/imgs/virus.svg'),
      new Piece(870, 280, 40, 'res/imgs/virus.svg'),
      new Piece(915, 280, 40, 'res/imgs/virus.svg'),
      new Piece(960, 280, 40, 'res/imgs/virus.svg'),
      new Piece(810, 380, 40, 'res/imgs/virus.svg'),
      new Piece(855, 380, 40, 'res/imgs/virus.svg'),
    ],
    customers: [
      // Left column
      new Customer([
        { x: 80, y: 450 },
        { x: 200, y: 450 },
      ], 'res/imgs/buyer1-left.svg', 'res/imgs/buyer1-right.svg'),
      new Customer([
        { x: 200, y: 350 },
        { x: 80, y: 350 },
      ], 'res/imgs/buyer2-left.svg', 'res/imgs/buyer2-right.svg'),
      new Customer([
        { x: 80, y: 250 },
        { x: 200, y: 250 },
      ], 'res/imgs/buyer3-left.svg', 'res/imgs/buyer3-right.svg'),
      // Right column
      new Customer([
        { x: 704, y: 280 },
        { x: 584, y: 280 },
      ], 'res/imgs/buyer4-left.svg', 'res/imgs/buyer4-right.svg'),
      new Customer([
        { x: 584, y: 380 },
        { x: 704, y: 380 },
      ], 'res/imgs/buyer1-left.svg', 'res/imgs/buyer1-right.svg'),
      new Customer([
        { x: 704, y: 480 },
        { x: 584, y: 480 },
      ], 'res/imgs/buyer3-left.svg', 'res/imgs/buyer3-right.svg'),
    ],
    seller: new Seller(990, 480),
    exit: new Obstacle(844, 556, 120, 20, { color: 'black' }),
  };
};
