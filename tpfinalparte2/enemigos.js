class Secuestrador {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocidad = 1;
    this.tamano = 30;

    this.direccion = "frente";
    this.frame = 0;
    this.contador = 0;

    this.corriendo = false;
    this.alerta = false;
    this.quieto = false;
  }

  mover(objetivoX, objetivoY) {
    let anteriorX = this.x;
    let anteriorY = this.y;

    let distancia = dist(this.x, this.y, objetivoX, objetivoY);

    this.corriendo = distancia < 120;
    this.alerta = distancia >= 120 && distancia < 200;
    this.quieto = distancia <= 40 && distancia >= 25;

    let velocidadActual = this.velocidad;

    if (this.corriendo) {
      velocidadActual = 2;
    }

    if (distancia > 1) {
      this.x += (objetivoX - this.x) / distancia * velocidadActual;
      this.y += (objetivoY - this.y) / distancia * velocidadActual;
    }

    if (abs(objetivoX - this.x) > abs(objetivoY - this.y)) {
      if (objetivoX > this.x) {
        this.direccion = "derecha";
      } else {
        this.direccion = "izquierda";
      }
    } else {
      if (objetivoY > this.y) {
        this.direccion = "frente";
      } else {
        this.direccion = "espaldas";
      }
    }

    for (let i = 0; i < obstaculos.length; i++) {
      if (this.x < obstaculos[i].x + obstaculos[i].ancho &&
          this.x + this.tamano > obstaculos[i].x &&
          this.y < obstaculos[i].y + obstaculos[i].alto &&
          this.y + this.tamano > obstaculos[i].y) {

        this.x = anteriorX;
        this.y = anteriorY;

        if (abs(objetivoX - this.x) > abs(objetivoY - this.y)) {
          this.y += velocidadActual;
        } else {
          this.x += velocidadActual;
        }
      }
    }

    this.contador++;

    if (this.contador > 8) {
      this.frame++;
      this.contador = 0;
    }
  }

  mostrar() {
    let imagenActual;

    if (this.corriendo) {
      imagenActual = secuestradorImagen[15 + this.frame % 6];

    } else if (this.alerta) {
      imagenActual = secuestradorImagen[21];

    } else if (this.quieto) {
      imagenActual = secuestradorImagen[22];

    } else {
      if (this.direccion == "frente") {
        imagenActual = secuestradorImagen[this.frame % 4];
      }

      if (this.direccion == "derecha") {
        imagenActual = secuestradorImagen[4 + this.frame % 4];
      }

      if (this.direccion == "espaldas") {
        imagenActual = secuestradorImagen[8 + this.frame % 3];
      }

      if (this.direccion == "izquierda") {
        imagenActual = secuestradorImagen[11 + this.frame % 4];
      }
    }

    image(imagenActual, this.x - 5, this.y - 5, 40, 40);
  }
}
