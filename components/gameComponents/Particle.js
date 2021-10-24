export default class Particle {

  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    this.alpha = 1;
  }

  draw(ctx) {
    // Entre save() y restore() cambiamos la opacidad del context para que solo se aplique a esto
    ctx.save()
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore()
  }

  update(ctx) {
    this.draw(ctx);
    // Friction, se van desacelerando
    this.velocity.x *= 0.99;
    this.velocity.y *= 0.99;
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    // Se van desvaneciendo
    this.alpha -= 0.01;
  }

}