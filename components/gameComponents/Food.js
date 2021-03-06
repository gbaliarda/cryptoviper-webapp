export default class Food {

  constructor(color, radius, minX, maxX, minY, maxY) {
    this.color = color;
    this.radius = radius;
    this.x = this.getRandomPosition(minX + this.radius, maxX - this.radius);
    this.y = this.getRandomPosition(minY + this.radius, maxY - this.radius);
  }

  getRandomPosition(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

}