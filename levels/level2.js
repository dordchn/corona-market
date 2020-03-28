import Player from '../entities/player.js';
import Obstacle from '../entities/obstacle.js';
import Item from '../entities/item.js';
import Customer from '../entities/customer.js';
import Seller from '../entities/seller.js';

export default () => {
  return {
    player: new Player(/*x=*/ 140, /*y=*/ 530, /*rotation=*/ 0),
    obstacles: [
      new Obstacle(80, 556, 120, 20), // Entrance

      new Obstacle(934, 420, 30, 120), // Desk
    ],
    exit: new Obstacle(844, 556, 120, 20), // Exit
    items: [
      new Item(40, 200, 'res/imgs/items/milk.svg'),
    ],
    customers: [
      new Customer([
        { x: 560, y: 25 },
        { x: 940, y: 25 },
        { x: 940, y: 180 },
        { x: 560, y: 180 },
      ], 'res/imgs/buyer4-left.svg', 'res/imgs/buyer4-right.svg'),
    ],
    seller: new Seller(990, 480), // Seller
  };
};