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
+-----------------------+
|XX   XXX    VVVVVVVVVV |
|   XXO   XX VVVVVVVVVV | 
| X   X XX X            |
| XXX   XX XXXXXXXX    X|
|   XXXXX     X    X   X|
| X  X  X FFF X X  X X  |
| X X   X FFF X XX   X X|
| XO  X   FFF X   X X  X|
| XXX X X FFF XXX X XX X|
|         FFF   X X    X|
|XX  XX X FFF X X  XX   |
|X    X X FFF X OXX     |
|X PP X X     XX X  EE  |
+-----------------------+
*/

export default () => {
  return {
    player: new Player(/*x=*/ 140, /*y=*/ 530, /*rotation=*/ 0),
    obstacles: [
      new Obstacle(80, 556, 120, 20, { color: 'black' }), // Entrance

      new Obstacle(584, 0, 440, 80, { src: 'res/imgs/vegetables.png' }), // Vegetables
      new Obstacle(418, 226, 100, 300, { src: 'res/imgs/freezer-90.png' }), // Freezer

      new Obstacle(50, 178, 308, 44),
new Obstacle(490, 134, 308, 44),
new Obstacle(50, 310, 220, 44),
new Obstacle(358, 46, 176, 44),
new Obstacle(974, 266, 50, 176),
new Obstacle(314, 398, 44, 176),
new Obstacle(578, 354, 132, 44),
new Obstacle(578, 222, 132, 44),
new Obstacle(754, 310, 44, 132),
new Obstacle(578, 442, 44, 132),
new Obstacle(226, 442, 44, 132),
new Obstacle(0, 442, 50, 132),
new Obstacle(710, 486, 88, 44),
new Obstacle(798, 442, 88, 44),
new Obstacle(842, 354, 88, 44),
new Obstacle(666, 266, 88, 44),
new Obstacle(754, 178, 88, 44),
new Obstacle(50, 134, 88, 44),
new Obstacle(182, 90, 88, 44),
new Obstacle(138, 46, 88, 44),
new Obstacle(226, 0, 88, 46),
new Obstacle(0, 0, 94, 46),
new Obstacle(974, 134, 50, 88),
new Obstacle(886, 222, 44, 88),
new Obstacle(666, 398, 44, 88),
new Obstacle(358, 90, 44, 88),
new Obstacle(314, 222, 44, 88),
new Obstacle(182, 222, 44, 88),
new Obstacle(710, 530, 44, 44),
new Obstacle(622, 530, 44, 44),
new Obstacle(182, 442, 44, 44),
new Obstacle(50, 442, 44, 44),
new Obstacle(842, 310, 44, 44),
new Obstacle(798, 222, 44, 44),
new Obstacle(578, 178, 44, 44),
new Obstacle(490, 90, 44, 44),



      // new Obstacle(984, 0, 40, 400), // Right shelf      

      new Obstacle(934, 420, 30, 120, { color: '#ddd' }), // Desk
    ],
    exit: new Obstacle(844, 556, 120, 20, { color: 'black' }), // Exit
    items: [
      new Piece(248, 68, 40, 'res/imgs/items/paper.svg'),
      new Piece(160, 288, 40, 'res/imgs/items/paper.svg'),
      new Piece(688, 508, 40, 'res/imgs/items/paper.svg'),
    ],
    customers: [
      // new Customer([
      //   { x: 560, y: 25 },
      //   { x: 940, y: 25 },
      //   { x: 940, y: 180 },
      //   { x: 560, y: 180 },
      // ], 'res/imgs/buyer1-left.svg', 'res/imgs/buyer1-right.svg'),
      // new Customer([
      //   { x: 560, y: 360 },
      //   { x: 560, y: 550 },
      // ], 'res/imgs/buyer3-left.svg', 'res/imgs/buyer3-right.svg'),
    ],
    viruses: [],
    seller: new Seller(990, 480), // Seller
  };
};