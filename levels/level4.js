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

      // Vertical
      new Obstacle(0, 0, 40, 576),
      new Obstacle(240, 160, 40, 576 - 160),
      new Obstacle(488, 80, 40, 280),
      new Obstacle(744, 160, 40, 576 - 160),
      new Obstacle(984, 0, 40, 400),

      // Horizontal
      new Obstacle(40, 0, 278, 40),
      new Obstacle(718, 0, 266, 40),

      // Props
      new Obstacle(458, 226, 100, 300, { src: 'res/imgs/freezer-90.png' }), // Freezer
      new Obstacle(312 + 6, 0, 400, 80, { src: 'res/imgs/vegetables.png' }), // Vegetables
    ],
    exit: new Obstacle(844, 556, 120, 20, { color: 'black' }), // Exit
    items: [
      new Item(70, 70, 'res/imgs/items/broccoli.svg'),
      new Item(724, 380, 'res/imgs/items/juice.svg'),
      new Item(954, 60, 'res/imgs/items/bread.svg'),
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
    viruses: [
      // Left
      new Obstacle(290, 240, 40, 40, { src: 'res/imgs/virus.svg' }),
      new Obstacle(406, 240, 40, 40, { src: 'res/imgs/virus.svg' }),
      new Obstacle(348, 355, 40, 40, { src: 'res/imgs/virus.svg' }),
      new Obstacle(290, 470, 40, 40, { src: 'res/imgs/virus.svg' }),
      new Obstacle(406, 470, 40, 40, { src: 'res/imgs/virus.svg' }),
      // Right
      new Obstacle(790, 160, 40, 40, { src: 'res/imgs/virus.svg' }),
      new Obstacle(835, 160, 40, 40, { src: 'res/imgs/virus.svg' }),
      // new Obstacle(880, 160, 40, 40, { src: 'res/imgs/virus.svg' }), 
      new Obstacle(850, 260, 40, 40, { src: 'res/imgs/virus.svg' }),
      new Obstacle(895, 260, 40, 40, { src: 'res/imgs/virus.svg' }),
      new Obstacle(940, 260, 40, 40, { src: 'res/imgs/virus.svg' }), 
      new Obstacle(790, 360, 40, 40, { src: 'res/imgs/virus.svg' }),
      new Obstacle(835, 360, 40, 40, { src: 'res/imgs/virus.svg' }),
    ],
    seller: new Seller(990, 480), // Seller
  };
};
