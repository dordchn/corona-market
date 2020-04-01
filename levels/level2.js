import Player from '../entities/player.js';
import Obstacle from '../entities/obstacle.js';
import Item from '../entities/item.js';
import Customer from '../entities/customer.js';
import Seller from '../entities/seller.js';

export default () => {
  return {
    player: new Player(/*x=*/ 140, /*y=*/ 530, /*rotation=*/ 0),
    obstacles: [
      new Obstacle(80, 556, 120, 20, { color: 'black' }), // Entrance

      new Obstacle(934, 420, 30, 120, { color: '#ddd' }), // Desk

      new Obstacle(0, 0, 40, 576), // Left shelf
      new Obstacle(40, 0, 540, 40), // Top shelf

      new Obstacle(40, 100, 300, 100, { src: 'res/imgs/freezer.png' }), // Freezer
      new Obstacle(1024 - 80, -16, 80, 400, { src: 'res/imgs/vegetables-90.png' }), // Vegetables

      new Obstacle(540, 100, 40, 180), // Middle shelf 1
      new Obstacle(540, 366, 40, 576 - 366), // Middle shelf 2

      new Obstacle(700, 0, 40, 280), // Right shelf
      new Obstacle(700, 366, 1024 - 700, 40), // Right horizontal

      new Obstacle(240, 576 - 40, 540 - 240, 40), // Bottom
      new Obstacle(400, 420, 540 - 400, 40), // Bottom parallel
    ],
    exit: new Obstacle(844, 556, 120, 20, { color: 'black' }), // Exit
    items: [
      new Item(530, 390, 'res/imgs/items/honey.svg'),
      new Item(530, 500, 'res/imgs/items/bread.svg'),
      new Item(940, 220, 'res/imgs/items/cabbage.svg'),
    ],
    customers: [
      new Customer([
        { x: 500, y: 380 },
        { x: 370, y: 380 },
        { x: 370, y: 500 },
        { x: 500, y: 500 },
        { x: 370, y: 500 },
        { x: 370, y: 380 },
      ], 'res/imgs/buyer4-left.svg', 'res/imgs/buyer4-right.svg'),
      new Customer([
        { x: 70, y: 70 },
        { x: 370, y: 70 },
        { x: 370, y: 170 },
        { x: 370, y: 70 },
      ], 'res/imgs/buyer3-left.svg', 'res/imgs/buyer3-right.svg'),
      new Customer([
        { x: 910, y: 120 },
        { x: 910, y: 320 },
      ], 'res/imgs/buyer1-left.svg', 'res/imgs/buyer1-right.svg'),
    ],
    viruses: [
      new Obstacle(540, 302, 40, 40, { src: 'res/imgs/virus.svg' }),
    ],
    seller: new Seller(990, 480), // Seller
  };
};