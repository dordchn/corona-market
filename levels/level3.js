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

      // Props
      new Obstacle(370, 50, 300, 100, { src: 'res/imgs/freezer.png' }), // Freezer
      new Obstacle(320, 576 - 80, 400, 80, { src: 'res/imgs/vegetables-180.png' }), // Vegetables
    ],
    exit: new Obstacle(844, 556, 120, 20, { color: 'black' }), // Exit
    items: [
      new Item(160, 40, 'res/imgs/items/paper.svg'),
      new Item(660, 490, 'res/imgs/items/tomato.svg'),
      new Item(870, 40, 'res/imgs/items/juice.svg'),
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
        { x: 790, y: 160 },
        { x: 950, y: 160 },
      ], 'res/imgs/buyer3-left.svg', 'res/imgs/buyer3-right.svg'),
    ],
    viruses: [
      new Obstacle(340, 210, 40, 40, { src: 'res/imgs/virus.svg' }),
      new Obstacle(660, 310, 40, 40, { src: 'res/imgs/virus.svg' }),
      new Obstacle(780, 60, 40, 40, { src: 'res/imgs/virus.svg' }),
      new Obstacle(920, 60, 40, 40, { src: 'res/imgs/virus.svg' }),
    ],
    seller: new Seller(990, 480), // Seller
  };
};