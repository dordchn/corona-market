import Player from '../entities/player.js';
import Obstacle from '../entities/obstacle.js';
import Piece from '../entities/piece.js';
import Customer from '../entities/customer.js';
import Seller from '../entities/seller.js';

/*
  Maze map!
  - Grid of 13(rows) x 23(cols) cells, 44x44 px.
  - First & last rows are 46px.
  - First & last cols are 50px.
  Map:
+ - - - - - - - - - - - - - - - - - - - - - - - +
|                                               |
|                                               |
|                                               |
|                                               |
|                                               |
|                                               |
|                                               |
|                                               |
|                                               |
|                                               |
|                                               |
|                                               |
|                                               |
+ - - - - - - - - - - - - - - - - - - - - - - - +
*/

export default () => {
  return {
    player: new Player(/*x=*/ 140, /*y=*/ 530, /*rotation=*/ 0),
    obstacles: [
      new Obstacle(80, 556, 120, 20, { color: 'black' }), // Entrance
      // new Obstacle(600, 50, 300, 100, { src: 'res/imgs/freezer.png' }), // Freezer

      new Obstacle(0, 0, 45, 100), // Left shelf
      new Obstacle(90, 0, 45, 100), // Left shelf
      
      
      // new Obstacle(984, 0, 40, 400), // Right shelf      
      // new Obstacle(40, 0, 440, 80, { src: 'res/imgs/vegetables.png' }), // Vegetables

      new Obstacle(934, 420, 30, 120, { color: '#ddd' }), // Desk
    ],
    exit: new Obstacle(844, 556, 120, 20, { color: 'black' }), // Exit
    items: [
      new Piece(40, 200, 40, 'res/imgs/items/cereal.svg'),
      new Piece(640, 480, 40, 'res/imgs/items/paper.svg'),
      new Piece(700, 50, 40, 'res/imgs/items/milk.svg'),
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
    viruses: [],
    seller: new Seller(990, 480), // Seller
  };
};