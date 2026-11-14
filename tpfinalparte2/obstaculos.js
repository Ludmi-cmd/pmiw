class Obstaculo {
  constructor(x, y, ancho, alto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
  }

  mostrar() {
    fill(100);
    rect(this.x, this.y, this.ancho, this.alto);
  }
}
