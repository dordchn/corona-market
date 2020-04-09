import Entity from '../entities/entity.js';
import Player from '../entities/player.js';
import Obstacle from '../entities/obstacle.js';
import Piece from '../entities/piece.js';
import Seller from '../entities/seller.js';

// Rendered from './level4.lvl'

export default () => {
  return {
    player: new Player(/*x=*/ 140, /*y=*/ 530, /*rotation=*/ 0, {size: 36, speed: 140}), // Small BB size & lower speed to allow easier navigation
    obstacles: [
      new Obstacle(80, 556, 120, 20, { color: 'black' }), // Entrance
      new Obstacle(934, 420, 30, 120, { color: '#ddd' }), // Desk
      new Obstacle(584, 0, 440, 80, { src: 'res/imgs/vegetables.png' }), // Vegetables
      new Obstacle(418, 226, 100, 300, { src: 'res/imgs/freezer-90.png' }), // Freezer

      new Obstacle(578, 134, 220, 44),
      new Obstacle(534, 354, 176, 44),
      new Obstacle(94, 354, 176, 44),
      new Obstacle(182, 266, 176, 44),
      new Obstacle(0, 398, 50, 178),
      new Obstacle(974, 266, 50, 132),
      new Obstacle(886, 222, 44, 132),
      new Obstacle(754, 310, 44, 132),
      new Obstacle(578, 442, 44, 134),
      new Obstacle(446, 0, 44, 134),
      new Obstacle(314, 354, 44, 132),
      new Obstacle(314, 134, 44, 132),
      new Obstacle(226, 442, 44, 134),
      new Obstacle(182, 0, 44, 134),
      new Obstacle(710, 486, 88, 44),
      new Obstacle(798, 442, 88, 44),
      new Obstacle(50, 266, 88, 44),
      new Obstacle(754, 178, 88, 44),
      new Obstacle(842, 310, 44, 88),
      new Obstacle(666, 398, 44, 88),
      new Obstacle(270, 46, 44, 88),
      new Obstacle(0, 0, 50, 90),
      new Obstacle(622, 530, 44, 46),
      new Obstacle(358, 486, 44, 44),
      new Obstacle(182, 442, 44, 44),
      new Obstacle(50, 442, 44, 44),
      new Obstacle(710, 266, 44, 44),
      new Obstacle(534, 266, 44, 44),
      new Obstacle(798, 222, 44, 44),
      new Obstacle(666, 222, 44, 44),
      new Obstacle(974, 178, 50, 44),
      new Obstacle(578, 178, 44, 44),
      new Obstacle(270, 178, 44, 44),
      new Obstacle(138, 178, 44, 44),
      new Obstacle(50, 178, 44, 44),
      new Obstacle(490, 134, 44, 44),
      new Obstacle(402, 134, 44, 44),
      new Obstacle(94, 134, 44, 44),
      new Obstacle(490, 46, 44, 44),
      new Obstacle(358, 46, 44, 44),
      new Obstacle(138, 46, 44, 44),
    ],
    items: [
      // new Piece(248, 22, 40, 'res/imgs/items/paper.svg'),
      // new Piece(732, 104, 40, 'res/imgs/items/carrot.svg'),
      // new Piece(292, 244, 40, 'res/imgs/items/bread.svg'),
      // new Piece(732, 200, 40, 'res/imgs/items/avocado.svg'),
      // new Piece(732, 420, 40, 'res/imgs/items/milk.svg'),
      // new Piece(688, 508, 40, 'res/imgs/items/juice.svg'),

    ],
    viruses: [
      new Piece(72, 22, 40, 'res/imgs/virus.svg'),
      new Piece(248, 68, 40, 'res/imgs/virus.svg'),
      new Piece(22, 112, 40, 'res/imgs/virus.svg'),
      new Piece(644, 112, 40, 'res/imgs/virus.svg'),
      new Piece(468, 156, 40, 'res/imgs/virus.svg'),
      new Piece(996, 156, 40, 'res/imgs/virus.svg'),
      new Piece(116, 200, 40, 'res/imgs/virus.svg'),
      new Piece(688, 288, 40, 'res/imgs/virus.svg'),
      new Piece(204, 332, 40, 'res/imgs/virus.svg'),
      new Piece(820, 332, 40, 'res/imgs/virus.svg'),
      new Piece(22, 376, 40, 'res/imgs/virus.svg'),
      new Piece(996, 420, 40, 'res/imgs/virus.svg'),
      new Piece(380, 464, 40, 'res/imgs/virus.svg'),
      new Piece(336, 508, 40, 'res/imgs/virus.svg'),
      new Piece(996, 508, 40, 'res/imgs/virus.svg'),
      new Piece(732, 552, 40, 'res/imgs/virus.svg'),
    ],
    customers: [],
    fluffs: [
      new Entity(110, 440, 60, 60, 'res/imgs/closed.png'),
    ],
    seller: new Seller(-40, -40), // No seller in this level
    exit: new Obstacle(844, 556, 120, 20, { color: 'black' }),
  };
};