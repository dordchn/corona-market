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
      new Obstacle(40, 0, 440, 80, { src: 'res/imgs/vegetables.png' }), // Vegetables
      new Obstacle(600, 50, 300, 100, { src: 'res/imgs/freezer.png' }), // Freezer

      new Obstacle(600, 220, 300, 40), // Shelf below freezer
      new Obstacle(984, 0, 40, 400), // Right shelf
      new Obstacle(480, 0, 40, 160),

      // Bottom shelves
      new Obstacle(360, 456, 40, 120),
      new Obstacle(480, 336, 40, 240),
      new Obstacle(600, 336, 40, 240),
      new Obstacle(720, 336, 40, 240),

      new Obstacle(0, 0, 40, 576), // Left shelf
    ],
    items: [
      new Piece(40, 200, 40, 'res/imgs/items/cereal.svg'),
      new Piece(640, 480, 40, 'res/imgs/items/paper.svg'),
      new Piece(700, 50, 40, 'res/imgs/items/milk.svg'),
    ],
    viruses: [],
    customers: [
      new Customer([
        { x: 560, y: 25 },
        { x: 940, y: 25 },
        { x: 940, y: 180 },
        { x: 560, y: 180 },
      ], 'res/imgs/buyer1-left.svg', 'res/imgs/buyer1-right.svg'),
      new Customer([
        { x: 560, y: 360 },
        { x: 560, y: 550 },
      ], 'res/imgs/buyer3-left.svg', 'res/imgs/buyer3-right.svg'),
    ],
    seller: new Seller(990, 480),
    exit: new Obstacle(844, 556, 120, 20, { color: 'black' }),
  };
};