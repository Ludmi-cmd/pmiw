//https://youtu.be/BmvGGKSZync

let ptname, presentacionft;
let tipografia;
let tipografia2;
let pantalla;
let correoft;
let personaje;
let marco;
let mesa;
let cartas;
let mapadelaciudad;
let mascaradelaciudad;
let departamentoSteve;
let oficina2;
let mapa;
let mapa2;
let oficinajpg;
let mascaraoficina;
let mascaraSteve;
let linterna;
let mascaratarjeta;
let tarjetadegaraje;
let encuentrosteve;
let steve;
let stevelastimado;
let finalmalo;
let noentendi;
let mousepin;
let acertijovisual;
let pista;
let nota;

let parallax;
let sprites = [];
let movimientoFondo = 0;
let movimientoSprites = 0;
let frameSprite = 0;
let contadorSprite = 0;

let mensajesInvestigacion = [
  "Hay tres sobres... ¿quien los habra enviado?",
  "Steve está en peligro. Sigue las pistas.",
  "Resolviste el acertijo de la grilla...",
  "Ya no puedes utilizar esta pista..."
];
let numeroobjetos = 0;
let Texto = false;
let maxTexto = 0;

let textoCaja = "";
let jackHabla = false;

let cartasRechazadas = 0;
let usoAcertijo = false;
let yCreditos = 450;

let sonidoFinal;
let musicainicio;

let linea1 = "Steve esta en peligro. Sigue las pistas.";
let linea2 = "- xxx";

function preload() {
  tipografia2 = loadFont('/assets/Bouncy-Thin-PERSONAL_USE_ONLY.otf');
  tipografia = loadFont('/assets/Bouncy-PERSONAL_USE_ONLY.otf');

  ptname = loadImage('/assets/mousepiInicio.png');
  presentacionft = loadImage('/assets/presentacion.png');
  correoft = loadImage('/assets/pantalla.jpg');
  personaje = loadImage('/assets/personaje.jpg');
  marco = loadImage('/assets/marco.jpg');
  mesa = loadImage('/assets/mesa.jpg');
  cartas = loadImage('/assets/cartas.jpg');
  nota = loadImage('/assets/nota.jpg');

  oficina2 = loadImage('/assets/oficina2.png');
  departamentoSteve = loadImage('/assets/departamentoSteve.png');
  oficinajpg = loadImage('/assets/oficinajpg.jpg');
  mapadelaciudad = loadImage('/assets/mapadelaciudad.png');
  mascaradelaciudad = loadImage('/assets/mascaradeciudad.png');
  mascaraoficina = loadImage('/assets/mascaraoficina.png');
  mascaraSteve = loadImage('/assets/mascaraSteve.png');
  mapa = loadImage('/assets/mapa.png');
  mapa2 = loadImage('/assets/mapa2.png');
  linterna = loadImage('/assets/linterna.png');
  mascaratarjeta = loadImage('/assets/mascaratarjeta.png');
  tarjetadegaraje = loadImage('/assets/tarjetadegaraje.jpg');
  steve = loadImage('/assets/steve.jpg');
  encuentrosteve = loadImage('/assets/encuentrosteve.jpg');
  stevelastimado = loadImage('/assets/stevelastimado.png');
  finalmalo = loadImage('/assets/finalmalo.png');
  noentendi = loadImage('/assets/noentendi.png');
  mousepin = loadImage('/assets/mousepin.png');
  acertijovisual = loadImage('/assets/acertijovisualL.png');
  pista = loadImage('/assets/pista.png');

  parallax = loadImage('/assets/parallax.jpg');

  for (let i = 1; i <= 6; i++) {
    sprites.push(loadImage('/assets/sprite' + i + '.png'));
  }
  soundFormats('mp3', 'wav');
  sonidoFinal = loadSound('/assets/finalsonido.mp3');
}
function setup() {
  createCanvas(800, 450);
  pantalla = 0;
  textoCaja = mensajesInvestigacion[0];
}
function draw() {
  if (pantalla == 0) {
    background(0);
    image(ptname, 0, 0, 800, 450);

    textFont(tipografia);
    fill(0);
    rect(200, 354, 450, 58, 12);

    fill(227, 227, 227);
    textSize(30);
    text('Presiona E para moverte', 215, 390);

    fill(0);
    rect(290, 275, 220, 50, 12);

    fill(227, 227, 227);
    textSize(30);
    text('CREDITOS', 330, 309);
  }
  else if (pantalla == 1) {
    background(0);
    image(presentacionft, 130, 10, 550, 440);

    textFont(tipografia2);
    fill(0);
    textSize(20);

    text('Jack Pepper, detective privado', 176, 81);
    text('y veterano de guerra.', 176, 111);
    text('Vive en la ciudad de Mouseberg.', 176, 141);
    text('Hace una semana, Steve', 176, 181);
    text('desaparecio sin dejar rastro...', 176, 211);
    text('y Jack ha decidido hacerse', 176, 241);
    text('cargo del caso.', 176, 271);
    text('Para encontrarlo, debera', 176, 311);
    text('seguir pistas, resolver acertijos', 176, 341);
    text('y descifrar las misteriosas', 176, 371);
    text('cartas que alguien le envia...', 176, 401);
  }
  else if (pantalla == 2) {
    background(0);
    image(presentacionft, 130, 10, 550, 440);

    textFont(tipografia2);
    fill(0);
    textSize(35);

    text('¿Podra desenmascarar', 174, 211);
    text('al responsable antes', 184, 241);
    text('de que sea tarde?', 234, 271);
  }
  else if (pantalla == 3) {
    background(0);
    image(correoft, 0, 0, 800, 450);

    textFont(tipografia2);
    textSize(20);
    fill(0);

    let texto = 'Señor, le llego correo. Es una caja';
    text(texto.substring(0, maxTexto++), 140, 396);
  }
  else if (pantalla == 4) {
    let texto = 'Gracias, Wanda.\nDejelo en la mesa.';

    background(0);
    image(personaje, 15, 0, 800, 450);

    textFont(tipografia2);
    textSize(20);
    fill(0);

    text(texto.substring(0, maxTexto++), 140, 389);
  }
  else if (pantalla == 5) {
    if (numeroobjetos == 0 || numeroobjetos == 1 || numeroobjetos == 2 || numeroobjetos == 4 || numeroobjetos == 5) {
      image(mesa, 0, 0, 800, 450);
    }
    if (numeroobjetos == 1) {
      image(cartas, 0, 0, 800, 450);
    }
    else if (numeroobjetos == 2) {
      image(mousepin, 0, 0, 800, 450);
    }
    else if (numeroobjetos == 4) {
      image(acertijovisual, 0, 0, 800, 450);
    }
    else if (numeroobjetos == 5) {
      image(pista, 0, 0, 800, 450);
    }
    else if (numeroobjetos == 3) {
      background(255);
      image(nota, 0, 0, 800, 450);
    }
    if (Texto) {
      dibujarCajaDeTexto();
    }
  }
  else if (pantalla == 18) {
    background(0);

    if (noentendi) {
      image(noentendi, 0, 0, 800, 450);
    }
    push();
    stroke(255);
    fill(0, 180);
    rect(30, 280, 740, 100, 20);
    textFont(tipografia2);
    fill(255);
    textSize(22);
    text("JACK:\nNo entendi nada..", 50, 315, 700);
    pop();
  }
  else if (pantalla == 6) {
    background(0);
    image(personaje, 0, 0, 800, 450);

    push();
    textFont(tipografia2);
    fill(0);
    textSize(15);
    text("Es una direccion, en mi mapa\npuedo ver donde es.", 128, 395);
    pop();
  }
  else if (pantalla == 7) {
    background(0);
    image(oficina2, 0, 0, 800, 450);
  }
  else if (pantalla == 8) {
    background(0);

    if (mapadelaciudad) {
      image(mapadelaciudad, 0, 0, 800, 450);
    }
  }
  else if (pantalla == 9) {
    background(0);

    if (mapa) {
      image(mapa, 0, 0, 800, 450);
    }
  }
  else if (pantalla == 10) {
    background(0);

    if (departamentoSteve) {
      image(departamentoSteve, 0, 0, 800, 450);
    }

    linternaVer();
  }
  else if (pantalla == 11) {
    background(0);

    if (tarjetadegaraje) {
      image(tarjetadegaraje, 0, 0, 800, 450);
    }
    push();
    stroke(255);
    fill(0, 180);
    rect(30, 330, 740, 100, 20);
    textFont(tipografia2);
    fill(255);
    textSize(20);
    text('Una tarjeta de un Garaje Abandonado.\nHaz clic para ir al mapa.', 50, 365, 700);
    pop();
  }
  else if (pantalla == 12) {
    background(0);

    if (mapa2) {
      image(mapa2, 0, 0, 800, 450);
    }
  }
  else if (pantalla == 13) {
    background(0);

    if (steve) {
      image(steve, 0, 0, 800, 450);
    }
    push();
    stroke(255);
    fill(0, 180);
    rect(30, 330, 740, 100, 20);
    textFont(tipografia2);
    fill(255);
    textSize(20);
    text("STEVE:\nGracias Jack por venir a rescatarme, me tenian atrapado.", 50, 360, 700);
    pop();
  }
  else if (pantalla == 14) {
    background(0);

    if (encuentrosteve) {
      image(encuentrosteve, 0, 0, 800, 450);
    }
    push();
    stroke(255);
    fill(0, 180);
    rect(30, 340, 740, 90, 20);
    textFont(tipografia2);
    fill(255);
    textSize(20);
    text("Encontraste a Steve a salvo.", 50, 370, 700);
    pop();
  }
  else if (pantalla == 15) {
    background(0);

    if (finalmalo) {
      image(finalmalo, 0, 0, 800, 450);
    }
    push();
    stroke(255);
    fill(0, 180);
    rect(30, 330, 740, 100, 20);
    textFont(tipografia2);
    fill(255);
    textSize(18);
    text("final malo:\nIgnoraste las pistas. Steve termino desaparecido.", 50, 360, 700);
    pop();
  }
  else if (pantalla == 16) {
    background(0);

    if (stevelastimado) {
      image(stevelastimado, 0, 0, 800, 450);
    }
    push();
    stroke(255);
    fill(150, 100, 0, 200);
    rect(30, 320, 740, 110, 20);
    textFont(tipografia2);
    fill(255);
    textSize(17);
    text("Final intermedio:\nEncontraste a steve pero le falta el ojo derecche.\n", 50, 350, 700);
    pop();
  }
  else if (pantalla == 17) {

    dibujarParallax();

    push();
    textFont(tipografia2);
    fill(255);
    textSize(35);
    textAlign(CENTER, CENTER);
    text("CREDITOS", width / 2, yCreditos);

    textSize(18);
    text("Desarrollado por: Fernandez Ludmila Y Sabrina Cardo", width / 2, yCreditos + 70);
    text("Director del juego: Michal Rostek desarrollado por Fumi Games", width / 2, yCreditos + 120);
    text("Gracias por jugar", width / 2, yCreditos + 190);

    textSize(16);
    fill(255);
    text("Presiona R para volver al inicio", width / 2, 410);
    pop();

    if (yCreditos > 120) {
      yCreditos -= 1.5;
    }
  }
}
function dibujarParallax() {

  movimientoFondo += 0.5;

  let xFondo = movimientoFondo % 800;

  image(parallax, -xFondo, 0, 800, 450);
  image(parallax, 800 - xFondo, 0, 800, 450);

  movimientoSprites += 2;

  if (movimientoSprites > 800) {
    movimientoSprites = -100;
  }
  contadorSprite++;

  if (contadorSprite > 8) {
    frameSprite++;

    if (frameSprite >= 6) {
      frameSprite = 0;
    }
    contadorSprite = 0;
  }
  image(sprites[frameSprite], movimientoSprites, 250, 180, 180);
}
function dibujarBotonOpcion(textoBoton, xBoton, yBoton, colordelBoton, tamano = 24) {
  push();
  textFont(tipografia2);
  textSize(tamano);
  fill(colordelBoton);
  stroke(0);
  strokeWeight(3);
  text(textoBoton, xBoton, yBoton);
  pop();
}
function mousePressed() {

  if (pantalla == 0) {
    if (mouseX > 290 && mouseX < 510 && mouseY > 275 && mouseY < 325) {
      pantalla = 17;
      yCreditos = 450;

      movimientoFondo = 0;
      movimientoSprites = 0;
      frameSprite = 0;
      contadorSprite = 0;

      if (sonidoFinal && !sonidoFinal.isPlaying()) {
        sonidoFinal.play();
      }
      return;
    }
  }
  if (pantalla == 6) {
    pantalla = 7;
    return;
  }
  else if (pantalla == 7) {
    if (mascaraoficina) {
      let c = mascaraoficina.get(mouseX, mouseY);

      if (c[0] > 100 || c[1] > 100 || c[2] > 100) {
        pantalla = 8;
      }
    }
    return;
  }
  else if (pantalla == 18) {
    pantalla = 15;
    return;
  }
  else if (pantalla == 8) {
    if (mouseX > 370 && mouseX < 650 && mouseY > 150 && mouseY < 520) {
      pantalla = 9;
    }
    return;
  }
  else if (pantalla == 9) {
    if (mouseX > 340 && mouseX < 440 && mouseY > 130 && mouseY < 230) {
      pantalla = 10;
    }
    return;
  }
  else if (pantalla == 10) {
    if (mouseX > 150 && mouseX < 240 && mouseY > 260 && mouseY < 350) {
      pantalla = 11;
    }
    return;
  }
  else if (pantalla == 11) {
    pantalla = 12;
    return;
  }
  else if (pantalla == 12) {
    if (mouseX > 560 && mouseX < 670 && mouseY > 155 && mouseY < 255) {
      pantalla = 13;
    }
    return;
  }
  else if (pantalla == 13) {
    if (cartasRechazadas > 0 || usoAcertijo) {
      pantalla = 16;
    } else {
      pantalla = 14;
    }
    return;
  }
  else if (pantalla >= 14 && pantalla <= 16) {
    pantalla = 17;
    yCreditos = 450;

    movimientoFondo = 0;
    movimientoSprites = 0;
    frameSprite = 0;
    contadorSprite = 0;

    if (sonidoFinal && !sonidoFinal.isPlaying()) {
      sonidoFinal.play();
    }
    return;
  }
  if (pantalla == 5) {

    if (jackHabla) {
      jackHabla = false;
      numeroobjetos = 0;
      Texto = false;
      maxTexto = 0;

      if (usoAcertijo) {
        pantalla = 6;
      } else {
        textoCaja = mensajesInvestigacion[0];
      }
      return;
    }
    if (numeroobjetos == 0) {
      if (mouseX > 340 && mouseX < 430 && mouseY > 210 && mouseY < 280) {
        numeroobjetos = 3;
        Texto = true;
        maxTexto = 0;
        return;
      }
      if (mouseX > 300 && mouseX < 480 && mouseY > 120 && mouseY < 240) {
        numeroobjetos = 1;
        Texto = true;
        maxTexto = 0;
        return;
      }
    }
    else if (numeroobjetos == 1) {
      if (mouseX > 220 && mouseX < 330 && mouseY > 140 && mouseY < 190) {
        numeroobjetos = 2;
        Texto = true;
        maxTexto = 0;
        return;
      }
      if (mouseX > 330 && mouseX < 445 && mouseY > 130 && mouseY < 170) {
        numeroobjetos = 4;
        Texto = true;
        maxTexto = 0;
        return;
      }
      if (mouseX > 450 && mouseX < 555 && mouseY > 130 && mouseY < 200) {
        numeroobjetos = 5;
        Texto = true;
        maxTexto = 0;
        return;
      }
      numeroobjetos = 0;
      Texto = false;
      maxTexto = 0;
    }
    else if (numeroobjetos == 2 || numeroobjetos == 4 || numeroobjetos == 5) {

      if (numeroobjetos == 2 && mouseX > 310 && mouseX < 370 && mouseY > 400 && mouseY < 435) {
        pantalla = 6;
        numeroobjetos = 0;
        Texto = false;
        maxTexto = 0;
        jackHabla = false;
        return;
      }
      if (numeroobjetos == 4 && mouseX > 310 && mouseX < 370 && mouseY > 400 && mouseY < 435) {
        usoAcertijo = true;
        textoCaja = mensajesInvestigacion[2];
        numeroobjetos = 1;
        Texto = true;
        jackHabla = true;
        maxTexto = 0;
        return;
      }
      if (numeroobjetos == 5 && mouseX > 110 && mouseX < 420 && mouseY > 380 && mouseY < 435) {
        pantalla = 6;
        numeroobjetos = 0;
        Texto = false;
        maxTexto = 0;
        jackHabla = false;
        return;
      }
      if (numeroobjetos == 5 && mouseX > 430 && mouseX < 750 && mouseY > 380 && mouseY < 435) {
        pantalla = 18;
        numeroobjetos = 0;
        Texto = false;
        maxTexto = 0;
        jackHabla = false;
        return;
      }
      if (mouseX > 430 && mouseX < 490 && mouseY > 400 && mouseY < 435) {
        cartasRechazadas++;

        if (cartasRechazadas < 3) {
          textoCaja = mensajesInvestigacion[3];
          numeroobjetos = 1;
          Texto = true;
          jackHabla = true;
        } else {
          pantalla = 15;
          numeroobjetos = 0;
          Texto = false;
        }
        return;
      }
    }
    else if (numeroobjetos == 3) {
      numeroobjetos = 0;
      Texto = false;
      maxTexto = 0;
    }
  }
}
function dibujarCajaDeTexto() {

  if (numeroobjetos == 3) {
    push();
    textFont(tipografia2);
    fill(0);
    textSize(22);
    text(linea1, 200, 190, 300);
    text(linea2, 551, 303, 300);
    pop();
    return;
  }
  if (numeroobjetos == 1) {
    push();
    textFont(tipografia2);
    fill(255);
    textSize(22);
    text("JACK", 50, 270);
    pop();

    push();
    stroke(255);
    fill(0, 75);
    rect(30, 280, 740, 100, 20);
    pop();

    push();
    textFont(tipografia2);
    fill(255);
    textSize(22);
    text(textoCaja.substring(0, maxTexto++), 50, 315, 700);
    pop();
  }
  else if (numeroobjetos == 2) {
    push();
    textFont(tipografia2);
    fill(0);
    textSize(15);

    text('te estoy viendo desde', 320, 150);
    text('las sombras.', 350, 166);
    textSize(10);
    text('calle queso ', 328, 260);

    let anchodelacalle = textWidth('calle queso');

    textSize(18);
    textFont('Georgina');
    text('42', 331 + anchodelacalle, 260);

    let anchoNumero = textWidth('42');

    textSize(10);
    textFont(tipografia2);
    text(' mouseberg', 340 + anchodelacalle + anchoNumero, 260);

    pop();

    dibujarBotonOpcion("¿Elegir carta?", 302, 375, color(255));
    dibujarBotonOpcion("si", 319, 420, color(100, 255, 100));
    dibujarBotonOpcion("no", 450, 420, color(255, 100, 100));
  }
  else if (numeroobjetos == 4) {
    push();
    textFont(tipografia2);
    textSize(24);
    fill(255);
    stroke(0);
    strokeWeight(3);
    textAlign(CENTER, CENTER);

    text("¿Elegir carta?", 400, 375);
    pop();

    dibujarBotonOpcion("si", 335, 420, color(100, 255, 100));
    dibujarBotonOpcion("no", 435, 420, color(255, 100, 100));
  }
  else if (numeroobjetos == 5) {
    push();
    textFont(tipografia2);
    textSize(24);
    fill(255);
    stroke(0);
    strokeWeight(3);
    textAlign(CENTER, CENTER);

    text("¿que tiene bigotes, busca queso y vive en m?", 400, 335);
    pop();

    dibujarBotonOpcion("un raton, de seguro habla de\n la calle queso en mouseberg", 114, 400, color(100, 255, 100), 14);
    dibujarBotonOpcion("no entendi de que se trata", 435, 400, color(255, 100, 100), 14);
  }
}
function linternaVer() {
  let x = constrain(mouseX, 0, width);
  let y = constrain(mouseY, 0, height);

  push();
  imageMode(CENTER);
  image(linterna, x, y);
  pop();
}
function keyPressed() {

  if (key == 'e' || key === 'E') {
    if (pantalla < 5) {
      pantalla++;
      maxTexto = 0;
    }
  }
  if (key == 'r' || key == 'R') {

    if (pantalla >= 14 && pantalla <= 17) {
      pantalla = 0;
      cartasRechazadas = 0;
      usoAcertijo = false;
      numeroobjetos = 0;
      Texto = false;
      maxTexto = 0;
      jackHabla = false;

      if (sonidoFinal && sonidoFinal.isPlaying()) {
        sonidoFinal.stop();
      }
    }
    else if (pantalla == 5 && numeroobjetos > 0) {
      numeroobjetos = 0;
      Texto = false;
      maxTexto = 0;
      jackHabla = false;
      textoCaja = mensajesInvestigacion[0];
    }
    else if (pantalla > 0) {
      pantalla--;
      maxTexto = 0;
    }
  }
}
