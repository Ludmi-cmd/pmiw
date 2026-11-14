class Steve {
  constructor() {
    this.x = 400;
    this.y = 200;
    this.velocidad = 3;
    this.velocidadCorrer = 5;
    this.tamano = 30;

    this.direccion = "abajo";
    this.frame = 0;
    this.contador = 0;
    this.moviendo = false;
    this.corriendo = false;

    this.disparando = false;
    this.tiempoDisparo = 0;
  }

  mostrar() {
    let imagenActual;

    if (this.disparando && this.direccion == "derecha") {
      imagenActual = steveDisparando[this.frame];
    } else if (!this.moviendo) {
      if (this.direccion == "abajo") {
        imagenActual = steveQuieto[0];
      }

      if (this.direccion == "derecha") {
        imagenActual = steveQuieto[1];
      }

      if (this.direccion == "arriba") {
        imagenActual = steveQuieto[2];
      }

      if (this.direccion == "izquierda") {
        imagenActual = steveQuieto[3];
      }
    } else if (this.corriendo && this.direccion == "derecha") {
      imagenActual = steveCorriendo[this.frame];
    } else {
      if (this.direccion == "arriba") {
        imagenActual = steveArriba[this.frame];
      }

      if (this.direccion == "abajo") {
        imagenActual = steveAbajo[this.frame];
      }

      if (this.direccion == "izquierda") {
        imagenActual = steveIzquierda[this.frame];
      }

      if (this.direccion == "derecha") {
        imagenActual = steveDerecha[this.frame];
      }
    }

    image(imagenActual, this.x - 5, this.y - 5, 40, 40);
  }

  mover() {
    let anteriorX = this.x;
    let anteriorY = this.y;
    let direccionAnterior = this.direccion;

    this.moviendo = false;
    this.corriendo = keyIsDown(SHIFT);

    let velocidadActual = this.velocidad;

    if (this.corriendo) {
      velocidadActual = this.velocidadCorrer;
    }

    if (keyIsDown(87)) {
      this.y -= velocidadActual;
      this.direccion = "arriba";
      this.moviendo = true;
    }

    if (keyIsDown(83)) {
      this.y += velocidadActual;
      this.direccion = "abajo";
      this.moviendo = true;
    }

    if (keyIsDown(65)) {
      this.x -= velocidadActual;
      this.direccion = "izquierda";
      this.moviendo = true;
    }

    if (keyIsDown(68)) {
      this.x += velocidadActual;
      this.direccion = "derecha";
      this.moviendo = true;
    }

    if (this.direccion != direccionAnterior) {
      this.frame = 0;
      this.contador = 0;
    }

    this.x = constrain(this.x, 0, 800 - this.tamano);
    this.y = constrain(this.y, 0, 400 - this.tamano);

    for (let i = 0; i < obstaculos.length; i++) {
      if (
        this.x < obstaculos[i].x + obstaculos[i].ancho &&
        this.x + this.tamano > obstaculos[i].x &&
        this.y < obstaculos[i].y + obstaculos[i].alto &&
        this.y + this.tamano > obstaculos[i].y
      ) {
        this.x = anteriorX;
        this.y = anteriorY;
      }
    }

    if (this.disparando) {
      this.tiempoDisparo++;

      if (this.tiempoDisparo > 20) {
        this.disparando = false;
        this.tiempoDisparo = 0;
        this.frame = 0;
      }
    }

    if (this.moviendo) {
      this.contador++;

      if (this.contador > 6) {
        this.frame++;

        if (this.corriendo && this.direccion == "derecha") {
          if (this.frame >= steveCorriendo.length) {
            this.frame = 0;
          }
        } else {
          if (this.direccion == "arriba" && this.frame >= steveArriba.length) this.frame = 0;
          if (this.direccion == "abajo" && this.frame >= steveAbajo.length) this.frame = 0;
          if (this.direccion == "izquierda" && this.frame >= steveIzquierda.length) this.frame = 0;
          if (this.direccion == "derecha" && this.frame >= steveDerecha.length) this.frame = 0;
        }

        this.contador = 0;
      }
    } else if (!this.disparando) {
      this.frame = 0;
      this.contador = 0;
    }
  }
}
