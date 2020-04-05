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

      new Obstacle(534, 134, 264, 44),
      new Obstacle(534, 354, 176, 44),
      new Obstacle(94, 354, 176, 44),
      new Obstacle(182, 266, 176, 44),
      new Obstacle(974, 266, 50, 176),
      new Obstacle(446, 0, 44, 178),
      new Obstacle(314, 354, 44, 176),
      new Obstacle(0, 398, 50, 176),
      new Obstacle(50, 178, 132, 44),
      new Obstacle(754, 310, 44, 132),
      new Obstacle(578, 442, 44, 132),
      new Obstacle(314, 134, 44, 132),
      new Obstacle(226, 442, 44, 132),
      new Obstacle(182, 0, 44, 134),
      new Obstacle(0, 0, 50, 134),
      new Obstacle(710, 486, 88, 44),
      new Obstacle(798, 442, 88, 44),
      new Obstacle(842, 354, 88, 44),
      new Obstacle(666, 266, 88, 44),
      new Obstacle(50, 266, 88, 44),
      new Obstacle(754, 178, 88, 44),
      new Obstacle(974, 134, 50, 88),
      new Obstacle(886, 222, 44, 88),
      new Obstacle(666, 398, 44, 88),
      new Obstacle(270, 46, 44, 88),
      new Obstacle(622, 530, 44, 44),
      new Obstacle(358, 486, 44, 44),
      new Obstacle(182, 442, 44, 44),
      new Obstacle(50, 442, 44, 44),
      new Obstacle(842, 310, 44, 44),
      new Obstacle(182, 310, 44, 44),
      new Obstacle(534, 266, 44, 44),
      new Obstacle(798, 222, 44, 44),
      new Obstacle(666, 222, 44, 44),
      new Obstacle(578, 178, 44, 44),
      new Obstacle(270, 178, 44, 44),
      new Obstacle(358, 134, 44, 44),
      new Obstacle(94, 134, 44, 44),
      new Obstacle(490, 46, 44, 44),
      new Obstacle(358, 46, 44, 44),
      new Obstacle(138, 46, 44, 44),


      // new Obstacle(984, 0, 40, 400), // Right shelf      

      new Obstacle(934, 420, 30, 120, { color: '#ddd' }), // Desk
    ],
    exit: new Obstacle(844, 556, 120, 20, { color: 'black' }), // Exit
    items: [
      new Piece(248, 22, 40, 'res/imgs/items/paper.svg'),
      new Piece(732, 112, 40, 'res/imgs/items/paper.svg'),
      new Piece(292, 156, 40, 'res/imgs/items/paper.svg'),
      new Piece(732, 200, 40, 'res/imgs/items/paper.svg'),
      new Piece(732, 420, 40, 'res/imgs/items/paper.svg'),
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
    viruses: [
      new Piece(248, 68, 40, 'res/imgs/virus.svg'),
      new Piece(644, 112, 40, 'res/imgs/virus.svg'),
      new Piece(820, 332, 40, 'res/imgs/virus.svg'),
      new Piece(732, 552, 40, 'res/imgs/virus.svg'),

    ],
    seller: new Seller(990, 480), // Seller
  };
};