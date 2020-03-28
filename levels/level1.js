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

      new Obstacle(600, 50, 300, 100, { src: 'res/imgs/freezer.svg' }), // Freezer
      new Obstacle(600, 220, 300, 40), // Shelf below freezer
      new Obstacle(984, 0, 40, 370), // Right shelf
      new Obstacle(480, 0, 40, 160),

      // Bottom shelves
      new Obstacle(360, 456, 40, 120),
      new Obstacle(480, 336, 40, 240),
      new Obstacle(600, 336, 40, 240),
      new Obstacle(720, 336, 40, 240),

      new Obstacle(0, 0, 40, 576), // Left shelf
      new Obstacle(40, 0, 440, 80, { src: 'res/imgs/vegetables.png' }), // Top shelf

      new Obstacle(934, 420, 30, 120, { color: '#ddd' }), // Desk
    ],
    exit: new Obstacle(844, 556, 120, 20, { color: 'black' }), // Exit
    items: [
      new Item(40, 200, 'res/imgs/items/milk.svg'),
      new Item(640, 480, 'res/imgs/items/paper.svg'),
      new Item(700, 50, 'res/imgs/items/broccoli.svg'),
    ],
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
    seller: new Seller(990, 480), // Seller
  };
};