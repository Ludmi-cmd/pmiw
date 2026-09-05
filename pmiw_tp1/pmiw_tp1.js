let fondo = [];
let kirbyF = [];
let kirbyD = [];

let f, d;
let estadoP = 0;
let contadorGeneral = 0;
let velocidad = 6;

function preload() {
  fondo.push(loadImage("assetsjpg/fondo.png"));

  // Primera animación 
  for (let i = 1; i <= 18; i++) {
    kirbyF.push(loadImage("assetsjpg/kirby" + i + ".png"));
  }

  // Segunda 
  for (let i = 19; i <= 35; i++) {
    kirbyD.push(loadImage("assetsjpg/kirby" + i + ".png"));
  }
}

function setup() {
  createCanvas(800, 600);
  reiniciar();
}

function draw() {
  background(0);

  let movimiento = (contadorGeneral*2) % 800;
  image(fondo[0], -movimiento, 0, 800, 600);
  image(fondo[0], 800 - movimiento, 0, 800, 600);

  if (estadoP == 0) {
    mostrarelkirby(kirbyF, f, 0, 370, 250, 220);
    f = actualizarFrame(f, 18, velocidad);
  } else if (estadoP == 1) {
    let posX = calcularPosicion(50, contadorGeneral*2);
    mostrarelkirby(kirbyD, d, posX, 370, 250, 220);
    d = actualizarFrame(d, 16, velocidad);
  }

  
  contadorGeneral++;

  if (estadoP == 0 && contadorGeneral > 150) {
    estadoP = 1;
    contadorGeneral = 0;
  } else if (estadoP == 1 && contadorGeneral > 300) {
    estadoP = 0;
    contadorGeneral = 0;
  }
}

function mostrarelkirby(animacion, frame, x, y, ancho, alto) {
  if (animacion && animacion[frame]) {
    image(animacion[frame], x, y, ancho, alto);
  }
}

function actualizarFrame(frameActual, totalFrames, vel) {
  if (contadorGeneral % vel === 0) {
    frameActual++;
  }
  if (frameActual >= totalFrames) {
    frameActual = 0;
  }
  return frameActual;
}

function calcularPosicion(inicio, movimiento) {
  return inicio + movimiento;
}

function reiniciar() {
  f = 0;
  d = 0;
  estadoP = 0;
  contadorGeneral = 0;
}
