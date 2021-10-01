function getRandomCoordinates() {
  let x = Math.floor(Math.random() * CANVAS_SIZE[0] / SCALE);
  let y = Math.floor(Math.random() * CANVAS_SIZE[1] / SCALE);
  return [x,y]
}

const LEVELS = {
  1: {
    CANVAS_SIZE: [1300, 600],
    SNAKE_START: [
      [30, 15],
      [30, 16]
    ],
    SCALE = 15,
    SPEED = 50
  },
  2: {
    CANVAS_SIZE: [1300, 600],
    SNAKE_START: [
      [30, 15],
      [30, 16]
    ],
    SCALE = 15,
    SPEED = 50
  },
}

const CANVAS_SIZE = [1300, 600];
const SNAKE_START = [
  [30, 15],
  [30, 16]
];
const SCALE = 15;
const SPEED = 50;


const APPLE_START = [getRandomCoordinates()];
const DIRECTIONS = {
  38: [0, -1], // up
  87: [0, -1],
  40: [0, 1], // down
  83: [0, 1],
  37: [-1, 0], // left
  65: [-1, 0],
  39: [1, 0], // right
  68: [1, 0]
};



export {
  LEVELS,
  APPLE_START,
  DIRECTIONS
};