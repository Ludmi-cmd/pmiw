class Bala {
  constructor(x, y, destinoX, destinoY) {
    this.x = x;
    this.y = y;
    this.velocidad = 7;

    let distancia = dist(x, y, destinoX, destinoY);

    this.velX = (destinoX - x) / distancia * this.velocidad;
    this.velY = (destinoY - y) / distancia * this.velocidad;
  }

  mover() {
    this.x += this.velX;
    this.y += this.velY;
  }

  mostrar() {
    fill(255, 220, 0);
    noStroke();
    ellipse(this.x, this.y, 8, 8);
  }

  fuera() {
    return this.x < 0 || this.x > 800 || this.y < 0 || this.y > 400;
  }
}
