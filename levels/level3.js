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
      new Obstacle(320, 576 - 80, 400, 80, { src: 'res/imgs/vegetables-180.png' }), // Vegetables
      new Obstacle(370, 50, 300, 100, { src: 'res/imgs/freezer.png' }), // Freezer

      // Vertical - Up
      new Obstacle(0, 0, 40, 576),
      new Obstacle(280, 0, 40, 300),
      new Obstacle(720, 0, 40, 184),
      new Obstacle(984, 0, 40, 400),

      // Vertical - Bottom
      new Obstacle(280, 376, 40, 200),
      new Obstacle(720, 260, 40, 316),

      // Horizontal
      new Obstacle(40, 0, 240, 40),
      new Obstacle(760, 0, 224, 40),
      new Obstacle(320, 260, 140, 40),
      new Obstacle(720 - 140, 260, 140, 40),
    ],
    items: [
      new Piece(160, 40, 40, 'res/imgs/items/paper.svg'),
      new Piece(660, 490, 40, 'res/imgs/items/tomato.svg'),
      new Piece(870, 40, 40, 'res/imgs/items/juice.svg'),
    ],
    viruses: [
      new Piece(360, 230, 40, 'res/imgs/virus.svg'),
      new Piece(680, 330, 40, 'res/imgs/virus.svg'),
      new Piece(798, 78, 40, 'res/imgs/virus.svg'),
      new Piece(942, 78, 40, 'res/imgs/virus.svg'),
    ],
    customers: [
      new Customer([
        { x: 490, y: 180 },
        { x: 490, y: 460 },
        { x: 550, y: 460 },
        { x: 550, y: 180 },
      ], 'res/imgs/buyer2-left.svg', 'res/imgs/buyer2-right.svg'),
      new Customer([
        { x: 80, y: 260 },
        { x: 240, y: 260 },
      ], 'res/imgs/buyer3-left.svg', 'res/imgs/buyer3-right.svg'),
      new Customer([
        { x: 785, y: 158 },
        { x: 955, y: 158 },
      ], 'res/imgs/buyer3-left.svg', 'res/imgs/buyer3-right.svg'),
    ],
    seller: new Seller(990, 480),
    exit: new Obstacle(844, 556, 120, 20, { color: 'black' }),
  };
};