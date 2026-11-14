let steve;
let balas = [];
let enemigos = [];
let obstaculos = [];
let pantalla = 0;

let ganaste = false;
let perdiste = false;

let hoteles = [];
let portada;
let piso = 1;
let steveArriba = [];
let steveAbajo = [];
let steveIzquierda = [];
let steveDerecha = [];
let steveCorriendo = [];
let steveDisparando = [];
let steveQuieto = [];
let steveHerido = [];
let secuestradorImagen = [];

function preload() {
  portada = loadImage('/assets/portada.png');

  hoteles[0] = loadImage('/assets/hotel.png');

  for (let i = 1; i < 6; i++) {
    hoteles[i] = loadImage('/assets/piso_' + i + '.png');
  }

  for (let i = 0; i < 4; i++) {
    steveArriba[i] = loadImage('/assets/sprite-1-' + (i + 6) + '.png');
    steveIzquierda[i] = loadImage('/assets/sprite-3-' + (i + 1) + '.png');
    steveDerecha[i] = loadImage('/assets/sprite-3-' + (i + 5) + '.png');
    steveCorriendo[i] = loadImage('/assets/sprite-5-' + (i + 1) + '.png');
    steveDisparando[i] = loadImage('/assets/sprite-5-' + (i + 5) + '.png');
    steveQuieto[i] = loadImage('/assets/sprite-7-' + (i + 1) + '.png');
  }

  for (let i = 0; i < 3; i++) {
    steveAbajo[i] = loadImage('/assets/sprite-1-' + (i + 2) + '.png');
  }

  for (let i = 0; i < 2; i++) {
    steveHerido[i] = loadImage('/assets/sprite-7-' + (i + 5) + '.png');
  }

  for (let i = 0; i < 23; i++) {
    secuestradorImagen[i] = loadImage('/assets/malo' + (i + 1) + '.png');
  }
}
function setup() {
  createCanvas(800, 400);

  steve = new Steve();
  
  enemigos.push(new Secuestrador(100, 100));
  enemigos.push(new Secuestrador(650, 50));
  enemigos.push(new Secuestrador(650, 330));

  obstaculos.push(new Obstaculo(150, 80, 100, 40));
  obstaculos.push(new Obstaculo(350, 250, 120, 50));
  obstaculos.push(new Obstaculo(600, 100, 50, 120));
}
function draw() {
  background(50);

  if (pantalla == 0) {
    image(portada, 0, 0, 800, 400);

    fill(255);
    textAlign(CENTER);
    textSize(20);
    text("Presiona ESPACIO para continuar", 400, 350);
    text("Presiona C para ver los créditos", 400, 380);

    return;
  }

  if (pantalla == 3) {
  background(20);
  fill(255);
  textAlign(CENTER);
  textSize(35);
  text("CREDITOS", 400, 100);

  textSize(20);
  text("Juego realizado por: Tu nombre", 400, 180);
  text("TP Final - Programacion", 400, 220);

  fill(180);
  rect(300, 300, 200, 50, 10);
  fill(255);
  textSize(18);
  text("VOLVER", 400, 332);
  return;
  }

  if (pantalla == 2) {
    fill(255);
    textAlign(CENTER);

    textSize(30);
    text("INSTRUCCIONES", 400, 90);

    textSize(20);
    text("W A S D: mover a Steve", 400, 160);
    text("Mouse: apuntar", 400, 200);
    text("Click izquierdo: disparar", 400, 240);
    text("Llega a las escaleras para bajar", 400, 280);

    textSize(16);
    text("Presiona ESPACIO para comenzar", 400, 350);

    return;
  }

  image(hoteles[piso - 1], 0, 0, 800, 400);

  fill(255);
  textAlign(LEFT);
  textSize(16);
  text("Piso: " + piso + " / 6", 20, 25);

  if (perdiste == true) {
    fill(255);
    textAlign(CENTER);
    textSize(35);
    text("TE ATRAPARON", 400, 200);

    textSize(18);
    text("Presiona ESPACIO para volver a jugar", 400, 250);
    return;
  }

  if (ganaste == true) {
    fill(255);
    textAlign(CENTER);
    textSize(35);
    text("STEVE ESCAPO", 400, 200);

    textSize(18);
    text("Presiona ESPACIO para volver a jugar", 400, 250);
    return;
  }

  steve.mover();
  steve.mostrar();

  if (steve.x > 740 && steve.y > 150 && steve.y < 250) {

    if (piso < 6) {
      piso++;

      steve.x = 400;
      steve.y = 200;

      balas = [];
      enemigos = [];

      enemigos.push(new Secuestrador(100, 100));
      enemigos.push(new Secuestrador(650, 50));
      enemigos.push(new Secuestrador(650, 330));

    } else {
      ganaste = true;
    }
  }

  for (let i = 0; i < balas.length; i++) {
    balas[i].mover();
    balas[i].mostrar();

    if (balas[i].fuera()) {
      balas.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < enemigos.length; i++) {
    enemigos[i].mover(
      steve.x + steve.tamano / 2,
      steve.y + steve.tamano / 2
    );

    enemigos[i].mostrar();

    for (let j = 0; j < balas.length; j++) {
      if (dist(
        balas[j].x,
        balas[j].y,
        enemigos[i].x + enemigos[i].tamano / 2,
        enemigos[i].y + enemigos[i].tamano / 2
      ) < 18) {
        enemigos.splice(i, 1);
        balas.splice(j, 1);
        i--;
        break;
      }
    }

    if (i >= 0 && i < enemigos.length) {
      let distancia = dist(
        steve.x + steve.tamano / 2,
        steve.y + steve.tamano / 2,
        enemigos[i].x + enemigos[i].tamano / 2,
        enemigos[i].y + enemigos[i].tamano / 2
      );

      if (distancia < 25) {
        perdiste = true;
      }
    }
  }
}
function mousePressed() {
  if (pantalla == 1 && perdiste == false && ganaste == false) {
    let x = steve.x + steve.tamano / 2;
    let y = steve.y + steve.tamano / 2;

    let nuevaBala = new Bala(x, y, mouseX, mouseY);

    balas.push(nuevaBala);

    if (steve.direccion == "derecha") {
      steve.disparando = true;
      steve.tiempoDisparo = 0;
      steve.frame = 0;   
    }
  }
}
function keyPressed() {
  if (key == ' ' && pantalla == 0) {
    pantalla = 2;
  }
  else if (key == ' ' && pantalla == 2) {
    pantalla = 1;
  }
  else if (key == ' ' && pantalla == 3) {
    pantalla = 0;
  }
  else if (key == ' ' && (ganaste == true || perdiste == true)) {
    reiniciarJuego();
  }
  else if (key == 'c' || key == 'C') {
    if (pantalla == 0) {
      pantalla = 3;
    }
  }
}
function reiniciarJuego() {
  steve = new Steve();

  balas = [];
  enemigos = [];
  
  enemigos.push(new Secuestrador(100, 100));
  enemigos.push(new Secuestrador(650, 50));
  enemigos.push(new Secuestrador(650, 330));

  ganaste = false;
  perdiste = false;
  
  piso = 1;
  
  pantalla = 1;
}
