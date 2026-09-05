let spritesheet;

let idleFrames = [];
let runFrames = [];
let jumpFrames = [];

let estado = "idle";
let frameActual = 0;
let ultimoCambio = 0;

let velocidadIdle = 180;
let velocidadRun = 90;
let velocidadJump = 120;

let personajeX = 400;
let personajeY = 470;
let direccion = 1;

const ANCHO_FRAME = 32;
const ALTO_FRAME = 32;
const ESCALA = 4;


function preload() {
  spritesheet = loadImage("media/gatita-spritesheet.png");
}


function setup() {
  createCanvas(800, 600);
  noSmooth();

  // Cada fila del spritesheet contiene una animación.
  idleFrames = crearFrames(spritesheet, 0, 6);
  runFrames = crearFrames(spritesheet, 1, 8);
  jumpFrames = crearFrames(spritesheet, 2, 4);

  ultimoCambio = millis();
}


function draw() {
  dibujarEscena();

  // MAQUINA DE ESTADOS
  if (estado == "idle") {
    reproducirAnimacion(idleFrames, velocidadIdle, personajeX, personajeY);

  } else if (estado == "run") {
    reproducirAnimacion(runFrames, velocidadRun, personajeX, personajeY);

    personajeX += 2 * direccion;

    // Si sale de la pantalla, aparece del otro lado.
    if (personajeX > width + 40) {
      personajeX = -40;
    }

    if (personajeX < -40) {
      personajeX = width + 40;
    }

  } else if (estado == "jump") {
    reproducirAnimacion(jumpFrames, velocidadJump, personajeX, personajeY);
  }

  mostrarInformacion();
}


function crearFrames(sheet, fila, cantidad) {
  let frames = [];

  for (let i = 0; i < cantidad; i++) {
    let x = i * ANCHO_FRAME;
    let y = fila * ALTO_FRAME;

    let frame = sheet.get(
      x,
      y,
      ANCHO_FRAME,
      ALTO_FRAME
    );

    frames.push(frame);
  }

  return frames;
}



function reproducirAnimacion(frames, velocidad, x, y) {

  // MANEJO DEL TIEMPO CON MILLIS()
  if (millis() - ultimoCambio >= velocidad) {
    frameActual++;
    ultimoCambio = millis();
  }

  // Si llegamos al final:
  if (frameActual >= frames.length) {

    // El salto se reproduce una sola vez
    // y después vuelve a idle.
    if (estado == "jump") {
      cambiarEstado("idle");
      return;
    } else {
      frameActual = 0;
    }
  }

  let frame = obtenerFrame(frames);

  push();
  imageMode(CENTER);

  // Girar horizontalmente para mirar a izquierda/derecha.
  translate(x, y);

  if (direccion == -1) {
    scale(-1, 1);
  }

  image(
    frame,
    0,
    0,
    ANCHO_FRAME * ESCALA,
    ALTO_FRAME * ESCALA
  );

  pop();
}


function obtenerFrame(frames) {
  return frames[frameActual];
}

function cambiarEstado(nuevoEstado) {

  if (estado != nuevoEstado) {
    estado = nuevoEstado;
    frameActual = 0;
    ultimoCambio = millis();
  }
}



function keyPressed() {

  if (key == "a" || key == "A") {
    direccion = -1;
    cambiarEstado("run");
  }

  if (key == "d" || key == "D") {
    direccion = 1;
    cambiarEstado("run");
  }

  if (key == " ") {
    cambiarEstado("jump");
  }

  if (key == "i" || key == "I") {
    cambiarEstado("idle");
  }

  if (key == "r" || key == "R") {
    estado = "idle";
    frameActual = 0;
    personajeX = 400;
    direccion = 1;
    ultimoCambio = millis();
  }
}

function dibujarEscena() {

  // Cielo
  background(190, 220, 245);

  // Sol
  noStroke();
  fill(255, 220, 120);
  ellipse(690, 90, 85, 85);

  // Nubes
  dibujarNube(140, 105);
  dibujarNube(500, 145);

  // Montañas
  fill(145, 180, 170);

  triangle(0, 400, 190, 220, 380, 400);
  triangle(270, 400, 510, 190, 800, 400);

  // Árbol
  fill(100, 70, 50);
  rect(90, 260, 25, 145);

  fill(105, 170, 100);
  ellipse(105, 240, 110, 100);
  ellipse(70, 270, 90, 80);
  ellipse(140, 270, 90, 80);

  // Suelo
  fill(105, 175, 105);
  rect(0, 400, width, 200);

  // Camino
  fill(185, 150, 110);
  rect(0, 510, width, 90);

  // Línea superior del suelo
  fill(75, 140, 75);
  rect(0, 400, width, 12);
}

function dibujarNube(x, y) {
  fill(255);
  noStroke();

  ellipse(x, y, 50, 30);
  ellipse(x + 25, y - 10, 55, 40);
  ellipse(x + 50, y, 50, 30);
  rect(x, y, 50, 20);
}

function mostrarInformacion() {
  fill(40);
  noStroke();
  rect(15, 15, 310, 80, 10);

  fill(255);
  textAlign(LEFT);
  textSize(18);

  text("Estado: " + estado.toUpperCase(), 30, 42);

  textSize(13);
  text("A / D = correr     ESPACIO = saltar", 30, 65);
  text("I = idle          R = reiniciar", 30, 84);
}
