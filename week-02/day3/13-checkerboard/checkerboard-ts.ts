'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

let w: number = canvas.width / 8;
let h: number = canvas.height / 8;
let maxJ: number = Math.floor(w);
let maxI: number = Math.floor(h);

// draw squares in two lines at once
function drawSquare(x: number, y: number, o: number, p: number) {
  ctx.fillRect(x, y, w, h);
  ctx.fillRect(x + w, y + h, w, h);
}

//  10 x 10 checkerboard every size of canvas with boxes
for (let i: number = 0; i <= maxI; i++) {
  for (let j: number = 0; j <= maxJ; j++) {
    drawSquare(2 * i * w, 2 * j * h, w, h);
  }
}

// let size: number = 120;
// let s: number = 60;
// let w = canvas.width;
// let h = canvas.height;
// let maxI = Math.floor(w / size) + 1;
// let maxJ = Math.floor(h / size) + 1;

// for (let i: number= 0; i < maxI; i ++) {
//   for (let j: number = 0; j < maxJ; j ++) {
//     drawSquare(i * size, j * size, 'black');

//   }
// }

// function drawSquare(x: number, y: number, color: string) {
//   ctx.fillStyle = color;
//   ctx.fillRect(x,y,s,s);
//   ctx.fillRect(x + s, y + s, s, s);
// }
