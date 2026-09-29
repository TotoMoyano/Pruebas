let pantalla = 0;
let Kong = []
let imagenConvivencia;
let kongpensando;
let cocinando;
function preload() {
  for (let i= 1; i <= 4; i++) { 
    Kong.push(loadImage("data/Kong" + i + ".png"))
  }
  imagenConvivencia = loadImage("data/donkeynormal.png");
  kongpensando = loadImage("data/KongPens.jpg");
  cocinando = loadImage("data/cocinando.jpg");
}

function setup() {
  createCanvas(800, 450);
  textFont("Arial");
}


// PANTALLAS
function draw() {
  background(210);

  if (pantalla == 0) {
    inicio();
  }

  else if (pantalla == 1) {
    convivencia();
  }

  else if (pantalla == 2) {
    exclusion();
  }

  else if (pantalla == 3) {
    ignora();
  }

  else if (pantalla == 4) {
    enoja();
  }

  else if (pantalla == 5) {
    soluciona();
  }

  else if (pantalla == 6) {
    eleccion();
  }
}


// PANTALLA 0
// INICIO

function inicio() {
  image(Kong[floor(frameCount / 10) % 4], 370,100,80,80);

  titulo("DONKEY KONG");

  texto("Esta es la historia de Donkey Kong, JumpMan y Pauline.",230);

  texto("Los tres viven juntos y comparten sus días.",270);

  boton(300, 350, 200, 50, "SIGUIENTE");
}


// PANTALLA 1
// VIVEN JUNTOS

function convivencia() {
  image(imagenConvivencia, 0, 0, 800, 450);
  titulo("VIVEN JUNTOS");
 
  texto("Viven juntos Donkey Kong, JumpMan y Pauline.",320);

  boton(300, 350, 200, 50, "SIGUIENTE");
}


// PANTALLA 2
// EXCLUSIÓN

function exclusion() {

  titulo("LO EXCLUYEN");

  texto("Donkey Kong comienza a sentirse excluido.",230);

  texto("JumpMan y Pauline pasan cada vez menos tiempo con él.",270);

  boton(300, 350, 200, 50, "SIGUIENTE");
}


// PANTALLA 3
// IGNORA

function ignora() {

  titulo("DECIDE ALEJARSE");

  texto(
    "Donkey Kong decide ignorar lo que sucede.",
    230
  );

  texto("En lugar de enfrentarse a ellos, decide alejarse.",270);

  boton(300, 350, 200, 50, "SIGUIENTE");
}

// PANTALLA 4
// SE ENOJA

function enoja() {

  titulo("SE ENOJA");

  texto("Donkey Kong se enoja con JumpMan.",230);

  texto("Decide enfrentarse a él por haberlo excluido.",270);

  boton(300, 350, 200, 50, "SIGUIENTE");
}
// PANTALLA 5
// INTENTA SOLUCIONARLO
function soluciona() {
  image(cocinando,0,0,800,450);
  titulo("INTENTA SOLUCIONARLO");
  fill(0,150);
  rect(190,230,418,100);
  texto("Donkey Kong intenta solucionar las cosas.",250);

  texto("Piensa en una forma de reconciliarse con ellos.",280);

  texto("Entonces decide hacer una torta de bananas.",310);
  

  boton(300, 350, 200, 50, "SIGUIENTE");
}
// PANTALLA 6
// ELECCIÓN

function eleccion(){
  image(kongpensando,0,0, 800,450);
  titulo("¿CÓMO REACCIONA DONKEY KONG?");
  

  boton(60, 340, 210, 65, "LO IGNORA");

  boton(295, 340, 210, 65, "SE ENOJA");

  boton(530, 340, 230, 65, "INTENTA SOLUCIONARLO");
  
}

// FUNCIÓN BOTÓN
function boton(x, y, ancho, alto, contenido) {

  fill(50);

  rect(x, y, ancho, alto, 10);

  fill(255);

  textAlign(CENTER, CENTER);

  textSize(18);

  text(contenido,x + ancho / 2,y + alto / 2);
}
// FUNCIÓN TEXTO

function texto(contenido, y) {

  fill(245);

  textAlign(CENTER, CENTER);

  textSize(20);

  text(contenido,400,y);
}

// FUNCIÓN TÍTULO

function titulo(contenido) {

  fill(250);
  textAlign(CENTER, CENTER);
  textSize(32);
  text(contenido,400,40);
}
// DETECTAR CLICK
function clicBoton(x, y, ancho, alto) {

  if (
    mouseX > x &&
    mouseX < x + ancho &&
    mouseY > y &&
    mouseY < y + alto
  ) {
return true;
  }
return false;
}
// CLIC DEL MOUSE
function mousePressed() {
Botones();
}
