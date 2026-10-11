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
let mapa;
let linterna;
let steve;
let mascaraSteve;
let acertijo1;
let mascaraV;
let mascara3;  
let numeroobjetos = 0; // 0: mesa, 1: caja , 2: cartas, 3: nota
let numeroSecciones = 4;



let carcTex = 0;

let Texto = false;
let maxTexto = 0;

let textoCaja = "Hay tres notas, que raro.";
let textop7 = "Esta pista me lleva al departamento de Steve...";

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
  mapa = await loadImage('/assets/mapa.png')
  
  steve = await loadImage('/assets/departamentoSteve.png')
 acertijo1 = await loadImage ('/assets/acertijoVisuall.png')
  mesa = await loadImage('/assets/mesa.jpg');
  cartas = await loadImage('/assets/cartas.jpg');
  nota = await loadImage('/assets/nota.jpg');
  
  //mascaras
  mascaraSteve = await loadImage('/assets/mascaraSteve.png')
  mascaraSteve.resize(800, 450)
  mascaraV = await loadImage ('/assets/mascaraVisu.png')
  mascaraV.resize(550, 440);
  mascara3 = await loadImage("assets/mascara3.png");
  mascara3.resize(800, 450);
  mascarasCaminos = await loadImage('/assets/mascarasCaminos.png'); 
  mascarasCaminos.resize(800, 450);
  linterna = await loadImage('/assets/linterna.png')
  

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
    text('Press E to move', 235, 396);
  }
// if (cambio >= 10){
  //pantalla = 3;
//}


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
// if (cambio >= 10){
  //pantalla = 2;
//}
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
// if (cambio >= 18){
  //pantalla = 3;
//}
  else if (pantalla == 3) {
    background(0);
    image(correoft, 0, 0, 800, 450);
    textFont(tipografia2);
    textSize(20);
    text('Señor le llego correo, es una caja'.substring(0, maxTexto++), 140, 396);
  }
// if (cambio >= 22){
  //pantalla = 4;
  //maxTexto = 0;
//}
  else if (pantalla == 4) {
    let textp = 'Gracias Wanda,\ndejelo en la mesa.'
    background(0);
    image(personaje, 15, 0, 800, 450);
    textFont(tipografia2);
    textSize(20);
    text(textp.substring(0,maxTexto++),140,389);
   
  }
// if (cambio >= 27){
  //pantalla = 5;
  //cambio = 0;
//}
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

    else if ( pantalla == 6){ // camino 1
   background(30, 30, 40); 
      image(acertijo1, 130, 10, 550, 440)
     
    textFont(tipografia2);
    
    textSize(25);
    fill(0);
    text('DOSE', 365, 375);
    }
     
if (pantalla == 7){
background(0)
image(mapa, 0,0, 800, 450)

push();
    textFont(tipografia2);
    fill(255);
    text("JACK", 50, 320);
    pop();
    
    push();
    stroke(255);
    fill(0, 75);
    rect(30, 330, 740, 100, 20);
    pop();
    
    push();
    textFont(tipografia2);
    fill(255);
    textSize(20);
    text(textop7.substring(0, maxTexto++), 50, 360, 700);
    pop();
}

else if(pantalla == 8){
  background (0)
image(steve,0,0, 800, 450)
linternaVer();

}






//--------------------------------------------
else if (pantalla == 12){ //camino 2
  background(150)
  fill(0)
  textSize(30)
  text('Camino dos',290,225)
  textSize(20)
  text('retroceder con R', 290, 387 )
}
 
else if (pantalla == 13){ // camino 3
  background(100);
  fill(255)
  textSize(30)
  text('Camino Tres',290,225)
  textSize(20)
  text('retroceder con R', 290, 387 )
}
//coordenadas
  //push();
  //fill(0, 150);
  //noStroke();
  //rect(10, 10, 130, 30, 5);
  //fill(255);
  //textSize(16);
  //textFont('sans-serif');
  //text("X: " + mouseX + " Y: " + mouseY, 20, 30);
  //pop();
}
function mousePressed() {
  if (pantalla == 5) {
    
    
    if (numeroobjetos == 0) {
      let c3 = mascara3.get(mouseX, mouseY);

      //Nota
      if (mouseX > 340 && mouseX < 430 && mouseY > 210 && mouseY < 280) {
        numeroobjetos = 3; 
        Texto = true;
        return;
      }
      
      //caja - cartas (abre la caja)
      if (mouseX > 300 && mouseX < 480 && mouseY > 120 && mouseY < 240) {
        numeroobjetos = 1; 
        maxTexto = 0;
        Texto = true;
        return;
      }

      //cartas con mascara3
      if (c3[1] > 100 && c3[0] < 100 && c3[2] < 100) {
        numeroobjetos = 2; 
        maxTexto = 0;
        Texto = true;
        return;
      }
    } 

    else if (numeroobjetos > 0) {
      
      
      let c = mascarasCaminos.get(mouseX, mouseY);
      let r = c[0]; // rojo
      let g = c[1]; // verde
      let b = c[2]; // azul
      ////////

      //camino1 - rojo
      if (r > 200 && g < 50 && b < 50) {
        pantalla = 6;
        Texto = false;
        numeroobjetos = 0;
        return;
      }
      
      
      //camnino2 - naranja
      if (r > 200 && g > 80 && g < 180 && b < 100) {
        pantalla = 12; 
        Texto = false;
        numeroobjetos = 0;
        return;
      }

     //camnino2 - verde
     if (r < 100 && g > 150 && b < 100) {
        pantalla = 13; 
        Texto = false;
        numeroobjetos = 0;
        return;
      }
      
      numeroobjetos = 0; 
      Texto = false;
    }
  }
  else if (pantalla == 6){

    let localX = mouseX - 130;
      let localY = mouseY - 10;

     let v = mascaraV.get(localX, localY)
      let rojo = v[0];
      let verde = v[1];
      let azul = v[2];

      if (mouseX >= 130 && mouseX <= 680 && mouseY >= 10 && mouseY <= 450){
       if (rojo > 200 && verde < 50 && azul < 50) {
        pantalla = 7; 
        maxTexto = 0;
        return;
      }
    } 
      
  }
  else if (pantalla == 7){
    let st = mascaraSteve.get(mouseX, mouseY)
    let red = st [0]
    let green = st [1]
    let blue = st [2]
    if (red > 200 && green < 50 && blue < 50) {
      pantalla = 8;
      maxTexto = 0;
      return;
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


function linternaVer(){
  let x = constrain (mouseX, 0, width);
  let y = constrain (mouseY, 0, height);

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
  if (key == 'r' || key == 'R'){
    pantalla--;
     maxTexto = 0;
  }
}
