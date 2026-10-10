
let ptname, presentacionft;
let tipografia;
let tipografia2;
let pantalla;
let correoft;
let personaje;
let marco;
let mesa;
let cartas;
let nota;

let mascara3;  
let numeroobjetos = 0; // 0: mesa, 1: caja , 2: cartas, 3: nota
let numeroSecciones = 4;

let Texto = false;
let maxTexto = 0;

let textoCaja = "Hay tres notas, que raro.";
let textoCarta = "";

//nota
let linea1 = "Steve esta en peligro. Sigue las pistas.";
let linea2 = "- xxx";

async function setup() {
  tipografia2 = await loadFont('/assets/Bouncy-Thin-PERSONAL_USE_ONLY.otf');
  tipografia = await loadFont('/assets/Bouncy-PERSONAL_USE_ONLY.otf');
  ptname = await loadImage('/assets/mousepiInicio.png');
  presentacionft = await loadImage('/assets/presentacion.png');
  correoft = await loadImage('/assets/pantalla.jpg');
  personaje = await loadImage('/assets/personaje.jpg');
  marco = await loadImage('/assets/marco.jpg');
  
 
  mesa = await loadImage('/assets/mesa.jpg');
  cartas = await loadImage('/assets/cartas.jpg');
  nota = await loadImage('/assets/nota.jpg');
  
  //mascaras
  
  mascara3 = await loadImage("assets/mascara3.png");
  mascara3.resize(800, 450);
  
  createCanvas(800, 450);
  pantalla = 0;
}

function draw() {
  if (pantalla == 0) {
    background(0);
    image(ptname, 0, 0, 800, 450);
  
    textFont(tipografia);
    fill(0);
    rect(219, 354, 365, 58, 12);
    fill(227, 227, 227);
    textSize(45);
    text('Press E to Start', 235, 396);
  }
  else if (pantalla == 1) { 
    background(0);
    textFont(tipografia2);
    fill(0);
    textSize(25);
    image(presentacionft, 130, 10, 550, 440);
    text('Jack Pepper, detective privado', 176, 81);
    text('y veterano de guerra.', 176, 111);
    text('Vive en la ciudad de Mouseberg', 176, 141);
    text('Hace una semana, Steve', 176, 181);
    text('desaparecio sin dejar rastro...', 176, 211);
    text('y Jack ha decidido hacerse', 176, 241);
    text('cargo del caso.', 176, 271);
    text('Para encontrarlo, deberá', 176, 311);
    text('seguir pistas, resolver acertijos', 176, 341);
    text('y descifrar las misteriosas ', 176, 371);
    text('cartas que alguien le envía...', 176, 401);   
  }
  else if (pantalla == 2) {
    background(0);
    textFont(tipografia2);
    fill(0);
    textSize(35);
    image(presentacionft, 130, 10, 550, 440);
    text('¿Podra desenmascarar', 174, 211);
    text('al responsable antes ', 184, 241);
    text('de que sea tarde?', 234, 271);
  }
  else if (pantalla == 3) {
    background(0);
    image(correoft, 0, 0, 800, 450);
    textFont(tipografia2);
    textSize(20);
    text('Señor le llego correo, es una caja', 140, 396);
  }
  else if (pantalla == 4) {
    background(0);
    image(personaje, 0, 0, 800, 450);
    textFont(tipografia2);
    textSize(20);
    text('Gracias wanda,', 140, 396);
    text('Dejelo en la mesa.', 140, 420);
  }
  else if (pantalla == 5) {
    background(255);
    
   
    if (numeroobjetos == 0) {
      image(mesa, 0, 0, 800, 450);
    } else if (numeroobjetos == 1) {
      image(cartas, 0, 0, 800, 450); 
    } else if (numeroobjetos == 2) {
      image(cartas, 0, 0, 800, 450); 
    } else if (numeroobjetos == 3) {
      image(nota, 0, 0, 800, 450); 
    }
    
    if (Texto) {
      dibujarCajaDeTexto();
    }
  }
  
//coordenadas
  push();
  fill(0, 150);
  noStroke();
  rect(10, 10, 130, 30, 5);
  fill(255);
  textSize(16);
  textFont('sans-serif');
  text("X: " + mouseX + " Y: " + mouseY, 20, 30);
  pop();
}

function mousePressed() {
  if (pantalla == 5) {
   
    if (numeroobjetos== 0) {
      let c3 = mascara3.get(mouseX, mouseY); 
      
     //nota
      if (mouseX > 340 && mouseX < 430 && mouseY > 210 && mouseY < 280) {
        numeroobjetos= 3; 
        Texto = true;
        return;
      }
      
     //caja
      if (mouseX > 300 && mouseX < 480 && mouseY > 120 && mouseY < 240) {
        numeroobjetos = 1; 
        maxTexto = 0;
        Texto = true;
        return;
      }

    //cartas
      if (c3[1] > 100 && c3[0] < 100 && c3[2] < 100) {
        numeroobjetos = 2; 
        maxTexto = 0;
        Texto = true;
        return;
      }
    } 
  
    else if (numeroobjetos > 0) {
      numeroobjetos = 0; 
      Texto = false;
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
    text (linea2, 551, 303 ,300);
    pop();
    return; 
  }
  
 
  push();
  textFont(tipografia2);
  fill(255);
  text("JACK", 50, 270);
  pop();
  
  push();
  stroke(255);
  fill(0, 75);
  rect(30, 280, 740, 100, 20);
  pop();
  
  escribirTexto();
}

function escribirTexto() {
  push();
  textFont(tipografia2);
  fill(255);
  if (numeroobjetos == 1) {
    text(textoCaja.substring(0, maxTexto++), 50, 300, 700);
  } else if (numeroobjetos == 2) {
    text(textoCarta.substring(0, maxTexto++), 50, 300, 700);
  }
  pop();
}

function keyPressed() {
  if (key == 'e' || key === 'E') {
    if (pantalla < 5) {
      pantalla++;
    }
  }
}
